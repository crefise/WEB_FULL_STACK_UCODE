use ucode_web;
CREATE TABLE IF NOT EXISTS heroes (
    Id int NOT NULL AUTO_INCREMENT,
    Name VARCHAR(30) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL,   
    race VARCHAR(255) DEFAULT 'human' NOT NULL,
    class_role ENUM('tankman', 'healer', 'dps') NOT NULL,
    PRIMARY KEY (Id)
);