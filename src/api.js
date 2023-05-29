import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9J4fozX2bq6sxYPI3IO6zmme6xZy6bas",
  authDomain: "vanlife-80aea.firebaseapp.com",
  projectId: "vanlife-80aea",
  storageBucket: "vanlife-80aea.appspot.com",
  messagingSenderId: "883164643083",
  appId: "1:883164643083:web:b4502adebbda5c3ec46c0e"
};

const app = initializeApp(firebaseConfig);








export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
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
