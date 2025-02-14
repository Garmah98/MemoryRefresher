import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
    getDatabase,
    ref,
    set,
    get,
    push,
    remove,
    query,
    orderByChild,
    equalTo,
} from 'firebase/database'
const firebaseConfig = {
    apiKey: 'AIzaSyB6o42c3tf41MBJrv-XVCkEP17W-9y9ot0',

    authDomain: 'memoryrefresher-9a3bc.firebaseapp.com',

    databaseURL:
        'https://memoryrefresher-9a3bc-default-rtdb.europe-west1.firebasedatabase.app',

    projectId: 'memoryrefresher-9a3bc',

    storageBucket: 'memoryrefresher-9a3bc.firebasestorage.app',

    messagingSenderId: '766793804184',

    appId: '1:766793804184:web:3a1f7087734b3ed56623ed',

    measurementId: 'G-VZKYVHDW91',
}
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const database = getDatabase(app)

export { auth, database, ref, set, get, push, remove, query,orderByChild,equalTo }
