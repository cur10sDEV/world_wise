import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";
import { useEffect } from "react";
import { Spinner } from "../Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const CityInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { currentCity, getCity, isLoading } = useCities();

  useEffect(() => {
    getCity(id);
  }, [id, getCity]);

  const { emoji, cityName, date, notes } = currentCity;

  if (isLoading) return <Spinner />;

  if (!isLoading && currentCity) {
    return (
      <div className="bg-slate-600 w-full mt-6 rounded-md p-8">
        <p className="text-sm mb-1 text-slate-300 font-bold">CITY NAME</p>
        <h1 className="text-2xl mb-8 font-semibold">
          <span className="mr-4">{emoji}</span>
          {cityName}
        </h1>
        <p className="text-sm mb-1 text-slate-300 font-bold">
          YOU WENT TO {cityName?.toUpperCase()} ON
        </p>
        <h1 className="text-2xl mb-8">{date && formatDate(date)}</h1>
        <p className="text-sm mb-1 text-slate-300 font-bold">YOUR NOTES</p>
        <h1 className="text-2xl mb-8">{notes || "No Notes"}</h1>
        <p className="text-sm mb-1 text-slate-300 font-bold">LEARN MORE</p>
        <h1 className="text-2xl mb-8 cursor-pointer text-yellow-500 hover:underline">
          <a
            href={`https://en.wikipedia.org/wiki/${cityName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out {cityName} on Wikipedia{" "}
            <span className="text-2xl">🠖</span>
          </a>
        </h1>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          styles="bg-transparent text-white border text-xl font-semibold"
        >
          <span className="text-xl">⭠</span> BACK
        </Button>
      </div>
    );
  }
};
export default CityInfo;
