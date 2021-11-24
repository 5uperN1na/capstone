export interface CannedResponse {
    insertId?: number;
    affectedRows?: number;
    changedRows?: number;
}

export interface IMedVideo {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    video_url?: string;
    _created: Date;
    name?: string;

}

export interface IMedCategory {
    id?: number;
    name?: string;
    _created?: Date;
}

export interface IAffirmVideo {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    video_url?: string;
    _created: Date;
    name?: string;

}


export interface IHome {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    video_url?: string;
    _created: Date;
    name?: string;

}





export interface ILogin {
    id?: number;
    email?: string;
    password?: string;
    _created: Date;

}


export interface IRegister {
    id?: number;
    email?: string;
    password?: string;
    first?: string;
    last?: string;
    _created: Date;

}


export interface IBlog {
    id?: number;
    title?: string;
    author?: string;
    content?: string;
    _created: Date;

}