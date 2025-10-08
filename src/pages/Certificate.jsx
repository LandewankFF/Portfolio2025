import { useState } from "react";
// import HeroSection from "../components/HeroSection"; // ← HAPUS atau comment
// import Navbar from "../components/Navbar";
// import Footer from '../components/Footer'

// import awsDicoding from "../assets/Certificates/aws_dicoding.jpg";
import certificatesAssets from "../assets/Certificates/images";
// import bgCertificate from "../assets/Certificates/aws_dicoding.jpg";

const Certificate = () => {
  const [search, setSearch] = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Cloud Practitioner Essentials",
      issuer: "Dicoding Indonesia",
      issueDate: "2023-9-11",
      validUntil: "2025-9-11",
      description:
        "Introduction to AWS, Cloud Computing, Global Infrastructure, Networking, Storage & Databases, Security, Monitoring & Analytics, Pricing & Support, Migration & Innovation, Cloud Journey, AWS Cloud Practitioner Basics.",
      image: certificatesAssets.aws_dicoding,
    },
    {
      id: 2,
      title: "CI/CD Implementation",
      issuer: "Dicoding Indonesia",
      issueDate: "2023-10-10",
      validUntil: "2023-10-10",
      description:
        "Introduction to CI/CD, Continuous Integration, Continuous Deployment, Operations & Monitoring, and DevSecOps.",
      image: certificatesAssets.cicd,
    },
    {
      id: 3,
      title: "Introduction Linux",
      issuer: "The Linux Foundation",
      issueDate: "2025-08-07",
      validUntil: "Lifetime",
      description:
        "Introduction to containerization using Docker CLI and Docker Compose.",
      image: certificatesAssets.Linux,
    },
  ];

  // urutkan terbaru
  const sortedCertificates = [...certificates].sort(
    (a, b) => new Date(b.issueDate) - new Date(a.issueDate)
  );

  // filter search
  const filteredCertificates = sortedCertificates.filter(
    (cert) =>
      cert.title.toLowerCase().includes(search.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(search.toLowerCase()) ||
      cert.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* <Navbar /> */}
      
      {/* Header Section - Ganti HeroSection */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-32 py-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-4xl text-primary">
              <ion-icon name="ribbon"></ion-icon>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">My Certificates</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Professional certifications and achievements from my learning journey in IT infrastructure and DevOps.
          </p>
        </div>
      </div>

      <section className="px-6 md:px-20 lg:px-32 py-12">
        {/* Search */}
        <div className="max-w-md mx-auto mb-10 overflow-hidden">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search certificates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />

            {/* Search Icon */}
            <button
              type="button"
              className="absolute right-0 text-2xl p-2 bg-black rounded-lg text-white"
            >
              <ion-icon name="search"></ion-icon>
            </button>
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-md overflow-hidden border flex flex-col hover:shadow-lg transition"
              >
                {/* Gambar Sertifikat */}
                <div className="aspect-[4/3] w-full bg-gray-100 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="object-contain w-full h-full p-4"
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h2 className="text-lg font-semibold mb-2">{cert.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Issued by: {cert.issuer}
                  </p>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="mt-auto px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-dark transition"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No certificates found.
            </p>
          )}
        </div>

        {/* Modal Preview */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl max-w-3xl w-full p-6 relative">
              {/* Image Preview */}
              <div className="w-full flex justify-center mb-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[70vh] object-contain"
                />
              </div>

              {/* Info */}
              <h2 className="text-2xl font-bold">{selectedCert.title}</h2>
              <p className="text-sm text-gray-500">
                Issued by: {selectedCert.issuer}
              </p>
              <p className="text-sm text-gray-500">
                Issued on: {selectedCert.issueDate}
              </p>
              <p className="text-sm text-gray-500">
                Valid until: {selectedCert.validUntil}
              </p>
              <p className="text-gray-700 mt-2">{selectedCert.description}</p>

              {/* Close Button bawah */}
              <div className="mt-6 text-right">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* <Footer /> */}
    </>
  );
};

export default Certificate;