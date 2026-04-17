import React from "react";
import "../Styles/family.css";

import Ntrimg from "../../assets/ntr.png";
import kakakaniimg from "../../assets/kakani.png";
import ranirudramadevi from "../../assets/rudrammadevi.png";
import ragavendraimg from "../../assets/ragavendra.png";
import kallukuriimg from "../../assets/kalluri.png";
import tripuraneniimg from "../../assets/tripuraneni.png";
import muniswamyimg from "../../assets/muniswamy.png";
import rajeswaraoimg from "../../assets/rajeswarao.png";
import krishnaimg from "../../assets/krishna.png";
import shobhanbabuimg from "../../assets/shobhan.png";


function FamilyTree() {
  const familyData = [
    {
      img: Ntrimg,
      name: "Shri Nandamuri Taraka Rama Rao",
      year: "1923-1996",
    },
    {
      img: kakakaniimg,
      name: "Shri Kakani Venkata Ratnam",
      year: "1900-1972",
    },
    {
      img: ranirudramadevi,
      name: "Rani Rudrama Devi",
      year: "1245-1289",
    },
    {
      img: ragavendraimg,
      name: "Shri Edupuganti Raghavendra Rao",
      year: "1890-1942",
    },
    {
      img: kallukuriimg,
      name: "Shri Kalluri Chandramouli",
      year: "1898-1992",
    },
    {
      img: tripuraneniimg,
      name: "Shri Tripuraneni Ramaswamy",
      year: "1887-1943",
    },
    {
      img: muniswamyimg,
      name: "Shri Bollineni Muniswami Naidu",
      year: "1895-1935",
    },
    {
      img: rajeswaraoimg,
      name: "Shri Chandra Rajeswara Rao",
      year: "1915-1994",
    },
    {
      img: krishnaimg,
      name: "Ghattamaneni Krishna",
      year: "1943-2022",
    },
    {
      img: shobhanbabuimg,
      name: "Uppu Sobhan Babu",
      year: "1937-2008",
    },
  ];

  const firstRow = familyData.slice(0, 5);
  const secondRow = familyData.slice(5, 10);

  const renderCards = (data) =>
    data.map((item, index) => (
      <figure className="family-card" key={index}>
        <div className="image-wrapper">
          <img src={item.img} alt={item.name} className="img-fluid" />
        </div>

        <figcaption>
          {item.name}
          <p>{item.year}</p>
        </figcaption>
      </figure>
    ));

  return (
    <section className="family-tree-sec">
      <div className="container">
        <h3 className="gallery-title">Family Tree</h3>

      
        <div className="scroll-row left-scroll">
          <div className="scroll-track">
            {renderCards(firstRow)}
            {renderCards(firstRow)}
          </div>
        </div>

        <div className="scroll-row right-scroll">
          <div className="scroll-track">
            {renderCards(secondRow)}
            {renderCards(secondRow)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamilyTree;