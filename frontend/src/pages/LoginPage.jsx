import { GoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const handleSuccess = async (res) => {
    const r = await fetch("http://localhost:4000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken: res.credential }),
    });

    const data = await r.json();

    if (r.ok && data.token) {
      localStorage.setItem("tepui_token", data.token);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5">
          <div className="card rounded-4 shadow-sm border bubble-card">
            <div className="card-body p-4 p-md-5 text-center">
              <h3 className="h3 fw-bold mb-4 range-yellow">Accedi</h3>
              <div className="d-flex justify-content-center">
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onError={() => console.log("login error")}
                  theme="filled_black"
                  shape="pill"
                  size="large"
                  width="320"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
