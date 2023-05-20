import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLogged = false

  if (!isLogged) {
    return redirect("/login");
  }
}
