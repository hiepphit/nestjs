CREATE TABLE IF NOT EXISTS users (
  id int AUTO_INCREMENT PRIMARY KEY,
  username varchar(50) not null,
  `password` varchar(50) not null
);
INSERT INTO users values (1,'admin', 'admin');