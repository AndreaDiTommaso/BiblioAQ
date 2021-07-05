DROP DATABASE IF EXISTS BiblioAQ;
CREATE DATABASE BiblioAQ;
USE BiblioAQ;

CREATE TABLE utenti (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome CHAR(60) NOT NULL,
    cognome CHAR(60) NOT NULL,
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
	nome_biblioteca CHAR (60) NOT NULL,
	non_prenotato BOOLEAN NOT NULL,
	descrizione TEXT,
	immagine CHAR(100),
	PRIMARY KEY (id),
	INDEX (id_biblioteca),
	FOREIGN KEY (id_biblioteca) REFERENCES biblioteche(id)
);
CREATE TABLE prenotazioni_libri (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
	giorno CHAR(12) NOT NULL,
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
	giorno CHAR(12) NOT NULL,
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
	id_libro SMALLINT UNSIGNED NOT NULL,
	PRIMARY KEY (id),
	INDEX (id_utente),
	FOREIGN KEY (id_utente) REFERENCES utenti(id),
	INDEX (id_libro),
	FOREIGN KEY (id_libro) REFERENCES libri(id)
);
INSERT INTO utenti VALUES (NULL, 'Mario', 'Rossi','email','$2y$10$eBUqn9F4jDiU7cJRG/b0jObkpJGXRnM2UDLbfMdSofUc7DTN3772y');
INSERT INTO biblioteche VALUES (NULL, 'La tana di Lupoleone', 30,'8:00-18:00','348 074 7694','Via Antica Arischia, 20','42.37060138538752', '13.366074415740936','bella biblioteca','lupoleone.jpg');
INSERT INTO biblioteche VALUES (NULL, 'Biblioteca Provinciale Salvatore Tommasi', 30,'8:00-18:00','086261964','Piazza del Palazzo, 30','42.35089219757118', '13.39926230167777','bella biblioteca','S_Tommasi.jpg');
INSERT INTO libri VALUES (NULL, 'La fattoria degli animali', 'George Orwell','Mondadori','romanzo',1,'La tana di Lupoleone', TRUE,'Tutti gli animali sono uguali, ma alcuni animali sono più uguali degli altri. Stanchi dei soprusi, gli animali di una fattoria decidono di ribellarsi agli umani e, cacciato il proprietario, danno vita a un nuovo ordine fondato sull\'uguaglianza. Ben presto, però, emerge tra loro una nuova classe di burocrati, i maiali, che con astuzia, cupidigia e prepotenza si impongono sugli altri animali.','fattoria.jpg');
INSERT INTO libri VALUES (NULL, 'La fattoria degli animali', 'George Orwell','Mondadori','romanzo',1,'La tana di Lupoleone', TRUE,'Tutti gli animali sono uguali, ma alcuni animali sono più uguali degli altri. Stanchi dei soprusi, gli animali di una fattoria decidono di ribellarsi agli umani e, cacciato il proprietario, danno vita a un nuovo ordine fondato sull\'uguaglianza. Ben presto, però, emerge tra loro una nuova classe di burocrati, i maiali, che con astuzia, cupidigia e prepotenza si impongono sugli altri animali.','fattoria.jpg');
INSERT INTO libri VALUES (NULL, 'La coscienza di Zeno', 'Italo Svevo','Newton Compton Editori','romanzo',1,'La tana di Lupoleone',TRUE,'Rimasto incompreso per lungo tempo, "La coscienza di Zeno" è il più importante romanzo di Svevo e uno dei capolavori della letteratura italiana contemporanea. È il resoconto di un viaggio nell\'oscurità della psiche, nella quale si riflettono complessi e vizi della società borghese dei primi del Novecento, le sue ipocrisie, i suoi conformismi e insieme la sua nascosta, tortuosa, ambigua voglia di vivere.','zeno.jpg');
INSERT INTO libri VALUES (NULL, 'La coscienza di Zeno', 'Italo Svevo','Newton Compton Editori','romanzo',1,'La tana di Lupoleone', TRUE,'Rimasto incompreso per lungo tempo, "La coscienza di Zeno" è il più importante romanzo di Svevo e uno dei capolavori della letteratura italiana contemporanea. È il resoconto di un viaggio nell\'oscurità della psiche, nella quale si riflettono complessi e vizi della società borghese dei primi del Novecento, le sue ipocrisie, i suoi conformismi e insieme la sua nascosta, tortuosa, ambigua voglia di vivere.','zeno.jpg');
INSERT INTO libri VALUES (NULL, 'La coscienza di Zeno', 'Italo Svevo','Newton Compton Editori','romanzo',1,'La tana di Lupoleone', TRUE,'Rimasto incompreso per lungo tempo, "La coscienza di Zeno" è il più importante romanzo di Svevo e uno dei capolavori della letteratura italiana contemporanea. È il resoconto di un viaggio nell\'oscurità della psiche, nella quale si riflettono complessi e vizi della società borghese dei primi del Novecento, le sue ipocrisie, i suoi conformismi e insieme la sua nascosta, tortuosa, ambigua voglia di vivere.','zeno.jpg');
INSERT INTO libri VALUES (NULL, 'Il Signore degli Anelli', 'J. R. R. Tolkien','Bompiani','fantasy',2,'Biblioteca Provinciale Salvatore Tommasi', TRUE,'Il Signore degli Anelli è romanzo d\'eccezione, al di fuori del tempo: chiarissimo ed enigmatico, semplice e sublime. Dona alla felicità del lettore ciò che la narrativa del nostro secolo sembrava incapace di offrire: avventure in luoghi remoti e terribili, episodi d\'inesauribile allegria, segreti paurosi che si svelano a poco a poco, draghi crudeli e alberi che camminano, città d\'argento e di diamante poco lontane da necropoli tenebrose in cui dimorano esseri che spaventano solo al nominarli.','tlotr.jpg');
INSERT INTO libri VALUES (NULL, 'Il Signore degli Anelli', 'J. R. R. Tolkien','Bompiani','fantasy',2,'Biblioteca Provinciale Salvatore Tommasi', TRUE,'Il Signore degli Anelli è romanzo d\'eccezione, al di fuori del tempo: chiarissimo ed enigmatico, semplice e sublime. Dona alla felicità del lettore ciò che la narrativa del nostro secolo sembrava incapace di offrire: avventure in luoghi remoti e terribili, episodi d\'inesauribile allegria, segreti paurosi che si svelano a poco a poco, draghi crudeli e alberi che camminano, città d\'argento e di diamante poco lontane da necropoli tenebrose in cui dimorano esseri che spaventano solo al nominarli.','tlotr.jpg');
INSERT INTO libri VALUES (NULL, 'it', 'Stephen King','Sperling & Kupfer','horror',2,'Biblioteca Provinciale Salvatore Tommasi', TRUE,'A Derry, una piccola cittadina del Maine, per un bambino come George Denbrough il più grande divertimento è seguire la barchetta di carta che gli ha costruito il fratello maggiore Bill. Ma le strade sono sdrucciolevoli e George rischia di perdere il suo giocattolo, che infatti si infila in un canale di scolo lungo il marciapiede e sparisce nelle viscere della terra. Cercare di recuperarlo è l\'ultimo gesto di George: una creatura spaventosa travestita da clown gli strappa un braccio uccidendolo.','it.jpg');
INSERT INTO libri VALUES (NULL, 'it', 'Stephen King','Sperling & Kupfer','horror',2,'Biblioteca Provinciale Salvatore Tommasi', TRUE,'A Derry, una piccola cittadina del Maine, per un bambino come George Denbrough il più grande divertimento è seguire la barchetta di carta che gli ha costruito il fratello maggiore Bill. Ma le strade sono sdrucciolevoli e George rischia di perdere il suo giocattolo, che infatti si infila in un canale di scolo lungo il marciapiede e sparisce nelle viscere della terra. Cercare di recuperarlo è l\'ultimo gesto di George: una creatura spaventosa travestita da clown gli strappa un braccio uccidendolo.','it.jpg');
INSERT INTO libri VALUES (NULL, 'it', 'Stephen King','Sperling & Kupfer','horror',1,'La tana di Lupoleone', TRUE,'A Derry, una piccola cittadina del Maine, per un bambino come George Denbrough il più grande divertimento è seguire la barchetta di carta che gli ha costruito il fratello maggiore Bill. Ma le strade sono sdrucciolevoli e George rischia di perdere il suo giocattolo, che infatti si infila in un canale di scolo lungo il marciapiede e sparisce nelle viscere della terra. Cercare di recuperarlo è l\'ultimo gesto di George: una creatura spaventosa travestita da clown gli strappa un braccio uccidendolo.','it.jpg');
INSERT INTO libri VALUES (NULL, 'it', 'Stephen King','Sperling & Kupfer','horror',1,'La tana di Lupoleone', TRUE,'A Derry, una piccola cittadina del Maine, per un bambino come George Denbrough il più grande divertimento è seguire la barchetta di carta che gli ha costruito il fratello maggiore Bill. Ma le strade sono sdrucciolevoli e George rischia di perdere il suo giocattolo, che infatti si infila in un canale di scolo lungo il marciapiede e sparisce nelle viscere della terra. Cercare di recuperarlo è l\'ultimo gesto di George: una creatura spaventosa travestita da clown gli strappa un braccio uccidendolo.','it.jpg');
INSERT INTO libri VALUES (NULL, 'La fabbrica di cioccolato', 'Roald Dahl','Salani','libri per bambini',2,'Biblioteca Provinciale Salvatore Tommasi', TRUE,'Un bel giorno la fabbrica di cioccolato Wonka dirama un avviso: chi troverà i cinque biglietti d\'oro nelle tavolette di cioccolato riceverà una provvista di dolciumi bastante per tutto il resto della sua vita e potrà visitare l\'interno della fabbrica, mentre un solo fortunato tra i cinque ne diventerà il padrone. Chi sarà il fortunato?','cioccolato.jpg');
INSERT INTO libri VALUES (NULL, 'Il Piccolo Principe', 'Antoine de Saint-Exupéry','De Agostini','libri per bambini',1,'La tana di Lupoleone', TRUE,'Dall\'incontro di un aviatore perso nel deserto con un piccolo principe venuto dallo spazio nacque uno dei libri più famosi del Novecento. Presentato qui in una nuova traduzione arricchita da tavole inedite.','principe.jpg');