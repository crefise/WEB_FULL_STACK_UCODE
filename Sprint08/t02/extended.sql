use ucode_web;

CREATE TABLE powers (
    id int NOT NULL AUTO_INCREMENT,
    hero_id int,
    name VARCHAR(256) NOT NULL,
    points int NOT NULL,
    type ENUM('attack', 'defense') NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);

CREATE TABLE races (
    id int NOT NULL AUTO_INCREMENT,
    hero_id int UNIQUE,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);

CREATE TABLE teams (
    id int NOT NULL AUTO_INCREMENT,
    hero_id int,
    name VARCHAR(256) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(hero_id) REFERENCES heroes(id) ON DELETE CASCADE
);




INSERT INTO powers (name ,hero_id, points, type) VALUES ('bloody fist', 1, 110, 'attack');
INSERT INTO powers (name ,hero_id, points, type) VALUES ('iron shield', 2, 200, 'defense');
INSERT INTO powers (name , points, type) VALUES ('iron shield2', 200, 'defense');



INSERT INTO races (hero_id, name) VALUES('1', 'Human');
INSERT INTO races (hero_id, name) VALUES('2', 'Kree');
INSERT INTO races (hero_id, name) VALUES('3', 'Kree');
INSERT INTO races (hero_id, name) VALUES('4', 'Kree');
INSERT INTO races (hero_id, name) VALUES('5', 'Kree');


INSERT INTO teams (hero_id, name) VALUES('1', 'Avengers');
INSERT INTO teams (hero_id, name) VALUES('2', 'Avengers');
INSERT INTO teams (hero_id, name) VALUES('2', 'Hydra');


