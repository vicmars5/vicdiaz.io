const Firebase = require('firebase-admin')

let firebaseDb = null

export default function getDb () {
  if (firebaseDb === null) {
    Firebase.initializeApp({
      credential: Firebase.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
      }),
      databaseURL: 'https://vicdiaz-io.firebaseio.com'
    })

    firebaseDb = Firebase.database()
  }

  return firebaseDb
}
