const Firebase = require('firebase-admin')

let firebaseDb = null

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    credential: Firebase.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  })
}

if (firebaseDb === null) {
  firebaseDb = Firebase.database()
}

export default firebaseDb
