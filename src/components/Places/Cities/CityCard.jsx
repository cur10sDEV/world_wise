import { useCities } from "../../../contexts/CitiesContext";
import { CircularButton } from "../../Button";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // weekday: "long",
  }).format(new Date(date));

const CityCard = ({ city }) => {
  const { currentCity, deleteCity } = useCities();

  const handleDelete = async (e) => {
    e.preventDefault();
    deleteCity(city.id);
  };

  const { id, emoji, cityName, date } = city;
  return (
    <div
      className={`text-xl flex justify-between items-center bg-slate-600 w-full ${
        id === currentCity.id ? "border-4" : "border-l-4"
      } border-green-600 rounded-md px-8 py-4 mb-6`}
    >
      <div className="flex">
        <span>{emoji}</span>
        <h2 className="ml-4 font-semibold">{cityName}</h2>
      </div>
      <div className="flex">
        <p className="mr-4">({formatDate(date) || null})</p>
        <CircularButton onClick={handleDelete} />
      </div>
    </div>
  );
};
export default CityCard;
