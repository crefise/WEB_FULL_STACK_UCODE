CREATE DATABASE ucode_web;
CREATE USER 'vponomaren'@'localhost' IDENTIFIED BY 'securepass';
GRANT ALL PRIVILEGES ON ucode_web . * TO 'vponomaren'@'localhost';
FLUSH PRIVILEGES;
