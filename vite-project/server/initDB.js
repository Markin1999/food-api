import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();
const { DATABASE_URL } = process.env;

const db = pgPromise()(DATABASE_URL);

const setupDb = async () => {
  await db.none(`DROP TABLE IF EXISTS ricette;
        CREATE TABLE ricette(
        id SERIAL NOT NULL PRIMARY KEY,
        titolo TEXT NOT NULL,
        ingredienti TEXT[] NOT NULL,
        procedimento TEXT NOT NULL,
        categoria TEXT NOT NULL
        )`);

  await db.none(`INSERT INTO ricette (titolo, ingredienti, procedimento, categoria) VALUES
    ('Bruschette al Pomodoro', 
     ARRAY['Pane', 'Pomodori', 'Aglio', 'Olio d oliva', 'Basilico', 'Sale'],
     'Tagliare il pane a fette e tostarlo. Mescolare pomodori a cubetti con olio, sale e basilico. Strofinare aglio sulle fette di pane e aggiungere il condimento.', 
     'Antipasti'),
    ('Guacamole', 
     ARRAY['Avocado', 'Lime', 'Cipolla', 'Pomodoro', 'Sale', 'Pepe', 'Peperoncino'],
     'Schiacciare l avocado con una forchetta, aggiungere lime, cipolla tritata, pomodoro a cubetti, sale, pepe e peperoncino.', 
     'Antipasti'),
    ('Pasta al Pesto', 
     ARRAY['Pasta', 'Basilico', 'Pinoli', 'Parmigiano', 'Aglio', 'Olio d oliva', 'Sale'],
     'Cuocere la pasta. Frullare basilico, pinoli, parmigiano, aglio e olio d oliva. Mescolare il tutto e servire.', 
     'Primi'),
    ('Risotto ai Funghi', 
     ARRAY['Riso', 'Funghi', 'Brodo vegetale', 'Cipolla', 'Parmigiano', 'Burro', 'Prezzemolo'],
     'Soffriggere la cipolla, aggiungere i funghi, tostare il riso e sfumare con brodo. Cuocere fino a completa assorbimento e mantecare con burro e parmigiano.', 
     'Primi'),('Pollo al Curry', 
     ARRAY['Petto di pollo', 'Cipolla', 'Curry', 'Latte di cocco', 'Olio', 'Sale'],
     'Soffriggere la cipolla, aggiungere il pollo a cubetti e rosolare. Unire il curry e il latte di cocco, cuocere finché il pollo è morbido.', 
     'Secondi'),
    ('Bistecca alla Fiorentina', 
     ARRAY['Bistecca di manzo', 'Sale grosso', 'Pepe', 'Olio extravergine'],
     'Scaldare la griglia, cuocere la bistecca 5 minuti per lato, aggiungere sale grosso e pepe, servire con olio extravergine.', 
     'Secondi'),
    ('Tiramisù', 
     ARRAY['Mascarpone', 'Uova', 'Zucchero', 'Caffè', 'Savoiardi', 'Cacao in polvere'],
     'Montare uova e zucchero, aggiungere mascarpone. Inzuppare i savoiardi nel caffè, alternarli con la crema e spolverare di cacao.', 
     'Dolci'),
    ('Cheesecake ai Frutti di Bosco', 
     ARRAY['Biscotti', 'Burro', 'Formaggio spalmabile', 'Panna', 'Zucchero', 'Frutti di bosco'],
     'Tritare i biscotti e mescolarli con burro fuso. Pressare in una teglia e aggiungere il ripieno di formaggio e zucchero. Raffreddare e decorare con frutti di bosco.', 
     'Dolci');
    `);

  console.log("Tabella creata correttamente");
};

setupDb();
export default db;
