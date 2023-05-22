import React, { useState } from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import { loginUser } from "../api";

export async function loader({ request }) {
  const message = new URL(request.url).searchParams.get("message");
  return message;
}

export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const data = await loginUser({ email, password })
  localStorage.setItem("loggedin", true)
  const response = redirect("/host")
  response.body = true
  return response
}

export default function Login() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();



  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error ? <h3 className="red">{error.message}</h3> : null}
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
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
