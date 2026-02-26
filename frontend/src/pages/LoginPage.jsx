import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSuccess = async (res) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL.replace(/\/$/, "");

      const r = await fetch(`${API_URL}/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: res.credential }),
      });

      const data = await r.json();

      if (r.ok && data.token) {
        localStorage.setItem("tepui_token", data.token);
        localStorage.setItem("tepui_user", JSON.stringify(data.user));
        navigate("/");
        window.location.reload();
      } else {
        console.log("login backend failed", data);
      }
    } catch (error) {
      console.log("login error", error);
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