import * as express from 'express';
import * as path from 'path';
import db from '../../db';
import * as passport from 'passport';

const router = express.Router();

//get route

router.get('/:id?', async (req, res) => {
    const id = Number (req.params.id);
    try {
        if (id) {

            const [blog_category] = await db.blog_categories.one(id);
            res.json(blog_category);
            
         } else {

            const blog_categories = await db.blog_categories.all();
            res.json(blog_categories);

         }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Blog categories GET route failed.", error});
    }

});

//insert

router.post('/', async (req, res ) => {

   
    const newBlogCategory = req.body;
    

    try {

        await db.blog_categories.insert(newBlogCategory.id, newBlogCategory.name);
        res.json({msg:  'Blog category was posted successfully.'});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Blog categories Post route failed.", error});
    }

});

//edit 

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editBlogCategory = req.body;

    try {
        await db.blog_categories.edit(id, editBlogCategory.name);
        res.json({msg:  'Affirmation category was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit Blog category route failed.', error })

}

});




export default router;
