import {firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
    const result = await firebase //vamos a firebase que esta en la carpeta lib
        .firestore() //vamos a firestore
        .collection('users') //vamos a la coleccion de usuarios
        .where('username', '==', username) //donde username sea igual al username que el usuario pasa
        .get(); //traelo

        return result.docs.map(user => user.data().length > 0)
}

// get user from the firestore where userId === userId (pasado del auth)
export async function getUserByUserId(userId) {
    const result = await firebase
        .firestore() //vamos a firestore
        .collection('users') //vamos a la coleccion de usuarios
        .where('userId', '==', userId) //donde userId sea igual al userId que el usuario pasa
        .get(); //traelo


    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id // we pass docId so we can use it for CRUD operations
    }));

    return user;
}
