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
	non_prenotato BOOLEAN NOT NULL,
	descrizione TEXT,
	immagine CHAR(100),
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
INSERT INTO biblioteche VALUES (NULL, 'Biblioteca Provinciale Salvatore Tommasi', 30,'8:00-18:00',NULL,'Piazza del Palazzo, 30','42.35089219757118', '13.39926230167777','bella biblioteca','percorsoimmagine');
INSERT INTO libri VALUES (NULL, 'La fattoria degli animali', 'George Orwell','Mondadori','romanzo',1, TRUE,'molto bello','fattoria.jpg');
INSERT INTO libri VALUES (NULL, 'La fattoria degli animali', 'George Orwell','Mondadori','romanzo',1, TRUE,'molto bello','fattoria.jpg');
INSERT INTO libri VALUES (NULL, 'La coscienza di zeno', 'Italo Svevo','Newton Compton Editori','romanzo',1,TRUE,'Rimasto incompreso per lungo tempo, "La coscienza di Zeno" è il più importante romanzo di Svevo e uno dei capolavori della letteratura italiana contemporanea. È il resoconto di un viaggio nell\'oscurità della psiche, nella quale si riflettono complessi e vizi della società borghese dei primi del Novecento, le sue ipocrisie, i suoi conformismi e insieme la sua nascosta, tortuosa, ambigua voglia di vivere.','zeno.jpg');
INSERT INTO libri VALUES (NULL, 'La coscienza di zeno', 'Italo Svevo','Newton Compton Editori','romanzo',1, TRUE,'Rimasto incompreso per lungo tempo, "La coscienza di Zeno" è il più importante romanzo di Svevo e uno dei capolavori della letteratura italiana contemporanea. È il resoconto di un viaggio nell\'oscurità della psiche, nella quale si riflettono complessi e vizi della società borghese dei primi del Novecento, le sue ipocrisie, i suoi conformismi e insieme la sua nascosta, tortuosa, ambigua voglia di vivere.','zeno.jpg');
INSERT INTO libri VALUES (NULL, 'La coscienza di zeno', 'Italo Svevo','Newton Compton Editori','romanzo',1, TRUE,'Rimasto incompreso per lungo tempo, "La coscienza di Zeno" è il più importante romanzo di Svevo e uno dei capolavori della letteratura italiana contemporanea. È il resoconto di un viaggio nell\'oscurità della psiche, nella quale si riflettono complessi e vizi della società borghese dei primi del Novecento, le sue ipocrisie, i suoi conformismi e insieme la sua nascosta, tortuosa, ambigua voglia di vivere.','zeno.jpg');
INSERT INTO libri VALUES (NULL, 'Il Signore degli Anelli', 'J. R. R. Tolkien','Bompiani','fantasy',2, TRUE,'Il Signore degli Anelli è romanzo d\'eccezione, al di fuori del tempo: chiarissimo ed enigmatico, semplice e sublime. Dona alla felicità del lettore ciò che la narrativa del nostro secolo sembrava incapace di offrire: avventure in luoghi remoti e terribili, episodi d\'inesauribile allegria, segreti paurosi che si svelano a poco a poco, draghi crudeli e alberi che camminano, città d\'argento e di diamante poco lontane da necropoli tenebrose in cui dimorano esseri che spaventano solo al nominarli.','tlotr.jpg');
INSERT INTO libri VALUES (NULL, 'Il Signore degli Anelli', 'J. R. R. Tolkien','Bompiani','fantasy',2, TRUE,'Il Signore degli Anelli è romanzo d\'eccezione, al di fuori del tempo: chiarissimo ed enigmatico, semplice e sublime. Dona alla felicità del lettore ciò che la narrativa del nostro secolo sembrava incapace di offrire: avventure in luoghi remoti e terribili, episodi d\'inesauribile allegria, segreti paurosi che si svelano a poco a poco, draghi crudeli e alberi che camminano, città d\'argento e di diamante poco lontane da necropoli tenebrose in cui dimorano esseri che spaventano solo al nominarli.','tlotr.jpg');