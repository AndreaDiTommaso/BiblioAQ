DROP DATABASE IF EXISTS BiblioAQ;
CREATE DATABASE BiblioAQ;
USE BiblioAQ;

CREATE TABLE utenti (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome CHAR(60) NOT NULL,
    cognome CHAR(60) NOT NULL,
	età TINYINT(3) NOT NULL,
	email CHAR(60) NOT NULL,
	password CHAR(60) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE biblioteche (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	nome CHAR(60) NOT NULL,
	posti TINYINT(3) NOT NULL,
	orari CHAR(60) NOT NULL,
	telefono CHAR(10),
	indirizzo CHAR(60) NOT NULL,
	latitudine CHAR(60) NOT NULL,
	longitudine CHAR(60) NOT NULL,
    info TEXT,
	immagine TEXT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE libri (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	titolo CHAR(60) NOT NULL,
	autore CHAR(60) NOT NULL,
	casa_editrice CHAR(60) NOT NULL,
	genere CHAR(60) NOT NULL,
	id_biblioteca SMALLINT UNSIGNED NOT NULL,
	prenotato BOOLEAN NOT NULL,
	descrizione TEXT,
	PRIMARY KEY (id),
	INDEX (id_biblioteca),
	FOREIGN KEY (id_biblioteca) REFERENCES biblioteche(id)
);
CREATE TABLE prenotazioni_libri (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	data CHAR(10) NOT NULL,
	id_libro SMALLINT UNSIGNED NOT NULL,
	id_utente SMALLINT UNSIGNED NOT NULL,
	PRIMARY KEY (id),
	INDEX (id_libro),
	FOREIGN KEY (id_libro) REFERENCES libri(id),
	INDEX (id_utente),
	FOREIGN KEY (id_utente) REFERENCES utenti(id)
);
CREATE TABLE prenotazioni_accesso (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	data CHAR(10) NOT NULL,
	ora CHAR(10) NOT NULL,
	id_biblioteca SMALLINT UNSIGNED NOT NULL,
	id_utente SMALLINT UNSIGNED NOT NULL,
	PRIMARY KEY (id),
	INDEX (id_biblioteca),
	FOREIGN KEY (id_biblioteca) REFERENCES biblioteche(id),
	INDEX (id_utente),
	FOREIGN KEY (id_utente) REFERENCES utenti(id)
);
CREATE TABLE preferiti (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	id_utente SMALLINT UNSIGNED NOT NULL,
	libri TEXT,
	PRIMARY KEY (id),
	INDEX (id_utente),
	FOREIGN KEY (id_utente) REFERENCES utenti(id)
);
INSERT INTO utenti VALUES (NULL, 'Mario', 'Rossi',40,'emailfasulla@boh.it','password');
INSERT INTO biblioteche VALUES (NULL, 'La tana di Lupoleone', 30,'8:00-18:00','348 074 7694','Via Antica Arischia, 20','42.37060138538752', '13.366074415740936','bella biblioteca','percorsoimmagine');
INSERT INTO libri VALUES (NULL, 'La fattoria degli animali ', ' George Orwell','Mondadori','romanzo',1, FALSE,'molto bello');