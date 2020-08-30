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
            const [med_video] = await db.med_videos.one(id);
            res.json(med_video);

        } else {
            const med_videos = await db.med_videos.all();
            res.json(med_videos);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get meditation video route failed.', error })

    }

});


//post route

router.post('/', async (req, res) => {

    const newVideo = req.body;
    try {

        await db.med_videos.insert (newVideo.med_categoryid, newVideo.title, newVideo.author, newVideo.video_url);
        res.json({msg:  'Meditation video was posted successfully.'});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post meditation video route failed.', error })

    }

});


//delete route

router.delete('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
            await db.med_videos.deleteMeditation(id);
            res.json({msg:  'Meditation video was deleted successfully.'});
     
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Delete meditation video route failed.', error })

    }

});


//edit route 

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editVideo = req.body;

    try {
        await db.med_videos.edit(id, editVideo.med_categoryid, editVideo.title, editVideo.author, editVideo.video_url);
        res.json({msg:  'Meditation video was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit meditation video route failed.', error })

}

});



export default router;