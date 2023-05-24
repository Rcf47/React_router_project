import { useLoaderData, Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";

export async function loader({ request }) {
  const message = new URL(request.url).searchParams.get("message");
  return message;
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"

  try {
    const data = await loginUser({ email, password })
    localStorage.setItem("loggedin", true)

    const response = redirect(pathname)
    response.body = true
    return response
  } catch (error) {
    return error.message
  }
}

export default function Login() {
  const message = useLoaderData();
  const actionMessage = useActionData()
  const navigation = useNavigation()


  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {actionMessage ? <h3 className="red">{actionMessage}</h3> : null}
      <Form method="post" className="login-form" replace>
        <input
          name="email"
          type="email"
          placeholder="Email address"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
