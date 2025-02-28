import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();
const { DATABASE_URL } = process.env;

const db = pgPromise()(DATABASE_URL);

const setupDb = async () => {
  await db.none(`DROP TABLE IF EXISTS ricette;
        CREATE TABLE ricette(
        id SERIAL NOT NULL PRIMARY KEY,
        img TEXT,
        titolo TEXT NOT NULL,
        ingredienti TEXT[] NOT NULL,
        procedimento TEXT NOT NULL,
        categoria TEXT NOT NULL,
        durata TIME NOT NULL
             )`);

  await db.none(`INSERT INTO ricette (titolo, ingredienti, procedimento, categoria, durata, img) VALUES

              ('Bruschette al Pomodoro', 
          
               ARRAY['Pane', 'Pomodori', 'Aglio', 'Olio d oliva', 'Basilico', 'Sale'],
          
               'Tagliare il pane a fette e tostarlo. Mescolare pomodori a cubetti con olio, sale e basilico. Strofinare aglio sulle fette di pane e aggiungere il condimento.', 
          
               'Antipasti', '00:15:00', 'https://tse4.mm.bing.net/th?id=OIP.wizFhGOZ2tK_3M1GE9BXzwHaHa&w=200&h=200&c=7
'),
          
              ('Guacamole', 
          
               ARRAY['Avocado', 'Lime', 'Cipolla', 'Pomodoro', 'Sale', 'Pepe', 'Peperoncino'],
          
               'Schiacciare l avocado con una forchetta, aggiungere lime, cipolla tritata, pomodoro a cubetti, sale, pepe e peperoncino.', 
          
               'Antipasti', '00:10:00', 'https://tse4.mm.bing.net/th?id=OIP.bb_VxQHSnqv_LHq2Uj009gHaHa&w=200&h=200&c=7
'),
          
          ('Pasta al Pesto', 
          
               ARRAY['Pasta', 'Basilico', 'Pinoli', 'Parmigiano', 'Aglio', 'Olio d oliva', 'Sale'],
          
               'Cuocere la pasta. Frullare basilico, pinoli, parmigiano, aglio e olio d oliva. Mescolare il tutto e servire.', 
          
               'Primi', '00:25:00', 'https://tse3.mm.bing.net/th?id=OIP.smjoanqtvoa-LFyeSIb3SwHaLH&w=200&h=300&c=7
'),
          
              ('Risotto ai Funghi', 
          
               ARRAY['Riso', 'Funghi', 'Brodo vegetale', 'Cipolla', 'Parmigiano', 'Burro', 'Prezzemolo'],
          
               'Soffriggere la cipolla, aggiungere i funghi, tostare il riso e sfumare con brodo. Cuocere fino a completa assorbimento e mantecare con burro e parmigiano.', 
          
               'Primi', '00:40:00', 'https://tse2.mm.bing.net/th?id=OIP.xG6VPCGSqi5aYN-bv3jmvQHaE6&w=200&h=132&c=7
'),
          
              ('Pollo al Curry', 
          
               ARRAY['Petto di pollo', 'Cipolla', 'Curry', 'Latte di cocco', 'Olio', 'Sale'],
          
               'Soffriggere la cipolla, aggiungere il pollo a cubetti e rosolare. Unire il curry e il latte di cocco, cuocere finché il pollo è morbido.', 
          
               'Secondi', '00:30:00', 'https://tse1.mm.bing.net/th?id=OIP.qGsbvSI24nwa19zP3X1IPwHaFj&w=200&h=150&c=7
'),
          
          ('Bistecca alla Fiorentina', 
          
               ARRAY['Bistecca di manzo', 'Sale grosso', 'Pepe', 'Olio extravergine'],
          
               'Scaldare la griglia, cuocere la bistecca 5 minuti per lato, aggiungere sale grosso e pepe, servire con olio extravergine.', 
          
               'Secondi', '00:20:00', 'https://tse1.mm.bing.net/th?id=OIP.qCUpxiYF65IZIssqWWcCtQHaE6&w=200&h=132&c=7'),
          
              ('Tiramisù', 
          
               ARRAY['Mascarpone', 'Uova', 'Zucchero', 'Caffè', 'Savoiardi', 'Cacao in polvere'],
          
               'Montare uova e zucchero, aggiungere mascarpone. Inzuppare i savoiardi nel caffè, alternarli con la crema e spolverare di cacao.', 
          
               'Dolci', '00:30:00', 'https://tse2.mm.bing.net/th?id=OIP.g6OCL5qbY-Nnp-jUe3qzeQHaE7&w=200&h=133&c=7
'),
          
              ('Cheesecake ai Frutti di Bosco', 
          
               ARRAY['Biscotti', 'Burro', 'Formaggio spalmabile', 'Panna', 'Zucchero', 'Frutti di bosco'],
          
               'Tritare i biscotti e mescolarli con burro fuso. Pressare in una teglia e aggiungere il ripieno di formaggio e zucchero. Raffreddare e decorare con frutti di bosco.', 
          
               'Dolci', '01:00:00', 'https://tse3.mm.bing.net/th?id=OIP.Yug0QZQms3k4uAVWEI-lkgHaEo&w=200&h=125&c=7');`);

  console.log("Tabella creata correttamente");
};

setupDb();
export default db;
