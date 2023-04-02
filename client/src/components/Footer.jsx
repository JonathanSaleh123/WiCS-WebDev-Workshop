import React from "react";

<script src="https://kit.fontawesome.com/3bc73ba35f.js" crossorigin="anonymous"></script>

export default function Footer() {
  return (
    <div className="FooterBox">
        <p id="left">Copyright © 2021 All rights reserved.</p>
        <div className="centerLogos">
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-solid fa-phone"></i>
          <i className="fa-brands fa-github"></i>
        </div>
        <p id="right">Source code available</p>
    </div>
  );
}
