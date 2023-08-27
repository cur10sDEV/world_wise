import { Sidebar } from "./";
import { ProfileBox, Map } from "../components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/app") {
      navigate("/app/cities");
    }
  }, [navigate, location.pathname]);

  return (
    <main className="box bg-gray-800 flex relative">
      <Sidebar />
      <Map />
      <ProfileBox />
    </main>
  );
};
export default AppLayout;
