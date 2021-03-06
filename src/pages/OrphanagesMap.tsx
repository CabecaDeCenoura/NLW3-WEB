import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import mapMarker from '../images/Local.svg';
import '../styles/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Araxá</strong>
                    <span>Minas Gerais</span>
                </footer>
            </aside>
            
            <Map 
                center={[-19.5972561,-46.9319517]}
                zoom={15}            
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
               
            </Map>            

            <Link to="" className="create-orphanage">
                <FiPlus size="{32}" color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;