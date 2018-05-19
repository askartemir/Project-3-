

CREATE DATABASE project3DB;

USE project3DB;

CREATE TABLE artist
(
	artist_Id INTEGER(50) AUTO_INCREMENT,
    artist_Name VARCHAR(255),
    artist_email VARCHAR(255),
    PRIMARY KEY(artist_Id)
);

CREATE TABLE artwork
(
	piece_Id INTEGER(50) AUTO_INCREMENT,
    img_url VARCHAR(512),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(artist_Id) REFERENCES artist(artist_Id)
);
