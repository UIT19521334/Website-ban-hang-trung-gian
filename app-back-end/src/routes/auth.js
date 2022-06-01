import express from 'express';
import { validateSignupRequest, isRequestValidated, validateSigninRequest } from '../validators/auth.js';
import { requireSignin, signin, signup } from '../controller/auth.js'
import { getPosts , createPosts , updatePosts } from '../controller/productController.js';
const router = express.Router();

router.post('/signin', validateSigninRequest, isRequestValidated, signin);

router.post('/signup', validateSignupRequest, isRequestValidated, signup);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

router.get('/', getPosts);
router.post('/',createPosts);
router.post('/update',updatePosts);
//module.exports = router;

export default router;