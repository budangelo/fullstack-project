import { GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const handleSuccess = async (res) => {
    const r = await fetch("http://localhost:4000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken: res.credential })
    });

    const data = await r.json();
    console.log("AUTH RESPONSE:", data);

    if (r.ok && data.token) {
      localStorage.setItem("tepui_token", data.token);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Login</h1>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("login error")} />
    </div>
  );
};

export default LoginPage;
