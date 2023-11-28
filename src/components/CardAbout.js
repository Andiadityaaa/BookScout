import "./CardAbout.css";
import { BsPersonCircle } from "react-icons/bs";

export default function CardAbout ({fungsi, tujuan}) {
    return (
        <div className="containerAbout">
            <p id="fungsi">{fungsi}</p>
            <p id="tujuan">{tujuan}</p>
            <div className="containerDeveloper" onClick={event =>  window.location.href='/developer'}>
                <BsPersonCircle className="icon"/>
                <p id="toDev">Developer</p>
            </div>
        </div>
    );
}