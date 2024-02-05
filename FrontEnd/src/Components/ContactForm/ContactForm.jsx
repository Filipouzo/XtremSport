import React, { useState } from 'react';
import Bouton from "@/Components/UI/Bouton";



function ContactForm() {
  const [formData, setFormData] = useState({ nom: '', message: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    
    const contactData = {
      nom: formData.nom,
      message: formData.message,
      email: formData.email,
    };


    setFormData({ nom: '', message: '', email: '' });


/* Reste à créer les fonctions pour vérifier la validité des entrées et sauver contactData en BDD */

  };







  return (
    <div className='contact-form'>
      <h2>Envoyez-moi un message</h2>
      <form onSubmit={handleSubmit}>      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom : </label>
        </div>
        <div>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Message : </label>
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Adresse email : </label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="actions">
        <Bouton type="submit" onClickProps={()=>{}}>Envoyer</Bouton>
        </div>

      </form>
      </form>
    </div>
  );
}

export default ContactForm;
