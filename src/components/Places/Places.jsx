import { NavLink, Outlet } from "react-router-dom";

const Places = () => {
  return (
    <>
      <div className="menu bg-slate-600 rounded-md">
        <NavLink to="/app/cities">
          <button className="bg-slate-600 py-2 px-4 rounded-md text-sm font-semibold">
            CITIES
          </button>
        </NavLink>
        <NavLink to="/app/countries">
          <button className="bg-slate-600 py-2 px-4 rounded-md text-sm font-semibold">
            COUNTRIES
          </button>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
export default Places;
