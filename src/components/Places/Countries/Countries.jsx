import { CountryCard } from "./";
import { Spinner } from "../../Spinner";
import { useCities } from "../../../contexts/CitiesContext";

const Countries = () => {
  const { cities, isLoading } = useCities();

  if (isLoading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return (
      <h1 className="text-3xl mt-10 text-center">
        Add your first City by clicking on a city on the map. <span>👋</span>
      </h1>
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.id },
      ];
    } else {
      return arr;
    }
  }, []);

  return (
    <div className="countries-list mt-6">
      {countries.map((country) => {
        return <CountryCard country={country} key={country.id} />;
      })}
    </div>
  );
};
export default Countries;
