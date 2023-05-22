import { redirect } from "react-router-dom"

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggedin")
  const response = redirect("/login?message=You must log in first")
  response.body = true
  if (!isLoggedIn) {
    return response
  }
  return null
}
