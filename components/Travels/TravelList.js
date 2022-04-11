import { useEffect, useContext, useState } from "react";
import TravelFinder from "../../services/apis/travelsFinder";
import TravelTableHeader from "./TravelTableHeader";
import TreavelRowRO from "./TreavelRowRO";
import styles from "../../pages/travels/Travel.module.scss";

const TravelList = () => {
  const [travelList, setTravelList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await TravelFinder.getAll();
        console.log(response.data);
        setTravelList(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const ConfirmInvoices = async (invoices) => {
    try {
      const response = await InvoicesFinder.confirm(invoices);

      if (response.success) {
        toast.success("Pago confirmado exitosamente", {
          duration: 5000,
          position: "top-center",
        });
      } else {
        // alert("Error");
        console.log("error", response.message);
      }
    } catch (err) {}
  };

  const handlerConfirm = (e) => {
    e.preventDefault();

    ConfirmInvoices(invoices.filter((invoice) => invoice.status === 3));

    setInvoices(invoices.filter((invoice) => invoice.status !== 3));
    setTotalInvoiceToConfirm(0);
  };

  const handleCheckBox = (e, id) => {
    console.log(e.target.checked, " id ", id, invoices);

    setTotalInvoiceToConfirm(0);
    invoices.map((invoice) => {
      if (id === invoice._id) {
        invoice.status = e.target.checked ? 3 : 0;
      }
      if (invoice.status === 3) {
        setTotalInvoiceToConfirm((pre) => pre + 1);
      }
      return totalInvoiceToConfirm;
    });
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
                  return <TreavelRowRO key={travel.id} travel={travel} />;
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default TravelList;
