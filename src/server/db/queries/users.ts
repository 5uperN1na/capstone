import { Query } from '../index';

const all = () => Query('SELECT id, users.first, users.last FROM users');

const insert = (email: string, password:string, first:string, last:string) => {
    return Query ('INSERT into med_videos (email, password, first, last) VALUES (?, ?, ?, ?)', [email, password, first, last]);
    } 
     

const one =  (id: number) => Query('SELECT * FROM users WHERE id = ?', [id]);

const find = (column: string, value: number | string) => Query('SELECT * FROM users WHERE ?? = ?', [column, value]);
 
 
export default{
   all,
   insert,
   one, 
   find
}