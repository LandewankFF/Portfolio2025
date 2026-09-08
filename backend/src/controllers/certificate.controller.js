import prisma from '../prisma.js';

export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: { issueDate: 'desc' },
    });
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certificates' });
  }
};

export const getCertificateById = async (req, res) => {
  try {
    const { id } = req.params;
    const certificate = await prisma.certificate.findUnique({ where: { id: parseInt(id) } });
    if (!certificate) return res.status(404).json({ error: 'Certificate not found' });
    res.status(200).json(certificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch certificate' });
  }
};

export const createCertificate = async (req, res) => {
  try {
    const data = req.body;
    if (data.issueDate) {
      data.issueDate = new Date(data.issueDate);
    }
    const newCertificate = await prisma.certificate.create({ data });
    res.status(201).json(newCertificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create certificate' });
  }
};

export const updateCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (data.issueDate) {
      data.issueDate = new Date(data.issueDate);
    }
    const updatedCertificate = await prisma.certificate.update({
      where: { id: parseInt(id) },
      data,
    });
    res.status(200).json(updatedCertificate);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update certificate' });
  }
};

export const deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.certificate.delete({ where: { id: parseInt(id) } });
    res.status(200).json({ message: 'Certificate deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete certificate' });
  }
};
