import { createContext, useContext, useState, useEffect } from "react";

const CitiesContext = createContext();

const CitiesProviderOld = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:8000/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("There's an error regarding fetching the cities.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);

  const getCity = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      alert("There's an error regarding fetching the cities.");
    } finally {
      setIsLoading(false);
    }
  };

  const addCity = async (city) => {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(city),
      });
      const data = await res.json();
      setCities((prev) => [...prev, city]);
    } catch (err) {
      alert("There's an error in adding the city.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCity = async (cityId) => {
    try {
      setIsLoading(true);
      const res = await fetch(`http://localhost:8000/cities/${cityId}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== cityId));
    } catch (err) {
      alert("There's an error regarding deleting the city.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, getCity, currentCity, addCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

const useCitiesOld = () => {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("CitiesContext was used outside of the CitiesProvider");
  }
  return context;
};

export { CitiesProviderOld, useCitiesOld };
