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

// TODO: Add logic to a method that accepts some content and adds it to the database


export const putDb = async (id, value) => {
console.log ('PUT request jateDB update');

// connect to DB with version #
const jateDB = await openDB('jate', 1);
// define new transaction and specify the posting DB and the data privileges. 
   const tx = jateDb.transaction('jate', 'readwrite');


  // console.error('putDb not implemented');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();





// // GET function
// export const getDb = async (value) => {
//   console.log('Getting data from the jateDB');
//   // connect to DB and version we want to use
//   const jateDb = await openDB('jate', 1);
//   // make new transaction...need to specify the DB we are posting to and the data privileges. 
//   const tx = jateDb.transaction('jate', 'readwrite');
//   // open the object store
//   const objStore = tx.objectStore('jate');
//   // use the .getAll() method to grab all the content in the DB
//   const req = objStore.getAll()
//   // confirm the data was fetched
//   const res = await req;
//   console.log('data saved to the jateDB', res);
// };

// // PUT function
// export const putDb = async (id, value) => {
//   console.log('PUT request to update the jateDB');
//   // connect to DB and version we want to use
//   const jateDb = await openDB('jate', 1);
//   // make new transaction...need to specify the DB we are posting to and the data privileges. 
//   const tx = jateDb.transaction('jate', 'readwrite');
//   // open the object store
//   const objStore = tx.objectStore('jate');
//   // use the .add() method to pass in content
//   const req = objStore.put({ id: id, value: value })
//   // confirm the data was added
//   const res = await req;
//   console.log('data saved to the jateDB', res);
// };






// initdb();





// import { openDB } from 'idb';

// const initdb = async () =>
//   openDB('jate', 1, {
//     upgrade(db) {
//       if (db.objectStoreNames.contains('jate')) {
//         console.log('jate database already exists');
//         return;
//       }
//       db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
//       console.log('jate database created');
//     },
//   });

//   export const putDb = async (content)  => {
//     console.log('PUT to the database');
  
//     // Create a connection to the database database and version we want to use.
//     const contactDb = await openDB('jate', 1);
  
//     // Create a new transaction and specify the database and data privileges.
//     const tx = contactDb.transaction('jate', 'readwrite');
  
//     // Open up the desired object store.
//     const store = tx.objectStore('jate');
  
//     // Use the .add() method on the store and pass in the content.
//     const request = store.put({ id: 1, value: content });
  
//     // Get confirmation of the request.
//     const result = await request;
//     console.log('🚀 - data saved to the database', result);
//   };
  
//   // TODO: Add logic for a method that gets all the content from the database
//   export const getDb = async () => {
//     console.log('GET from the database');
  
//     // Create a connection to the database database and version we want to use.
//     const contactDb = await openDB('jate', 1);
  
//     // Create a new transaction and specify the database and data privileges.
//     const tx = contactDb.transaction('jate', 'readonly');
  
//     // Open up the desired object store.
//     const store = tx.objectStore('jate');
  
//     // Use the .getAll() method to get all data in the database.
//     const request = store.getAll();
  
//     // Get confirmation of the request.
//     const result = await request;
//     console.log('result.value', result);
//     return result?.value;
//   };
  
  
//   initdb();