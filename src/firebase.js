import { initializeApp } from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyDSVU1PlihOfCpt99x5Z5rvwpW6l1GwayA",
  authDomain: "vue3-crud-75741.firebaseapp.com",
  projectId: "vue3-crud-75741",
  storageBucket: "vue3-crud-75741.appspot.com",
  messagingSenderId: "510139337042",
  appId: "1:510139337042:web:d12d11e8b85dafab62528b"
};

const app=initializeApp(config);
export default app;
// const firebaseApp = firebase.initializeApp(config)

// const db = firebaseApp.firestore()
// const usersCollection = db.collection('users')

// export const createUser = user => {
//   return usersCollection.add(user)
// }

// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }