import React from "react";
import internao from "../assets/audios/internao.mp3";
import mosquito from "../assets/audios/elMosquito.mp3";
import marce from "../assets/audios/marceSeAsoma.mp3";
import noLoDejan from "../assets/audios/noLoDejanIr.mp3";
import laFicha from "../assets/audios/saltoLaFicha.mp3";
import mujer from "../assets/audios/soloSiSosMujer.mp3";
import { useState } from "react";
import chino from "../assets/img/chino.jpeg";
import chino2 from "../assets/img/chino2.jpeg";
import chino3 from "../assets/img/chino3.jpeg";
import chino4 from "../assets/img/chino4.jpeg";
import rolo from "../assets/img/rolo.jpeg";

export const Player1 = () => {
  const [newSong, setNewSong] = useState("");

  const frases = [mosquito, internao, marce, noLoDejan, laFicha, mujer];

  const getNuevaFrase = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    const song = frases[randomNumber].toString();
    setNewSong(song);
    console.log(song);
  };

  const onQuote = () => {
    getNuevaFrase();
  };

  return (
    <>
      <div className="galeria">
        <img className="imgChino3" src={chino2} alt="dado" />
        <img className="imgChino2" src={chino3} alt="dado" />
        <img className="imgChino2" src={chino4} alt="dado" />
        <img className="imgChino3" src={rolo} alt="dado" />
      </div>
      <div className="cardContainer">
        <h6 className="headerChino">La botonera del Chino</h6>

        <audio src={newSong} key={newSong} controls autoPlay />

        <div className="dadoContainer">
          <img className="imgChino" src={chino} alt="dado" onClick={onQuote} />
        </div>
      </div>
    </>
  );
};

// export const Player1 = () => {
//   return (
//     <div>
//       <button></button>
//       <audio src={internao} controls autoPlay />
//     </div>
//   );
// };
