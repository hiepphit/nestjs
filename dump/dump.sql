CREATE TABLE IF NOT EXIST users (
  id int(11) AUTO_INCREMENT,
  username char not null,
  `password` varchar not null,
);
Insert into users (id,username,`password`) values (1, 'admin', 'admin');