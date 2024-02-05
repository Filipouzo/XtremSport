import React from 'react';
import { NavLink } from 'react-router-dom';
import SportService from "@/_Services/Service.Sport";
/* import Carousel from "@//Components/Carousel/Carousel"; */

import Intro from "@/Components/Intro/Intro";
import IntroImg from "@/Assets/Images/Pages/Home/black.jpg";

import Card from "@/Components/Card/Card";


const Home = () => {
    return (
        <section className='sectionHome'>
            <Intro image={IntroImg} title='Photos de mes activités de "sport extrême"' />

            <ul className="listeSports">
                {
                    SportService.GetAllSport().map((Sport) =>
                        <NavLink key={Sport.id} to={"/Sport/" + Sport.id + "/#"}>
                            <Card image={Sport.cover} title={Sport.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section>
    );
};

export default Home;