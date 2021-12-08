import { Query } from '../index';

//get all

const all = () => Query ('SELECT quotes.*, blog_categories.name from quotes JOIN blog_categories on blog_categories.id=quotes.blog_categoryid;');


//get one

const one = (id: number) => Query ('SELECT quotes.*, blog_categories.name from quotes JOIN blog_categories on blog_categories.id=quotes.blog_categoryid WHERE quotes.id = ?', [id]);


//insert one

const insert = (blog_categoryid: number, title: string, author: string) => {
return Query ('INSERT into quotes (blog_categoryid, title, author) VALUES (?, ?, ?)', [blog_categoryid, title, author]);
} 
 

//delete one

const deleteQuote = (id: number) => Query ('DELETE FROM quotes WHERE id = ?', [id]);

//edit one

const edit = (id: number, blog_categoryid: number, title: string, author: string) => Query('UPDATE quotes SET blog_categoryid = ?, title = ?, author = ? WHERE id = ?', [blog_categoryid, title, author, id]);



export default {
    all,
    one,
    edit,
    deleteQuote,
    insert


}