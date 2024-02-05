import React from 'react';
import ContactForm from "@/Components/ContactForm/ContactForm";


const Contact = () => {
    return (
        <section className="Contact">
            <h2>Contactez-moi</h2>

            <div className="liste">
                <ul>
                    <li >
                        <a href="06.12.34.56.78">06.12.34.56.78</a>
                    </li>
                    <li >
                        <a href="mailto:mailto:exemple@gmail.com">exemple@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div>
                <article>
                    <iframe
                        name="localisation"
                        src="https://maps.google.com/maps?q=Centre%20Abattage%20Transformation%20Couserans%20Le%20Pradas,%2009190%20Lorp-Sentaraille&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    >
                    </iframe>
                </article>
            </div>

            <ContactForm />


        </section>
    );
};

export default Contact;

