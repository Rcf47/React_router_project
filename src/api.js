import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyC9J4fozX2bq6sxYPI3IO6zmme6xZy6bas",
  authDomain: "vanlife-80aea.firebaseapp.com",
  projectId: "vanlife-80aea",
  storageBucket: "vanlife-80aea.appspot.com",
  messagingSenderId: "883164643083",
  appId: "1:883164643083:web:b4502adebbda5c3ec46c0e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")



export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const vanSnapshot = await getDoc(docRef)
  const vanData = {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  }

  return vanData
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  return data
}
