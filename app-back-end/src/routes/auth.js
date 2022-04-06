import express from 'express';
import { requireSignin, signin, signup } from '../controller/auth.js'

const router = express.Router();

router.post('/signin', signin);

router.post('/signup', signup);

router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user: 'profile' })
});

//module.exports = router;

export default router;