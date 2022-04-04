
import firebase from "@/firebase";
import { getFirestore,collection, addDoc,getDocs  } from "firebase/firestore";

const db = getFirestore(firebase.firestore);

export const createUser = async (user,collect) =>{
    try {
        const docRef = await addDoc(collection(db, collect), user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      } 
}

export const useLoadUsers= async(collect)=>{
    let users = [];
    try{
          const querySnapshot =await getDocs(collection(db, collect));
            querySnapshot.forEach((doc) => {
            users.push({
            key: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            // phone: doc.data().phone
        })
      });
    }catch(e){
        console.log(e)
    }
    console.log(users)
    return users
}


