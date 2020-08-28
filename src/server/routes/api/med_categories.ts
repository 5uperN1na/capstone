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

            const [med_category] = await db.med_categories.one(id);
            res.json(med_category);
            
         } else {

            const m_categories = await db.med_categories.all();
            res.json(m_categories);

         }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Meditation categories GET route failed.", error});
    }

});

//insert

router.post('/', async (req, res ) => {

    const id = Number (req.params.id);
    const newCategory = req.body;
    

    try {

        await db.med_categories.insert(id, newCategory.name);
        res.json({msg:  'Meditation category was posted successfully.'});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Meditation categories Post route failed.", error});
    }

});

//edit 

router.put('/:id', async (req, res) => {

    const id = Number (req.params.id);
    const editCategory = req.body;

    try {

        await db.med_categories.edit(editCategory.id, editCategory.name);
        res.json({msg:  'Meditation category was edited successfully.'});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Meditation categories Put route failed.", error});
        
    }

});


export default router;
