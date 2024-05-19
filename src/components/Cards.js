import image1 from "../assets/java.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import React from "react";
import Card from "./Card";
const cards = [
  {
    id: 1,
    title: "Java",
    image: image1,
    instructor: "Samuel Lopez",
    url: "https://www.java.com/es/",
  },
  {
    id: 2,
    title: "JavaScript",
    image: image2,
    instructor: "Dolores ",
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    id: 3,
    title: "Pyton",
    image: image3,
    instructor: "Angela Rios",
    url: "https://www.python.org/",
  },
];

export default function Cards(){

    return(
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {
                cards.map(c =>(
                  <div className='col-md-4' key={cards.id}>
                    <Card
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    image={c.image}
                    instructor={c.instructor}
                    url={c.url}/>
                    </div>
            
                ))
            }

        </div>
    </div>

    )
}
