import { useState, useEffect } from "react";
import FetchVillagers from "../utils/Fetch";

function Gameboard({ onNewVillager }) {
    const [villagers, setVillagers] = useState([]);
    const [selectedVillager, setSelectedVillager] = useState(null);

// fetch villager data from API (or backup villagers)
    useEffect(() => {
        const fetchVillagers = async () => {
            const villagersData = await FetchVillagers();
            setVillagers(villagersData);
        }
        fetchVillagers();
    }, []);

// select a random villager when component mounts
    useEffect(() => {
        if(villagers.length > 0) {
            selectRandomVillager();
        }
    }, [villagers]);

// select a new villager when requested by sidebar (on yes or no click)
    useEffect(() => {
        if(onNewVillager !== null) {
            selectRandomVillager();
        }
    });

    
    const selectRandomVillager = () => {
        if(villagers.length > 0) {
            const randomIndex = Math.floor(Math.random() * villagers.length);
            const villager = villagers[randomIndex];
            setSelectedVillager(villager);
            onNewVillager(villager); // pass selected villager to App.js
        }
    };

    return (
        <div className="gameboard-container">
            {selectedVillager ? (
                <div className="villager-display">
                    <div id="villager-img-cont">
                        <img src={selectedVillager.image_url} alt={selectedVillager.name} id="villager-img"/>
                    </div>
                    <p id="text-bubble">Hi, I'm {selectedVillager.name}!</p>
                </div>
            ) : (
                <p id="start-text">Lading next villager...</p>
            )}
        </div>
    )
}

export default Gameboard;