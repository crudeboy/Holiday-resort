import { Router } from 'express';
import { auth } from '../controllers/auth';
const router = Router();

router.get('/', (req, res) => {
  res.render('plan2');
});

export default router;