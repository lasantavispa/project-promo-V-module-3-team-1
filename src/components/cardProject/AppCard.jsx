import cover2 from "../../images/cover_2.jpeg";
import favicon from "../../images/favicon.png";
import logoAlab from "../../images/logo-adalab.png";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import callToApi from "../services/Api.js";
import localStorage from "../services/LocalStorage.js";
import { useEffect, useState } from "react";

function AppCard() {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    demo: "",
    repo: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });

  const [cardLink, setCardLink] = useState([]);
  const [hidden, setHidden] = useState("");
  // const [userData, setUserData] = useState(localStorage.get("userData", ""));

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
    console.log(formData);
  };

  useEffect(() => {
    callToApi(formData).then((response) => {
      setCardLink(Object.values(response));
      console.log(response);
    });
  }, [formData]);

  useEffect(() => {
    localStorage.set("user", {
      name: formData.name,
      slogan: formData.slogan,
      technologies: formData.technologies,
      demo: formData.demo,
      repo: formData.repo,
      desc: formData.desc,
      autor: formData.autor,
      job: formData.job,
      image: formData.image,
      photo: formData.photo,
    });
    console.log("han cambiado los datos introducidos");
  }, [formData]);
  console.log(formData);

  const handleClickCreateCard = (ev) => {
    setHidden(ev.target.value);
  };

  return (
    <div className="container">
      <Header />
      <Main
        hidden={hidden}
        handleClickCreateCard={handleClickCreateCard}
        handleInput={handleInput}
        setFormData={setFormData}
        formData={formData}
      />
      <Card cardLink={cardLink} />
      <Footer />
    </div>
  );
}

export default AppCard;
