import { SiGithub } from "react-icons/si";
import "./CardDev.css";

export default function CardDev({ gambar, nama, nim, github, jurusan }) {
  return (
    <div className="containerDev">
      <img src={gambar} alt="" className="profilepic" />
      <div className="containerDataDev">
        <div className="containerNama">
          <p id="nama">{nama}</p>
        </div>
        <p id="nim">{nim}</p>
        <p id="jurusan">{jurusan}</p>
        <div className="containerGithub">
          <div className="logoGithub">
            <SiGithub color={"white"} size={"30px"} />
          </div>
          <div className="kontakGithub">
            <div>
              <a
                href={`https://github.com/${github}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `https://github.com/${github}`;
                }}
                className="githubLink"
              >
                <p id="github">{github}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}