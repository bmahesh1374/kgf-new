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
    return (
        <>

            <section className="family-tree-sec">

                <div className='container'>
                    <h3 className="pt-3">Family Tree</h3>

                    <div className="family-grid">

                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={Ntrimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Nandamuri Taraka Rama Rao
                                <p>1923-1996</p>
                            </figcaption>
                        </figure>


                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={kakakaniimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri kakani Venkata Ratnam
                                <p>1900-1972</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={ranirudramadevi} className="img-fluid" />
                            </div>
                            <figcaption>
                                Rani Rudrama Devi
                                <p>1245-1289</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={ragavendraimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Edupuganti Raghavendra Rao
                                <p>1890-1942</p>
                            </figcaption>
                        </figure>

                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={kallukuriimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Kalluri Chandramouli
                                <p>1898-1992</p>
                            </figcaption>
                        </figure>

                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={tripuraneniimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Kavi Raju Tripuraneni Ramaswamy Choudary
                                <p>1887-1943</p>
                            </figcaption>
                        </figure>

                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={muniswamyimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Bollineni Muniswami Naidu
                                <p>1895-1935</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={rajeswaraoimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Chandra Rajeswara Rao
                                <p>1915-1994</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={krishnaimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Ghattamaneni Siva Rama Krishna Murthy
                                <p>1943-2022</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={shobhanbabuimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Uppu Sobhan Babu
                                <p>1937-2008</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={Ntrimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Nandamuri Taraka Rama Rao
                                <p>1923-1996</p>
                            </figcaption>
                        </figure> <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={kakakaniimg} className="img-fluid" />
                            </div>
                            <figcaption>
                               Shri kakani Venkata Ratnam
                                <p>1900-1972</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={ranirudramadevi} className="img-fluid" />
                            </div>
                            <figcaption>
                                Rani Rudrama Devi
                                <p>1245-1289</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={ragavendraimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Edupuganti Raghavendra Rao
                                <p>1890-1942</p>
                            </figcaption>
                        </figure>
                        <figure className="family-card">
                            <div className="image-wrapper">
                                <img src={kallukuriimg} className="img-fluid" />
                            </div>
                            <figcaption>
                                Shri Kalluri Chandramouli
                                <p>1898-1992</p>
                            </figcaption>
                        </figure>

                    </div>

                </div>
            </section>
        </>
    )
}
export default FamilyTree;