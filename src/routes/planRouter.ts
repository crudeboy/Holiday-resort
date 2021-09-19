import { Router } from 'express';
import { auth } from '../controllers/auth';
const router = Router();

router.get('/', (req, res) => {
  res.render('plan');
});

export default router;
