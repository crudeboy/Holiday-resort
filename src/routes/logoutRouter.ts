import { Router } from 'express';
import { auth } from '../controllers/auth';
const router = Router();
router.get('/', auth, async (req: any, res) => {
  console.log(req.user);
  console.log(req.token);
  req.user.tokens = req.user.tokens.filter(
    (token: { [key: string]: string }) => {
      return token.token !== req.token;
    }
  );
  await req.user.save();
  res.redirect('/holidayresort');
});
export default router;
