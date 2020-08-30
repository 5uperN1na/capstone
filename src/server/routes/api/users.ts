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
            const [user] = await db.users.one(id);
            res.json(user);

        } else {
            const users = await db.users.all();
            res.json(users);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get user route failed.', error })

    }

});


//post route

router.post('/', async (req, res) => {

    const newUser = req.body;
    try {

        await db.users.insert (newUser.email, newUser.password, newUser.first, newUser.last);
        res.json({msg:  'User was posted successfully.'});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post user route failed.', error })

    }

});


//edit route 

router.put('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    const editUser = req.body;

    try {
        await db.users.edit(id, editUser.password, editUser.first, editUser.last);
        res.json({msg:  'User was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit user route failed.', error })

}

});



export default router;