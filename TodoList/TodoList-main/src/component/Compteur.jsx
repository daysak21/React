// src/Compteur.jsx
import { useState } from "react";

function Compteur() {
  const [compteur, setCompteur] = useState(0);

  return (
    <div>
      <h2>Compteur : {compteur}</h2>
      <button onClick={() => setCompteur(compteur + 1)}>➕ Incrémenter</button>
      <button onClick={() => setCompteur(compteur - 1)}>➖ Décrémenter</button>
    </div>
  );
}

export default Compteur;
