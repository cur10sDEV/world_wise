import { useEffect, useState } from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import useUrlPosition from "../../hooks/useUrlPosition";
import { Spinner } from "../Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../../contexts/CitiesContext";

const initialData = {
  cityName: "",
  country: "",
  date: new Date(),
  notes: "",
  emoji: "",
  position: { lat: "", lng: "" },
};

function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const AddCity = () => {
  const navigate = useNavigate();
  const { addCity, isLoading } = useCities();
  const [isGeocodingLoading, setIsGeocodingLoading] = useState(false);
  const [geocodeError, setGeocodeError] = useState(null);
  const [cityTrip, setCityTrip] = useState(initialData);
  const { cityName, date, notes, emoji } = cityTrip;
  const [lat, lng] = useUrlPosition();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCityTrip((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAdd = async () => {
    if (!cityName && !date) return;
    await addCity(cityTrip);
    navigate("/app/cities");
  };

  useEffect(() => {
    if (!lat && !lng) return;

    const fetchCityData = async () => {
      try {
        setIsGeocodingLoading(true);
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        const data = await res.json();
        if (!data.countryCode) {
          throw new Error(
            "That dosen't seem to be a city. Click somewhere else 😉"
          );
        }
        setGeocodeError(null);
        setCityTrip((prev) => ({
          ...prev,
          cityName: data.city || data.locality || "",
          country: data.countryName,
          emoji: convertToEmoji(data.countryCode),
          position: { lat: lat, lng: lng },
        }));
      } catch (err) {
        setGeocodeError(err.message);
      } finally {
        setIsGeocodingLoading(false);
      }
    };
    fetchCityData();
  }, [lat, lng]);

  if (isGeocodingLoading || isLoading) return <Spinner />;

  if (!lat && !lng)
    return (
      <h1 className="mt-20 text-2xl text-center">
        👋 Start by clicking somewhere on the map
      </h1>
    );

  if (geocodeError)
    return <h1 className="mt-20 text-2xl text-center">{geocodeError}</h1>;

  return (
    <div className="add-city-form bg-slate-600 w-full mt-6 rounded-md p-8 relative">
      <label className="font-bold" htmlFor="cityName">
        City name
        <span className="absolute text-xl top-8 right-10">{emoji}</span>
      </label>
      <input
        className="rounded-md text-xl p-2 mb-8 mt-2 bg-slate-300 text-black"
        type="text"
        name="cityName"
        id="cityName"
        value={cityName}
        onChange={handleChange}
      />
      <label className="font-bold" htmlFor="date">
        When did you go to {cityName}?
      </label>
      <DatePicker
        id="date"
        selected={date}
        onChange={(selectedDate) =>
          setCityTrip((prev) => ({ ...prev, date: selectedDate }))
        }
        dateFormat="dd/MM/yyyy"
      />
      <label className="font-bold" htmlFor="notes">
        Notes about your trip to {cityName}
      </label>
      <textarea
        className="rounded-md text-xl p-2 mb-8 mt-2 bg-slate-300 text-black"
        name="notes"
        id="notes"
        rows="2"
        value={notes}
        onChange={handleChange}
      ></textarea>
      <div className="actions flex justify-between items center">
        <Button styles="font-bold" onClick={handleAdd}>
          ADD
        </Button>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          styles="bg-transparent text-white border font-semibold"
        >
          ⭠ BACK
        </Button>
      </div>
    </div>
  );
};
export default AddCity;
