CREATE DATABASE marvel_battle;
use marvel_battle;
CREATE TABLE IF NOT EXISTS online_users (
    login VARCHAR(30) NOT NULL,
    path_avatar VARCHAR(100),
    PRIMARY KEY (login)
);
GRANT ALL PRIVILEGES ON marvel_battle . * TO 'vponomaren'@'localhost';
FLUSH PRIVILEGES;

