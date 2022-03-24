import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
      const templateId = "template_jirt2dk";

      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      sendFeedback(templateId, {
        name,
        company,
        phone,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        formMess.innerHTML =
          "Message envoyé ! Je vous recontacterai dès que possible.";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";

        document.getElementById("name").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  return (
    <div className="contact">
      <form 
        name="contact" 
        method="post" 
        className="contact_form" 
        data-netlify="true" 
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label for="name">Nom:</label>
        <input type="text" name="name"/>

        <label for="email">Email:</label>
        <input type="email" name="email"/>

        <label for="message">Message:</label>
        <textarea name="message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
    
  );
};
export default ContactForm;