import { Router } from 'express';
import { places } from '../utils/places';
const router = Router();
interface Use {
  [key: string]: number | string;
}

router.get('/', (req, res) => {
  const { key, location } = req.query;

  const find = (key as string) || '';
  const place = (location as string) || '';
  places(place, find, (error: string | undefined, data: undefined | Use[]) => {
    if (error) {
      return res.send({ error });
    }
  
    res.render('location-selection', { data: data || [], key, location });
  });
});

export default router;
