import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const AdminCertificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    description: '',
    validUntil: '',
    issueDate: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const fetchCertificates = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/certificates');
      const data = await res.json();
      setCertificates(data);
    } catch (err) {
      console.error('Failed to fetch certificates', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const openModal = (cert = null) => {
    if (cert) {
      setEditingId(cert.id);
      setFormData({
        title: cert.title,
        issuer: cert.issuer,
        description: cert.description || '',
        validUntil: cert.validUntil || '',
        issueDate: new Date(cert.issueDate).toISOString().split('T')[0],
      });
      setCurrentImageUrl(cert.image);
    } else {
      setEditingId(null);
      setFormData({
        title: '',
        issuer: '',
        description: '',
        validUntil: '',
        issueDate: '',
      });
      setCurrentImageUrl('');
    }
    setImageFile(null);
    setIsModalOpen(true);
  };

  const uploadImage = async () => {
    if (!imageFile) return currentImageUrl;
    
    const token = localStorage.getItem('adminToken');
    const form = new FormData();
    form.append('image', imageFile);

    const res = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: form,
    });

    if (!res.ok) throw new Error('Image upload failed');
    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    
    try {
      let imageUrl = currentImageUrl;
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      const payload = {
        ...formData,
        image: imageUrl,
      };

      const url = editingId 
        ? `http://localhost:5000/api/certificates/${editingId}`
        : 'http://localhost:5000/api/certificates';
        
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error('Failed to save certificate');
      
      setIsModalOpen(false);
      fetchCertificates();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this certificate?')) return;
    
    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`http://localhost:5000/api/certificates/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!res.ok) throw new Error('Failed to delete certificate');
      fetchCertificates();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Manage Certificates</h1>
        <button
          onClick={() => openModal()}
          className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 transition"
        >
          <Plus className="w-4 h-4" /> Add Certificate
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="p-4 font-semibold text-gray-600">Certificate</th>
              <th className="p-4 font-semibold text-gray-600">Issuer</th>
              <th className="p-4 font-semibold text-gray-600">Issue Date</th>
              <th className="p-4 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="4" className="p-4 text-center text-gray-500">Loading...</td></tr>
            ) : certificates.length === 0 ? (
              <tr><td colSpan="4" className="p-4 text-center text-gray-500">No certificates found.</td></tr>
            ) : (
              certificates.map(cert => (
                <tr key={cert.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    <img src={cert.image} alt={cert.title} className="w-16 h-12 rounded object-cover border" />
                    <div>
                      <p className="font-semibold text-gray-900">{cert.title}</p>
                      <p className="text-sm text-gray-500 line-clamp-1">{cert.description}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-700">{cert.issuer}</td>
                  <td className="p-4 text-gray-700">{new Date(cert.issueDate).toLocaleDateString()}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openModal(cert)} className="p-2 text-blue-600 hover:bg-blue-50 rounded transition">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDelete(cert.id)} className="p-2 text-red-600 hover:bg-red-50 rounded transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold">{editingId ? 'Edit Certificate' : 'Add New Certificate'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issuer</label>
                <input required type="text" value={formData.issuer} onChange={e => setFormData({...formData, issuer: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image Upload</label>
                <div className="flex items-center gap-4">
                  {(currentImageUrl || imageFile) && (
                    <img src={imageFile ? URL.createObjectURL(imageFile) : currentImageUrl} alt="Preview" className="w-24 h-16 rounded object-cover border" />
                  )}
                  <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="w-full px-3 py-2 border rounded-lg text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
                  <input required type="date" value={formData.issueDate} onChange={e => setFormData({...formData, issueDate: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
                  <input placeholder="Lifetime or Date" type="text" value={formData.validUntil} onChange={e => setFormData({...formData, validUntil: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Save Certificate</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCertificate;
