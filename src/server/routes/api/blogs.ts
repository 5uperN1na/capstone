import * as express from 'express';
import * as passport from 'passport';
import * as path from 'path';
import db from '../../db';

const router = express.Router();

//get route

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [blog] = await db.blogs.one(id);
            res.json(blog);

        } else {
            
            const blogs = await db.blogs.all();
            res.json(blogs);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get blog route failed.', error })

    }

});


//post route

router.post('/', async (req, res) => {

    const newBlog = req.body;
    try {

        await db.blogs.insert (newBlog.blog_categoryid, newBlog.title, newBlog.author, newBlog.content);
        res.json({msg:  'Blog was posted successfully.'});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post blog route failed.', error })

    }

});


//delete route

router.delete('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
            await db.blogs.deleteBlog(id);
            res.json({msg:  'Blog was deleted successfully.'});
     
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Delete blog route failed.', error })

    }

});


//edit route 

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editBlog = req.body;

    try {
        await db.blogs.edit(id, editBlog.blog_categoryid, editBlog.title, editBlog.author, editBlog.content);
        res.json({msg:  'Blog was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit blog route failed.', error })

}

});



export default router;