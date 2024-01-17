import React, { useEffect, useState } from 'react';
import { storage } from '../../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import "./Gallery.css"
function Gallery() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const imagesRef = ref(storage, 'photos/'); 
    listAll(imagesRef)
      .then((res) => {
        return Promise.all(res.items.map((itemRef) => getDownloadURL(itemRef)));
      })
      .then((urls) => {
        setImages(urls);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div className="col-md-6 col-lg-12 gallery-header">
      <div className="card">
        <div className="card-header d-sm-flex justify-content-between border-0 gallery-header">
          <h5 className="card-title">Photos</h5>
          <a className="btn btn-primary-soft btn-sm see-all-ph" href="#!"> See all photo</a>
        </div>
        <div className="card-body position-relative pt-0">
          <div className="row g-2 gallery-grid">
            {images.map((url, index) => (
              <div key={index} className="col-4 photo">
                <a href="assets/images/albums/01.jpg" data-gallery="image-popup" data-glightbox>
                  <img className="rounded img-fluid" src={url} alt=""/>
                </a>
              </div>
            ))}
            </div>
          </div>
        </div>
    </div>
  );
}
export default Gallery;


