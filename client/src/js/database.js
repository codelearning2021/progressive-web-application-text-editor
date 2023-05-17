import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database


export const putDb = async (id, value) => {
console.log ('PUT request jateDB update');

// connect to DB with version #
const jateDB = await openDB('jate', 1);
// define new transaction and specify the posting DB and the data privileges. 
   const tx = jateDb.transaction('jate', 'readwrite');
   const objectStr = tx.objectStore('jate');

   // Use Get All method
   const req = objectStr.getAll();
   const res = await req;
   // Confirm operation
   console.log('retrieved data from jateDB', res);
  // Print error
  console.error('putDb error');
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDB = await openDB('jate', 1);
   const tx = jateDb.transaction('jate', 'readwrite');
   const objectStr = tx.objectStore('jate');
  
  // Use add method
  const req = objStore.put({ id: id, value: value })
  const res = await req;

   // Confirm operation
   console.log('saved to jateDB', res);
  //Print error
  console.error('getDb not implemented');
};

initdb();


