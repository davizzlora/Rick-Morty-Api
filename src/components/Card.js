import React from "react";
import image from '../assets/image1.jpg'
export default function Card({ id, title, image, instructor, url }) {
    return (
      <div className='card text-center bg-dark'>
        <div className="card-body text-light">
          <img src={image} alt='no image' className='image-widht' />
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secundary">Instructor: {instructor}</p>
          <a href={url} className="btn btn-outline-secondary rounded-0">
            ir al sitio web
          </a>
        </div>
      </div>
    );
  }