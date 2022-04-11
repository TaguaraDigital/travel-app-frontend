import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";

import styles from "./Travel.module.scss";
import TreavelRowRO from "../../components/Travels/TreavelRowRO";
import TreavelRowUpdate from "../../components/Travels/TreavelRowUpdate";
import TravelTableHeader from "../../components/Travels/TravelTableHeader";
import TravelFinder from "../../services/apis/travelsFinder";

const Travels = ({ travelData }) => {
  const [travels, setTravels] = useState(travelData);
  const [editTravelId, setEditTravelId] = useState(null);

  const [addTravelData, setAddTravelData] = useState({
    id: "",
    cod_viaje: "",
    origen: "",
    destino: "",
    nro_plazas: "",
    precio: "",
  });

  const [editTravelData, setEditTravelData] = useState({
    id: "",
    cod_viaje: "",
    origen: "",
    destino: "",
    nro_plazas: "",
    precio: "",
  });

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

  const InsertTravel = async (travel) => {
    try {
      const response = await TravelFinder.create(travel);
      if (response.success) {
        console.log(response);
        const newTravel = {
          id: response.data.id,
          cod_viaje: addTravelData.cod_viaje,
          origen: addTravelData.origen,
          destino: addTravelData.destino,
          nro_plazas: addTravelData.nro_plazas,
          precio: addTravelData.precio,
        };

        const newTravels = [...travels, newTravel];
        setTravels(newTravels);
      } else {
        alert("error" + response.message);
        console.log("error", response.message);
      }
    } catch (err) {}
  };

  const EditTravel = async (travel) => {
    try {
      const response = await TravelFinder.update(travel);
      if (response.success) {
        const editedTravel = {
          id: editTravelData.id,
          cod_viaje: editTravelData.cod_viaje,
          origen: editTravelData.origen,
          destino: editTravelData.destino,
          nro_plazas: editTravelData.nro_plazas,
          precio: editTravelData.precio,
        };

        const newTravels = [...travels];

        const index = travels.findIndex((travel) => travel.id === editTravelId);

        newTravels[index] = editedTravel;

        setTravels(newTravels);
        setEditTravelId(null);
      } else {
        alert("error" + response.message);
        console.log("error", response.message);
      }
    } catch (err) {}
  };

  const DeleteTravel = async (travelid) => {
    try {
      const response = await TravelFinder.delete(travelid);
      if (response.success) {
        const newTravels = [...travels];

        const index = travels.findIndex((travel) => travel.id === travelid);
        newTravels.splice(index, 1);
        setTravels(newTravels);
      } else {
        alert("error" + response.message);
        console.log("error", response.message);
      }
    } catch (err) {}
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    /*----------------------------------------
      Se debe validar los datos introducidos 
    ----------------------------------------*/

    /*---------------------------------------------------
      Se ingresa en la base de datos el nuevo registros 
    ----------------------------------------------------*/

    InsertTravel(addTravelData);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    /*----------------------------------------
      Se debe validar los datos introducidos 
    ----------------------------------------*/

    /*---------------------------------------------------
      Se actualiza el viaje en la base de datos 
    ----------------------------------------------------*/

    EditTravel(editTravelData);
  };

  const handleUpdate = (e, travel) => {
    e.preventDefault();
    setEditTravelId(travel.id);

    const formValues = {
      id: travel.id,
      cod_viaje: travel.cod_viaje,
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

  const handleReset = () => {
    setAddTravelData({
      id: "",
      cod_viaje: "",
      origen: "",
      destino: "",
      nro_plazas: "",
      precio: "",
    });
  };

  const handleDelete = (travelId) => {
    const confirmation = confirm(
      `Esta seguro de eliminar el viaje ${travelId} ?`
    );
    if (confirmation) {
      DeleteTravel(travelId);
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}> Listado de Viajes</h1>
      {/* Add a new travel */}
      <form className={styles.form} onSubmit={handleAddSubmit}>
        <table className={styles.table}>
          <TravelTableHeader />
          <tbody>
            <TreavelRowUpdate
              accion="ADD"
              travel={addTravelData}
              handleEditChange={handleAddChange}
              handleEditSubmit={handleAddSubmit}
              handleCancel={handleReset}
            />
          </tbody>
        </table>
      </form>

      {/* Show and Update travles */}
      <form className={styles.form} onSubmit={handleEditSubmit}>
        <table className={styles.table}>
          <TravelTableHeader />
          <tbody>
            {travels.map((travel) => {
              return (
                <>
                  {editTravelId === travel.id ? (
                    <TreavelRowUpdate
                      key={travel.id}
                      accion="UPDATE"
                      travel={editTravelData}
                      handleEditChange={handleEditChange}
                      handleEditSubmit={handleEditSubmit}
                      handleCancel={handleCancel}
                    />
                  ) : (
                    <TreavelRowRO
                      key={travel.id}
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
export const getStaticProps = async () => {
  const URL = "http://localhost:3500/travels/";

  const response = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const datos = await response.json();

  return {
    props: { travelData: datos.data },
  };
};
