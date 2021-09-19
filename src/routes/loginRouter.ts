import { Router } from 'express';
import { login } from '../controllers/authController';
const router = Router();

router.get('/', (req, res) => {
  res.render('login');
});
router.post('/', login);
export default router;
