import firebase from 'firebase';
import {firebaseConfig} from './config.js';

export const firebaseApp=firebase.initializeApp(firebaseConfig);
export const firebaseAuth=firebase.auth;
export const firebaseStorage=firebase.storage();
export const fireStore=firebase.firestore();//DataBase
