import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CardDev from "../components/CardDev";
import "./Dev.css";

export default function Dev() {
    const [data, setData] = useState({});
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://api.github.com/users/andiadityaaa", {
                    headers: { "Authorization": "Bearer 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" }
                });
                setData(response.data); 
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const keteranganDev = [
        {
            id: 1,
            gambar: "https://i.postimg.cc/GpWvL0nm/1e7b587e-e662-45c7-8c35-5ded59eebf96.jpg",
            nama: "Andi Aditya Pratama Putra",
            nim: 21120121140134,
            github: "andiadityaaa",
            jurusan: "TEKNIK KOMPUTER",
        }
    ];

    return (
        <>
            <h1 id="dev">DEVELOPER</h1>
            {keteranganDev.map((item, index) => (
                <Fragment key={item.id}>
                    <CardDev
                        gambar={item.gambar}
                        nama={item.nama}
                        nim={item.nim}
                        jurusan={item.jurusan}
                        github={item.github}
                        githubData={data} 
                    /> 
                    {keteranganDev.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                </Fragment>
            ))}
        </>
    );
}
