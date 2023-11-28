import "./CardBook.css";

export default function CardBook ({ranking, judul, penulis, sampul, penerbit}) {
    // const navigate=useNavigate();

    return (
        
        <div className="containerBuku">
            <div className="containerRanking">
                <p id="rankingBuku">{ranking}</p>
            </div>
            <div className="containerDataBuku">
                <img src={sampul} alt="" className="sampulBuku" />
                <div className="containerStringBuku">
                    <p id="judulBuku">"{judul}"</p>
                    <p id="ketBuku">by: </p>
                    <p id="penulisBuku">{penulis}</p>
                    <p id="penerbitBuku">{penerbit}</p>
                    
                </div>
            </div>
        </div>
    );
}