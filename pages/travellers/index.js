import { useContext, useEffect } from "react";
import { Store } from "../../utils/store";

import Link from "next/link";

import TravellersList from "../../components/TravellersList";
import styles from "./Travellers.module.scss";
import { FaUser } from "react-icons/fa";

const Travellers = ({ travellers }) => {
  const { setTravellers } = useContext(Store);

  useEffect(() => {
    setTravellers(travellers);
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
      <TravellersList travellers={travellers} />
    </section>
  );
};

export default Travellers;

// Fetch data at build time
export const getStaticProps = async () => {
  const URL = "http://localhost:3500/travellers/";

  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const datos = await response.json();

  return {
    props: { travellers: datos.data },
  };
};
