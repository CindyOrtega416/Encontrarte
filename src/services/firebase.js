import {firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
    const result = await firebase //vamos a firebase que esta en la carpeta lib
        .firestore() //vamos a firestore
        .collection('users') //vamos a la coleccion de usuarios
        .where('username', '==', username) //donde username sea igual al username que el usuario pasa
        .get(); //traelo

        return result.docs.map(user => user.data().length > 0)
}
