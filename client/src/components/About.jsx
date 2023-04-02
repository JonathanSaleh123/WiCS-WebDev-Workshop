import React from "react";
import "./About.css"
import Image from './images/johny-goerend-t1j-1GdWNgo-unsplash.jpg'

export default function About(){

    return(
            <div className="frontBox">
                <div className="AboutImage">
                <img className="Image" src={Image} />
                </div>
                <div className="AboutDescription">
                    <h1>About Myself</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae unde quidem facilis dolorum sint corporis, accusantium veritatis sit animi, minus labore nobis?</p>
                    <button>GitHub</button>
                </div>
            </div>
    );
}

