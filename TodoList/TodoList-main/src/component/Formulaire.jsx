// src/Formulaire.jsx
import { useState } from "react";

function Formulaire() {
  const [nom, setNom] = useState("");

  const handleClick = () => {
    alert(`Bonjour, ${nom || "inconnu"} !`);
  };

  return (
    <div>
      <h2>Formulaire</h2>
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <button onClick={handleClick}>Dire bonjour</button>
    </div>
  );
}

export default Formulaire;
