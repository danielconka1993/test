import React, { useState } from 'react';

const ChciNabidku = () => {
  const [formData, setFormData] = useState({
    nemovitost: "",
    kraj: "",
    okres: "",
    jmeno: "",
    email: "",
    tel: "",
    date: "10.11.2023"
  });

  const inputsForm = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const btnPridatNabidku = (e) => {
    e.preventDefault();

    // Přidána kontrola, zda jsou vyplněna všechna pole
    if (Object.values(formData).some(field => !field)) {
      console.error("Vyplňte všechna pole");
      return;
    }

    fetch("http://localhost:5000/save-nabidka", {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        nemovitost: formData.nemovitost,
        kraj: formData.kraj,
        okres: formData.okres,
        jmeno: formData.jmeno,
        email: formData.email,
        tel: formData.tel,
        date: formData.date
      })
    }).then((data) => {
      return data.json();
    }).then((finaldata) => {
      console.log(finaldata.msg);
      setFormData({
        nemovitost: "",
        kraj: "",
        okres: "",
        jmeno: "",
        email: "",
        tel: "",
        date: "10.11.2023"
      });
    }).catch((error) => {
      console.error("Chyba při odesílání nabídky:", error);
    });
  }

  return (
    <div className='chciNabidku'>
      <form>
        <input type="text" name="nemovitost" value={formData.nemovitost} onChange={inputsForm} placeholder='Nemovitost' />
        <input type="text" name="kraj" value={formData.kraj} onChange={inputsForm} placeholder='Kraj' />
        <input type="text" name="okres" value={formData.okres} onChange={inputsForm} placeholder='Okres' />
        <input type="text" name="jmeno" value={formData.jmeno} onChange={inputsForm} placeholder='Jméno' />
        <input type="text" name="email" value={formData.email} onChange={inputsForm} placeholder='Email' />
        <input type="text" name="tel" value={formData.tel} onChange={inputsForm} placeholder='Telefon' />
        <input type="submit" value="Přidat nabídku" onClick={btnPridatNabidku} />
      </form>
    </div>
  );
}

export default ChciNabidku;