import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SportService from "@/_Services/Service.Sport";
import Intro from "@/Components/Intro/Intro";
import IntroImg from "@/Assets/Images/Pages/Home/black.jpg";
import Slider from "@/Components/Carousel/Carousel";
import Bouton from "@/Components/UI/Bouton";


const Sport = () => {
  const [Sport, setSport] = useState({});
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await getInfo();
    }
    fetchData();
  }, [id]);

  const getInfo = async () => {
    await SportService.GetOneSport(id)
      .then((data) => {
        if (data) {
          setSport(data);
        } else {
          navigate("/404");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <section className='sectionSport'>
      <Intro image={IntroImg} title={"Photos de " + Sport.title} />
      <div className="Carousel">
        {Sport && Object.keys(Sport).length > 0 ? (
          <Slider images={Sport.pictures} />
        ) : (
          <p>Chargement en cours...</p>
        )}
      </div>

      <div className="actions">
        <Bouton onClickProps={()=>{}}>Pein écran</Bouton>
      </div>

    </section>
  );
};

export default Sport;