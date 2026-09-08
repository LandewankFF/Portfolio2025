import express from 'express';
import { 
  getAllCertificates, 
  getCertificateById, 
  createCertificate, 
  updateCertificate, 
  deleteCertificate 
} from '../controllers/certificate.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', getAllCertificates);
router.get('/:id', getCertificateById);

// Protected routes
router.post('/', verifyToken, createCertificate);
router.put('/:id', verifyToken, updateCertificate);
router.delete('/:id', verifyToken, deleteCertificate);

export default router;
