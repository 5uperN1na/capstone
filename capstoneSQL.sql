use capstone;

create table users (
id int(11) auto_increment,
email varchar (60) not null,
password varchar (60) not null,
role varchar(25) default 'guest',
first varchar(60) not null,
last varchar(60) not null,
created_at timestamp default now(),
primary key(id)
);

select * from users;

insert into users (email, password, first, last) values
("paula@test.com", "abc", "Paula", "Suarez");

CREATE TABLE `med_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

select * from med_categories;

select * from med_videos;

CREATE TABLE `med_videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `med_categoryid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `video_url` VARCHAR (255),
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_med_categoryid_med_category_id_idx` (`med_categoryid`),
  CONSTRAINT `fk_med_categoryid_med_category_id` FOREIGN KEY (`med_categoryid`) REFERENCES `med_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

select * from med_videos;

create table med_videos (
id int(11) auto_increment,
med_categoryid int(11) not null,
`title` varchar(100) NOT NULL,
`author` varchar(100) NOT NULL,
`video_url` VARCHAR (255),
created_at timestamp default current_timestamp,
primary key(id),
foreign key (med_categoryid) references categories(id)
);

insert into med_categories (id, name) values
(1, "Sleep"),
(2, "Relaxation"),
(3, "Stress");

INSERT INTO med_videos (med_categoryid, title, author, video_url) VALUE
(3, "Guided Meditation For Anxiety & Stress", "Jason Stephenson", "https://www.youtube.com/watch?v=6vO1wPAmiMQ");


SELECT med_videos.*, med_categories.name from med_videos JOIN med_categories on med_categories.id=med_videos.med_categoryid;

SELECT med_videos.*, med_categories.name from med_videos JOIN med_categories on med_categories.id=med_videos.med_categoryid WHERE med_videos.id = 1;

INSERT into med_videos (med_categoryid, title, author, video_url) VALUES (1, "Calm Sleep Down Meditation", "Jason Stephenson", "https://www.youtube.com/watch?v=88mXwNnPgXM");

UPDATE med_videos SET video_url = "DvR8rTffCP4" where id = 3;

CREATE TABLE `affirm_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT into affirm_videos (affirm_categoryid, title, author, video_url) VALUES (1, "Calm Sleep Down Meditation", "Jason Stephenson", "https://www.youtube.com/watch?v=88mXwNnPgXM");

insert into affirm_categories (id, name) values
(4, "Morning Affirmations");


select * from affirm_categories;

select * from affirm_videos;


create table affirm_videos (
id int(11) auto_increment,
affirm_categoryid int(11) not null,
`title` varchar(100) NOT NULL,
`author` varchar(100) NOT NULL,
`video_url` VARCHAR (255),
created_at timestamp default current_timestamp,
primary key(id),
foreign key (affirm_categoryid) references affirm_categories(id)
);

select * from blogs;

create table quotes (
id int(11) auto_increment,
blog_categoryid int(11) not null,
`title` varchar(100) NOT NULL,
`author` varchar(100) NOT NULL,
created_at timestamp default current_timestamp,
primary key(id),
foreign key (blog_categoryid) references blog_categories(id)
);

SELECT * from quotes JOIN blog_categories on blog_categories.id;

SELECT * from quotes JOIN blog_categories on blog_categories.id WHERE quotes.id = 1;

select * from quotes;

select * from med_videos;

select * from med_categories;

select * from blogs;

select * from blog_categories;

insert into blog_categories (id, name) values (6, "Acceptance"); 

insert into quotes (blog_categoryid, title, author) values (3, "Look for the life's golden nuggets! They belong to you.", "Paula Suarez"); 

INSERT into affirm_videos (affirm_categoryid, title, author, video_url) VALUES (4, "42 Inspiring Morning Affirmations", "Fresh Affirmations", "https://youtu.be/OVUXGDf6YSE");

INSERT into quotes (affirm_categoryid, title, author, video_url) VALUES (4, "42 Inspiring Morning Affirmations", "Fresh Affirmations", "https://youtu.be/OVUXGDf6YSE");
 
 
UPDATE affirm_videos SET video_url = "OVUXGDf6YSE" where id = 5;
