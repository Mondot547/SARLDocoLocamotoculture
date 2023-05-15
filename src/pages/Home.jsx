import React from 'react';
import './scss/Home.scss';
import Nav from '../components/menu/Nav';
import imgbanner from '../img/img-banner.png';
import itinary from '../img/icon-itinéraire.png';
import contact from '../img/icon-contact.png';
import bancaire from '../img/icon-bancaire.png';
import Map from '../components/Map/Map';

const Home = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <img className='banner' src={imgbanner} alt="image de banner" />
                <section className="right">
                    <article>
                        <div className="horraires">
                            <h2>Horraires:</h2>
                            <ul className="list-days">
                                <li><span className="day">Lundi:</span> 08:30–12:00, 14:00–18:30</li>
                                <li><span className="day">Mardi:</span> 08:30–12:00, 14:00–18:30</li>
                                <li><span className="day">Mercredi:</span> 08:30–12:00, 14:00–18:30</li>
                                <li><span className="day">Jeudi:</span> 08:30–12:00, 14:00–18:30</li>
                                <li><span className="day">Vendredi:</span> 08:30–12:00, 14:00–18:30</li>
                                <li><span className="day">Samedi:</span> Fermé.</li>
                                <li><span className="day">Dimanche:</span> Fermé.</li>
                            </ul>
                        </div>
                    </article>
                    <aside>
                        <h2>Nous vous proposons:</h2>
                        <div className="slogan">
                            <p><span className="firstWord-slogan">Economisez</span> les frais d’immobilisation et de gestion de votre parc
                                machine.</p>
                            <p><span className="firstWord-slogan">Louez</span> Motobineuse, Motoculteur, Débroussailleuse, Taille haies,
                                Tondeuse, Tronçonneuse et autres.</p>
                            <p><span className="firstWord-slogan">Pensez</span> à nous consulter pour de plus amples informations.</p>
                        </div>
                    </aside>
                </section>
                <section className="info">
                    <Map />
                    <div className="info-group">
                        <div className="contact">
                            <h3><img src={contact} alt="icon de contact" /> Contact</h3>
                            <p>TEL: 03 22 92 84 79</p>
                            <p>EMAIL: sarl.locamotoculture@orange.fr</p>
                        </div>
                        <div className="itinerary">
                            <h3><img src={itinary} alt="icon d'itineraire" /> Itiniraire</h3>
                            <p>4 Rue Barbier, 80000, Amiens</p>
                            <div className="btn-itinary"><a href="#">Où aller ?</a></div>
                        </div>
                        <div className="means-payment">
                            <h3>Moyens de paiements</h3>
                            <div className="icon-payment">
                                <img src={bancaire} alt="icon de carte bancaire" />
                            </div>
                        </div>
                    </div>

                </section>
            </main >
        </>
    );
};

export default Home;