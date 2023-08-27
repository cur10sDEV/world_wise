import { useEffect, useState } from "react";
import { Navbar } from "../components";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  const [{ email, password }, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <main className="box bg-gray-800">
      <Navbar />
      <section className="inner-box flex items-center justify-center">
        <div className="bg-gray-700 flex flex-col justify-center items-start w-2/6 text-xl p-8 rounded-md">
          <label className="mb-2 text-gray-300" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-md p-2 outline-none mb-6 bg-gray-300 text-black"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label className="mb-2 text-gray-300" htmlFor="password">
            Password
          </label>
          <input
            className="w-full rounded-md p-2 outline-none mb-6 bg-gray-300 text-black"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <Button onClick={handleLogin}>LOGIN</Button>
        </div>
      </section>
    </main>
  );
};
export default Login;
