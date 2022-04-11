import { useEffect, useContext, useState } from "react";
import TravelFinder from "../../services/apis/travelsFinder";
import TravelTableHeader from "./TravelTableHeader";
import TreavelRowSelect from "./TreavelRowSelect";
import styles from "../../pages/travels/Travel.module.scss";
import { Store } from "../../utils/store";

const TravelList = () => {
  const [travelList, setTravelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { travelOfTraveler, setTravelOfTraveler } = useContext(Store);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await TravelFinder.getAll();

        const newListTravel = response.data.map((travel) => {
          return {
            ...travel,
            selected: false,
          };
        });

        setTravelList(newListTravel);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (e, travel) => {
    const newStatus = !travel.selected;
    const newTravels = [...travelList];

    const index = newTravels.findIndex(
      (newTravel) => newTravel.id === travel.id
    );
    newTravels[index].selected = newStatus;

    setTravelList(newTravels);

    const viajesDelViajero = newTravels.filter((travel, index) => {
      return travel.selected;
    });

    setTravelOfTraveler(viajesDelViajero);
  };

  return (
    <div className="list-group">
      {isLoading && <h1> Buscando Viajes .....</h1>}
      {!isLoading && (
        <>
          <h2 className={styles.title}> Viajes a asociar</h2>
          <table className={styles.table}>
            <TravelTableHeader />
            <tbody>
              {travelList &&
                travelList.length > 0 &&
                travelList.map((travel, i) => {
                  return (
                    <TreavelRowSelect
                      key={travel.id}
                      travel={travel}
                      handleSelect={handleSelect}
                    />
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TravelList;
