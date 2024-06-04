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
  const [despacito, setDespacito] = useState(null);

  const frases = [mosquito, internao, marce, noLoDejan, laFicha, mujer];
  const despacios = [
    "Ay despacito!",
    "Aia, me duele la cola!",
    "mmm ahora si!!!",
    "Ay que fuerza!",
  ];

  const getNuevaFrase = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    const song = frases[randomNumber].toString();
    setNewSong(song);
    console.log(song);
  };

  const onQuote = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const desp = despacios[randomNumber];
    getNuevaFrase();
    setDespacito(desp);
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
          <p className="tocame">Tocame, por favor.</p>
          <img className="imgChino" src={chino} alt="dado" onClick={onQuote} />
          {despacito != null && <p className="desp">{despacito}</p>}
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
