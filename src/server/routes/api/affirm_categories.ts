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

            const [affirm_category] = await db.affirm_categories.one(id);
            res.json(affirm_category);
            
         } else {

            const a_categories = await db.affirm_categories.all();
            res.json(a_categories);

         }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Affirmation categories GET route failed.", error});
    }

});

//insert

router.post('/', async (req, res ) => {

   
    const newAffirmCategory = req.body;
    

    try {

        await db.affirm_categories.insert(newAffirmCategory.id, newAffirmCategory.name);
        res.json({msg:  'Affirmation category was posted successfully.'});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Affirmation categories Post route failed.", error});
    }

});

//edit 

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editAffirmCategory = req.body;

    try {
        await db.affirm_categories.edit(id, editAffirmCategory.name);
        res.json({msg:  'Affirmation category was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit affirmation category route failed.', error })

}

});




export default router;
