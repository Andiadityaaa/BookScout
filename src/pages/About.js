import { Fragment } from "react";
import CardAbout from "../components/CardAbout";
import "./About.css";

export default function About() {
    
    
    const keteranganApp = [
        {
            id: 1,
            fungsiApp: "The finest book recommendations based on New York Times' references for top-quality books.",
            tujuanApp: "This application is developed to fulfill the final assignment of Praktikum PPB.",
        }
    ];

    return (
        <>
        <div className="containerApp">
            <h1 id="namaApp">BookScout</h1>
        {keteranganApp.map((item, index) => (
            <Fragment key={item.id}>
                <CardAbout
                    fungsi={item.fungsiApp}
                    tujuan={item.tujuanApp}
                /> 
                {keteranganApp.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
        ))}
        </div>
        </>
    );
}