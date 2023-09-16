import React from "react";
import Form from "../Components/Form";
import { useDentistStates } from "../Components/utils/global.context";

const Contact = () => {
  const { themeState } = useDentistStates();

  return (
    <div className={themeState.theme ? "App contact" : "dark contact"}>
      <h2>¿Necesitas ayuda?</h2>
      <p>Enviános tu consulta, y un asesor se contactará con vos</p>
      <Form />
    </div>
  );
};

export default Contact;
