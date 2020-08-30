import { Router } from 'express';
import { generateHash } from '../../utils/passwords';
import db from '../../db';
import { createToken } from '../../utils/tokens';

const router = Router ();

//post auth route

router.post('/', async (req, res)=> {
    const newUser = req.body;
    newUser.password = generateHash(newUser.password);
    try {

        const cannedResponse = await db.users.insert(newUser.email, newUser.password, newUser.first, newUser.last);
        const token = createToken ({userid: cannedResponse.insertID});
        res.json(token);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Registration failed", error});
        
    }

});


export default router;