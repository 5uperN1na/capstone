import { Query } from '../index';

//get all

const all = () => Query ('SELECT blogs.*, blog_categories.name from blogs JOIN blog_categories on blog_categories.id=blogs.blog_categoryid;');


//get one

const one = (id: number) => Query ('SELECT blogs.*, blog_categories.name from blogs JOIN blog_categories on blog_categories.id=blogs.blog_categoryid WHERE blogs.id = ?', [id]);


//insert one

const insert = (blog_categoryid: number, title: string, author: string, content: string) => {
return Query ('INSERT into blogs (blog_categoryid, title, author, content) VALUES (?, ?, ?, ?)', [blog_categoryid, title, author, content]);
} 
 

//delete one

const deleteBlog = (id: number) => Query ('DELETE FROM blogs WHERE id = ?', [id]);

//edit one

const edit = (id: number, blog_categoryid: number, title: string, author: string, content: string) => Query('UPDATE blogs SET blog_categoryid = ?, title = ?, author = ?, content = ? WHERE id = ?', [blog_categoryid, title, author, content, id]);



export default {
    all,
    one,
    edit,
    deleteBlog,
    insert


}