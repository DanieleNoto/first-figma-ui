// Euro2024.js
import React, { useState, useEffect } from "react";
import MatchesList from "./MatchesList";

function National() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/matches')
      .then(response => response.json())
      .then(data => {
        // Filter matches for "Euro2024" competition
        const euro2024Matches = data.filter(match => match.competition === "Euro2024");
        setMatches(euro2024Matches);
      })
      .catch(error => console.error('Error fetching matches:', error));
  }, []);

  return(
    <div className="mt-5">
      Partite del giorno:
      <MatchesList matches={matches} />
    </div>
  );
}
export default National;
