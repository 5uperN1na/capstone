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
            const [quote] = await db.quotes.one(id);
            res.json(quote);

        } else {
            
            const quotes = await db.quotes.all();
            res.json(quotes);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get quote route failed.', error })

    }

});


//post route

router.post('/', async (req, res) => {

    const newQuote = req.body;
    try {

        await db.quotes.insert (newQuote.blog_categoryid, newQuote.title, newQuote.author);
        res.json({msg:  'Quote was posted successfully.'});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post quote route failed.', error })

    }

});


//delete route

router.delete('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
            await db.quotes.deleteQuote(id);
            res.json({msg:  'Quote was deleted successfully.'});
     
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Delete quote route failed.', error })

    }

});


//edit route 

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editQuote = req.body;

    try {
        await db.quotes.edit(id, editQuote.blog_categoryid, editQuote.title, editQuote.author);
        res.json({msg:  'Quoate was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit quote route failed.', error })

}

});



export default router;