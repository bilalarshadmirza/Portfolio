import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/gd.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Designing intuitive and visually engaging user interfaces for seamless experiences.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Developing modern, responsive and efficient websites tailored to your needs.",
  },
  {
    id: 3,
    image: Image3,
    title: "Graphic Designing",
    description:
      "Creating compelling visuals that bring ideas to life with creativity and precision.",
  },
];


const Services = () => {
  return <section className="services container section" id='services'>
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
  </section>
}

export default Services