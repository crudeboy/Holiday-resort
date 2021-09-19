import { Router } from 'express';
import { auth } from '../controllers/auth';
import { login } from '../controllers/authController';
const router = Router();
router.get('/', auth, (req, res) => {
  console.log(req.cookies);
  res.render('loginusers');
});
export default router;
