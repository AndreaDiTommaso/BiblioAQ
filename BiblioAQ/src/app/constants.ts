export const LINGUA = 'lingua';

export const URL_BASE = 'http://localhost:80/BiblioAQ_api';

export const URL = {
    BIBLIOTECHE: URL_BASE + '/biblioteca/read.php',
    BIBLIOTECA: URL_BASE + '/biblioteca/read2.php',
    BIBLIOTECAP: URL_BASE + '/biblioteca/prenotab.php',
    POSTI: URL_BASE + '/biblioteca/posti_liberi.php',
    CATALOGO: URL_BASE + '/catalogo/read.php',
    COPERTINE: URL_BASE + '/copertine',
    LIBRO: URL_BASE + '/libro/read.php',
    LIBROP: URL_BASE + '/libro/prenota.php',
    PL: URL_BASE + '/prenotazioni_libri/readbyutente.php',
    PA: URL_BASE + '/prenotazioni_accesso/readbyutente.php',
    LIBRIPRENOTATI: URL_BASE + '/libro/readbyutente.php',
    ACCESSIPRENOTATI: URL_BASE + '/biblioteca/readbyutente.php',
    APREFERITO: URL_BASE + '/preferiti/aggiungi.php',
    RPREFERITO: URL_BASE + '/preferiti/rimuovi.php',
    CPREFERITO: URL_BASE + '/preferiti/verifica.php',
    SIGNUP: URL_BASE + '/utente/signup.php',
    CERCA: URL_BASE + '/catalogo/list.php',
    IMMAGINI: URL_BASE + '/immagini',
    LOGIN: URL_BASE + '/utente/login.php'
};

export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

