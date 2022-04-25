import express from 'express';
import { signin, signup } from '../controller/auth.js';
import { validateSignupRequest, isRequestValidated, validateSigninRequest } from '../validators/auth.js';

const router = express.Router();

router.post('/signin', validateSigninRequest, isRequestValidated, signin);

router.post('/signup', validateSignupRequest, isRequestValidated, signup);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

//module.exports = router;

export default router;