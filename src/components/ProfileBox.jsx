import { useAuth } from "../contexts/AuthContext";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

const ProfileBox = () => {
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="profile-box bg-slate-700 absolute top-8 right-8 flex justify-between items-center p-4 rounded-md shadow-md">
      <img
        className="w-12 h-12 rounded-full"
        src={user.avatar}
        alt="profile-pic"
      />
      <h1 className="text-xl font-bold mx-6">Welcome, {user.name}</h1>
      <NavLink to="/login">
        <Button
          styles="bg-slate-600 text-white font-bold"
          onClick={handleLogout}
        >
          LOGOUT
        </Button>
      </NavLink>
    </div>
  );
};
export default ProfileBox;
