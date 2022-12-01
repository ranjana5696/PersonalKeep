import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer-bottom">
        <p>CopyRight © {year}</p>
      </footer>
    </>
  );
}

export default Footer;
