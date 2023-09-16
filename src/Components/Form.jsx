import React, { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const validEmailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.fullname.length > 5 && validEmailRegex.test(inputValue.email)) {
      setShow(true);
      setErr(false);
    } else {
      setErr(true);
      setShow(false);
    }
  };

  const SuccessMessage = () => (
    <div className="data">
      <h2>Gracias {inputValue.fullname}, ¡en breve te estaremos contactando!</h2>
    </div>
  );

  const ErrorMessage = () => (
    <h2>Por favor, verifica tus datos</h2>
  );

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="data-input"
          type="text"
          name="fullname"
          value={inputValue.fullname}
          onChange={handleInputChange}
          placeholder="Full name"
        />
        <input
          className="data-input"
          type="email"
          name="email"
          value={inputValue.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <button type="submit">Enviar</button>
      </form>

      {show ? <SuccessMessage /> : err && <ErrorMessage />}
    </div>
  );
};

export default Form;