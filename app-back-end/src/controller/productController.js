import ProductModel from "../models/product.js"

export const getPosts = async (req,res)=>{
    try {
        // const productData  = new ProductModel({
        //     name:'test',
        //     img:'test',
        //     category:'test',
        //     describe:'test',
        //     size:'14',
        //     price:'46',
        //     sold:'123',
        // });
        // productData.save();
        const posts = await ProductModel.find();
        console.log('posts',posts);
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({error : err});
    }
}
export const createPosts = async (req,res)=>{
    try {
        const newPost = req.body;
        const productData  = new ProductModel(newPost);
        await productData.save();
        res.status(200).json(productData);
    } catch (error) {
        res.status(500).json({error : err});
    }
}
export const updatePosts = async (req,res)=>{
    try {
        const updatePost = req.body;
        const productData  = await ProductModel.findOneAndUpdate({_id:updatePost._id}, updatePost, {new: true});

        res.status(200).json(productData);
    } catch (error) {
        res.status(500).json({error : err});
    }
}
