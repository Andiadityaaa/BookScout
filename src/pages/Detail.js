import { useLocation } from "react-router";
import "./Detail.css";

const BookDetail = () => {

    const {state} = useLocation();
    const {rank, title, description, author, publisher, book_image, amazon_product_url} = state;
  
    return (
          <div className="containerDetailBuku">
              <h1 id="detailJudulBuku">{`${rank}. "${title}"`}</h1>
              <img src={book_image} alt="" className="detailSampulBuku" />
              <div className="containerDetailStringBuku">
                  <p id="detailPenulis">by: {author}</p>
                  <p id="detailPenerbit">published by: {publisher}</p>
                  <p id="detailKetDeskripsi">Description: </p>
                  <p id="detailDeskripsiBuku">{description}</p>
                  <div className="containerDeveloper">
                <a id="toDev" href={amazon_product_url}>Buy Here</a>
                </div>
              </div>
          </div>
    );
}
  
export default BookDetail;