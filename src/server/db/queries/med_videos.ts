import { Query } from '../index';

//get all

const all = () => Query ('SELECT med_videos.*, med_categories.name from med_videos JOIN med_categories on med_categories.id=med_videos.med_categoryid;');


//get one

const one = (id: number) => Query ('SELECT med_videos.*, med_categories.name from med_videos JOIN med_categories on med_categories.id=med_videos.med_categoryid WHERE med_videos.id = ?', [id]);


//insert one

const insert = (med_categoryid: number, title: string, author: string, video_url: string) => {
return Query ('INSERT into med_videos (med_categoryid, title, author, video_url) VALUES (?, ?, ?, ?)', [med_categoryid, title, author, video_url]);
} 
 

//delete one

const deleteMeditation = (id: number) => Query ('DELETE FROM med_videos WHERE id = ?', [id]);

//edit one

const edit = (id: number, med_categoryid: number, title: string, author: string, video_url: string) => Query('UPDATE med_videls SET med_categoryid = ?, title = ?, author = ?, video_url = ? WHERE id = ?', [med_categoryid, title, author, video_url, id]);



export default {
    all,
    one,
    edit,
    deleteMeditation,
    insert


}