import { CityCard } from "./";
import { NavLink } from "react-router-dom";
import { Spinner } from "../../Spinner";
import { useCities } from "../../../contexts/CitiesContext";

const Cities = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!isLoading && !cities.length) {
    return (
      <h1 className="text-3xl mt-10 text-center">
        Add your first City by clicking on a city on the map. <span>👋</span>
      </h1>
    );
  }

  return (
    <div className="w-full overflow-y-scroll mt-6 mb-16">
      {cities.map((city) => {
        return (
          <NavLink
            to={`/app/cities/${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
            key={city.id}
          >
            <CityCard city={city} />
          </NavLink>
        );
      })}
    </div>
  );
};
export default Cities;
