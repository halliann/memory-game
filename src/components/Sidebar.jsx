import { useState, useEffect } from 'react';

function Sidebar({ selectedVillager, onNewVillager }) {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [seenVillagers, setSeenVillagers] = useState([]);

    function handleYesSelection() {
        if(selectedVillager && seenVillagers.includes(selectedVillager.name)) {
            setScore(score + 1);
        } else {
            // if incorrect and haven't seen villager, reset the score
            setScore(0);
        }
        showNextVillager();
    };

    function handleNoSelection(){
        if(selectedVillager && !seenVillagers.includes(selectedVillager.name)) {
            setScore(score + 1);
            setSeenVillagers(prevSeenVillagers => [...prevSeenVillagers, selectedVillager.name]); // add villager to list of see villagers
        } else {
            // if incorrect and have seen villager, reset the score
            setScore(0);
        }
        showNextVillager();
    };

    function showNextVillager() {
        onNewVillager(null);
        setTimeout(() => {
            onNewVillager(prev => prev + 1);
        }, 100)
    }


    // update best score
    useEffect(() => {
        if(score > bestScore) {
            setBestScore(score);
        }
    }, [score, bestScore]);


    return ( 
        <div className="sidebar-container">
            <h1 className="game-title">React Memory Game</h1>
            <div className="question-container">
                <p>Have you seen this character yet?</p>
                <button className="btn" id="yes-btn" onClick={handleYesSelection} >Yes</button>
                <button className="btn" id="no-btn" onClick={handleNoSelection} >No</button>
            </div>
            <div className="scoreboard-container">
                <div>
                    <div id="score">Score: <span id="score-val">{score}</span></div>
                </div>
                <div>
                    <div id="best-score">Best Score: <span id="best-score-val">{bestScore}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;