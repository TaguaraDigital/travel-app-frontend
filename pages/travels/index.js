import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

import styles from "./Travel.module.scss";
import { travelData } from "../../utils/travellersData";
import TreavelRowRO from "../../components/Travels/TreavelRowRO";
import TreavelRowUpdate from "../../components/Travels/TreavelRowUpdate";
import TraveTableHeader from "../../components/Travels/TraveTableHeader";
// import { getPosts } from "../services";

const Travels = () => {
  const [travels, setTravels] = useState(travelData);

  const [addTravelData, setAddTravelData] = useState({
    codigo: "",
    origen: "",
    destino: "",
    nro_plazas: "",
    precio: "",
  });

  const [editTravelData, setEditTravelData] = useState({
    codigo: "",
    origen: "",
    destino: "",
    nro_plazas: "",
    precio: "",
  });

  const [isUpdate, setIsUpdate] = useState(false);
  const [editTravelId, setEditTravelId] = useState(null);

  const handleAddChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addTravelData };
    newFormData[fieldName] = fieldValue;

    setAddTravelData(newFormData);
  };

  const handleEditChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editTravelData };
    newFormData[fieldName] = fieldValue;

    setEditTravelData(newFormData);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newTravel = {
      id: travels.length,
      codigo: addTravelData.codigo,
      origen: addTravelData.origen,
      destino: addTravelData.destino,
      nro_plazas: addTravelData.nro_plazas,
      precio: addTravelData.precio,
    };

    const newTravels = [...travels, newTravel];
    setTravels(newTravels);
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();

    const editedTravel = {
      id: editTravelData.id,
      codigo: editTravelData.codigo,
      origen: editTravelData.origen,
      destino: editTravelData.destino,
      nro_plazas: editTravelData.nro_plazas,
      precio: editTravelData.precio,
    };

    const newTravels = [...travels];

    const index = travels.findIndex((travel) => travel.codigo === editTravelId);

    newTravels[index] = editedTravel;

    setTravels(newTravels);
    setEditTravelId(null);
  };

  const handleUpdate = (e, travel) => {
    e.preventDefault();
    setEditTravelId(travel.codigo);

    const formValues = {
      codigo: travel.codigo,
      origen: travel.origen,
      destino: travel.destino,
      nro_plazas: travel.nro_plazas,
      precio: travel.precio,
    };

    setEditTravelData(formValues);
  };

  const handleCancel = () => {
    setEditTravelId(null);
  };

  const handleDelete = (travelId) => {
    const confirmation = confirm(
      `Esta seguro de eliminar el viaje ${travelId} ?`
    );
    if (confirmation) {
      console.log(confirmation);

      const newTravels = [...travels];

      const index = travels.findIndex((travel) => travel.codigo === travelId);

      newTravels.splice(index, 1);

      setTravels(newTravels);
    }
  };

  return (
    <section>
      <h1 className={styles.title}> Listado de Viajes</h1>
      {/* Add a new travel */}
      <form className={styles.form} onSubmit={handleAddSubmit}>
        <table className={styles.table}>
          <TraveTableHeader />
          <tbody>
            {/* <TreavelRowUpdate
              accion="ADD"
              travel={addTravelData}
              onChange={handleAddChange}
              onSubmit={handleAddSubmit}
            /> */}
            <tr className={styles.tableRow}>
              <td className={styles.tableCell} data-col-title="Codigo">
                <input
                  type="text"
                  name="codigo"
                  placeholder=" Enter Codigo"
                  onChange={handleAddChange}
                />
              </td>
              <td className={styles.tableCell} data-col-title="Origen">
                <input
                  type="text"
                  name="origen"
                  placeholder=" Enter Origen"
                  onChange={handleAddChange}
                />
              </td>
              <td className={styles.tableCell} data-col-title="Destino">
                <input
                  type="text"
                  name="destino"
                  placeholder=" Enter Destino"
                  onChange={handleAddChange}
                />
              </td>

              <td className={styles.tableCell} data-col-title="Nro. Plazas">
                <input
                  type="text"
                  name="nro_plazas"
                  placeholder=" Enter Nro. Plazas"
                  onChange={handleAddChange}
                />
              </td>

              <td className={styles.tableCell} data-col-title="Precio">
                <input
                  type="text"
                  name="precio"
                  placeholder=" Enter Precio"
                  onChange={handleAddChange}
                />
              </td>

              <td
                className={`${styles.tableCell} ${styles.tableAccion}`}
                data-col-title="Accion"
              >
                <button type="submit" className={styles.tableAccion__update}>
                  <FaPlus />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {/* Show and Update travles */}
      <form className={styles.form} onSubmit={handleEditSubmit}>
        <table className={styles.table}>
          <TraveTableHeader />
          <tbody>
            {travels.map((travel) => {
              return (
                <>
                  {editTravelId === travel.codigo ? (
                    <TreavelRowUpdate
                      key={travel.codigo}
                      travel={editTravelData}
                      handleEditChange={handleEditChange}
                      handleEditSubmit={handleEditSubmit}
                      handleCancel={handleCancel}
                    />
                  ) : (
                    <TreavelRowRO
                      key={travel.codigo}
                      travel={travel}
                      handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                    />
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </form>
    </section>
  );
};

export default Travels;

// Fetch data at build time
// export const getStaticProps = async () => {
//   //   const posts = (await getTravles()) || [];
//   const travels = [];

//   return {
//     props: { travels },
//   };
// };
