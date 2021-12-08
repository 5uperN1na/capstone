import * as mysql from 'mysql';
import config from '../config';
import med_categories from './queries/med_categories';
import users from './queries/users';
import med_videos from './queries/med_videos';
import affirm_videos from './queries/affirm_videos';
import affirm_categories from './queries/affirm_categories';
import blog_categories from './queries/blog_categories';
import blogs from './queries/blogs';
import quotes from './queries/quotes';

//sql connection

const pool = mysql.createPool(config.mysql);

//query helper function

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);

        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

export default {
    med_videos,
    med_categories,
    users,
    affirm_videos,
    affirm_categories,
    blogs,
    blog_categories,
    quotes
}