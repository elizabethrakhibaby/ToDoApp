# ToDoApp

<h4>Required dependencies: </h4>
npm install firebase
npm install @react-native-community/checkbox


<h4> Create firebase-config.js file in the root directory of your project to implement Firebase configuration and initialization: </h4>
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXXX',
    authDomain: 'todoapp-XXXX.firebaseapp.com',
    databaseURL: 'https://todoapp-XXXXXX.firebaseio.com',
    projectId: 'todoapp-XXXX',
    storageBucket: 'todoapp-XXXX.appspot.com',
    messagingSenderId: 'XXXXXXX',
    appId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };

<h4>We need to import the database from the firebase-config.js file: </h4>

import { db } from './firebase-config.js';

<h4>Getting snapshot of existing data in a particular location of that database! </h4>

The event callback function is passed a snapshot that contains all the data at that location, including child data. We can now grab the data from the snapshot using the val() method. This data is usually in the form of a JavaScript object:

useEffect(() => {
  return onValue(ref(db, '/todos'), querySnapShot => {
    let data = querySnapShot.val() || {};
    let todoItems = {...data};
    setTodos(todoItems);
  });
}, []);

We used the OR (||) operator to assign an empty object to the data variable if we have no data in the path we are reading from. Note that here we are returning the return value of the onValue function to unsubscribe from the Firebase event handler when the React component unmouts — the useEffect hook’s return value is helpful for cleanups like this. Here we used the useEffect hook with an empty dependency array to register the event handler only once with the first render of the App component.

Credits: https://blog.logrocket.com/storing-retrieving-data-react-native-apps-firebase/


