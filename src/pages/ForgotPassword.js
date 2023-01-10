import React from "react";
import { useSearchParams } from "react-router-dom";
import { ping } from "../services";

function ForgotPassword() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = React.useState("");

  async function handleClick() {
    const var1 = await ping();
    setResponse(var1);
  }

  const token = searchParams.get("token");
  return (
    <div>
      <p>{token}</p>
      <button
        onClick={() => handleClick()}
        style={{ width: 100, height: 100 }}
      />
      <p>Response: {response}</p>
    </div>
  );
}

export default ForgotPassword;
