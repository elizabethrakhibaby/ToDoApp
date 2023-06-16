# ToDoApp

<h5>Required dependencies: </h5>
npm install firebase
npm install @react-native-community/checkbox


<h5> Create firebase-config.js file in the root directory of your project to implement Firebase configuration and initialization: </h5>
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


