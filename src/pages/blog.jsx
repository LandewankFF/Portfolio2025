import React, { useState, useMemo, useEffect } from 'react';
import { Search, Calendar, Tag, ArrowUpDown } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' or 'oldest'

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/blogs');
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error('Failed to fetch blogs', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Get all unique tags
  const allTags = ['All', ...new Set(blogPosts.flatMap(post => post.tags))];

  // Filter and sort blog posts
  const filteredPosts = useMemo(() => {
    let result = blogPosts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        post =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filter by selected tag
    if (selectedTag !== 'All') {
      result = result.filter(post => post.tags.includes(selectedTag));
    }

    // Sort by date
    result = [...result].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [searchQuery, selectedTag, sortOrder, blogPosts]);

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading articles...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">My Blog</h1>
          <p className="text-gray-600 text-lg">
            Thoughts, tutorials, and insights about DevOps and IT Infrastructure
          </p>
        </div>
      </div>

      {/* Search, Filter & Sort Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Filter & Sort */}
          <div className="flex gap-3 w-full lg:w-auto">
            {/* Sort Button */}
            <button
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-red-500 transition-colors"
            >
              <ArrowUpDown className="w-4 h-4" />
              <span className="text-sm font-medium">
                {sortOrder === 'newest' ? 'Newest' : 'Oldest'}
              </span>
            </button>
          </div>
        </div>

        {/* Tag Filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-red-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Count */}
        {(searchQuery || selectedTag !== 'All') && (
          <p className="mt-4 text-sm text-gray-600">
            Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 pb-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} formatDate={formatDate} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter</p>
          </div>
        )}
      </section>
    </div>
  );
};

const BlogCard = ({ post, formatDate }) => {
  const [imageHovered, setImageHovered] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 flex flex-col group">
      {/* Thumbnail */}
      <div
        className="relative aspect-video overflow-hidden cursor-pointer"
        onMouseEnter={() => setImageHovered(true)}
        onMouseLeave={() => setImageHovered(false)}
      >
        <img
          src={post.image}
          alt={post.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            imageHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div
          className={`absolute inset-0 bg-red-600 transition-opacity duration-300 ${
            imageHovered ? 'opacity-20' : 'opacity-0'
          }`}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 text-red-600" />
          <span>{formatDate(post.date)}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-100"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <button
          onClick={() => {
            if (post.link) {
              window.open(post.link, '_blank');
            }
          }}
          className="w-full px-4 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;