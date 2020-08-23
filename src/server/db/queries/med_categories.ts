import { Query } from '../index';

//get all

const all = () => Query ('SELECT * from med_categories');

//get one

const one = (id: number) => Query ('SELECT * from med_categories WHERE id = ?', [id]);

//insert one

const insert = (categoryid: number, title: string, author: string, price: number) => {
    return Query ('INSERT into books (categoryid, title, author, price) VALUES (?, ?, ?, ?)', [categoryid, title, author, price]);
    } 
     


export default {
    all,
    one,
    insert

}