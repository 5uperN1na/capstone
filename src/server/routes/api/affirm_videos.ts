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
            const [affirm_video] = await db.affirm_videos.one(id);
            res.json(affirm_video);

        } else {
            
            const affirm_videos = await db.affirm_videos.all();
            res.json(affirm_videos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get affirmation video route failed.', error })

    }

});


//post route

router.post('/', async (req, res) => {

    const newAffirmVideo = req.body;
    try {

        await db.affirm_videos.insert (newAffirmVideo.affirm_categoryid, newAffirmVideo.title, newAffirmVideo.author, newAffirmVideo.video_url);
        res.json({msg:  'Affirmation video was posted successfully.'});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post affirmation video route failed.', error })

    }

});


//delete route

router.delete('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
            await db.affirm_videos.deleteAffirmation(id);
            res.json({msg:  'Meditation video was deleted successfully.'});
     
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Delete affirmation video route failed.', error })

    }

});


//edit route 

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editAffirmVideo = req.body;

    try {
        await db.med_videos.edit(id, editAffirmVideo.med_categoryid, editAffirmVideo.title, editAffirmVideo.author, editAffirmVideo.video_url);
        res.json({msg:  'Meditation video was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit affirmation video route failed.', error })

}

});



export default router;