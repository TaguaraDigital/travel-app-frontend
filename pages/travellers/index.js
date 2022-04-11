import { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/store";

import Link from "next/link";

import TravellersList from "../../components/TravellersList";
import TravellersFinder from "../../services/apis/travellersFinder";
import styles from "./Travellers.module.scss";
import { FaUser } from "react-icons/fa";

const Travellers = () => {
  const { travellers, setTravellers } = useContext(Store);
  const [isLoading, setIsLoading] = useState(false);

  const getTravellersData = async () => {
    const response = await TravellersFinder.getAll();
    console.log(response);
    setTravellers(response.data);
    setIsLoading(true);
    return response;
  };

  useEffect(() => {
    getTravellersData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.travellersSection}>
      <h2 className={styles.travellersTitle}>Lista de los Viajeros</h2>
      <div className={styles.travellersAddCont}>
        <Link href="/addtraveler" passHref>
          <button className={styles.travellersAdd}>
            <FaUser className={styles.travellersIcon} />
            Add
          </button>
        </Link>
      </div>
      {!isLoading && <h1> Buscando datos</h1>}
      {isLoading && <TravellersList travellers={travellers} />}
    </section>
  );
};

export default Travellers;
