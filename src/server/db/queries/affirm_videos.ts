import { Query } from '../index';

//get all

const all = () => Query ('SELECT affirm_videos.*, affirm_categories.name from affirm_videos JOIN affirm_categories on affirm_categories.id=affirm_videos.affirm_categoryid;');


//get one

const one = (id: number) => Query ('SELECT affirm_videos.*, affirm_categories.name from affirm_videos JOIN affirm_categories on affirm_categories.id=affirm_videos.affirm_categoryid WHERE affirm_videos.id = ?', [id]);


//insert one

const insert = (affirm_categoryid: number, title: string, author: string, video_url: string) => {
return Query ('INSERT into affirm_videos (affirm_categoryid, title, author, video_url) VALUES (?, ?, ?, ?)', [affirm_categoryid, title, author, video_url]);
} 
 

//delete one

const deleteAffirmation = (id: number) => Query ('DELETE FROM affirm_videos WHERE id = ?', [id]);

//edit one

const edit = (id: number, affirm_categoryid: number, title: string, author: string, video_url: string) => Query('UPDATE affirm_videos SET affirm_categoryid = ?, title = ?, author = ?, video_url = ? WHERE id = ?', [affirm_categoryid, title, author, video_url, id]);



export default {
    all,
    one,
    edit,
    deleteAffirmation,
    insert


}