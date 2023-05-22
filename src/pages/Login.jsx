import React, { useState } from "react";
import { useLoaderData, Form } from "react-router-dom";
import { loginUser } from "../api";

export async function loader({ request }) {
  const message = new URL(request.url).searchParams.get("message");
  return message;
}

export async function action() {
  console.log("Action function")
  return null
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const message = useLoaderData();


  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error ? <h3 className="red">{error.message}</h3> : null}
      <Form method="post" className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
