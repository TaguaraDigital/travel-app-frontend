import { createContext, useState } from "react";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [travellers, setTravellers] = useState([]);
  const [travelOfTraveler, setTravelOfTraveler] = useState([]);
  const value = {
    travellers,
    setTravellers,
    travelOfTraveler,
    setTravelOfTraveler,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
