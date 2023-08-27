import { useState } from "react";

const useGeolocation = (defaultPosition = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  const getPosition = () => {
    try {
      if (!navigator.geolocation) {
        return setError("Your browser dosent support geolocation");
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          setError(err.message);
        }
      );
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, position, error, getPosition };
};

export default useGeolocation;
