// import dotenv from "dotenv";
// dotenv.config()

console.log(process.env.FIREBASE_SERVICE_ACCOUNT!);


import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT!);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
