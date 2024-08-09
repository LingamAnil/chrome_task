import React from "react"; //nav1
function Navbar1() {
  return (
    <nav className="navbar1" style={{ height: "64px", width: "100%" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Google_Chrome_logo_and_wordmark_%282015%29.png"
        alt=""
        style={{ height: "65%", marginLeft: "20px", marginTop: "13px" }}
      />
      <ol>
        <li>Home</li>
        <li>The Browser by Google</li>
        <li>Features</li>
        <li>Support</li>
      </ol>
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Chrome-Logo.png"
        alt=""
        style={{ height: "110%", marginLeft: "700px" }}
      />
      <h1
        style={{
          fontSize: "72px",
          fontWeight: "700",
          letterSpacing: "-3.5px",
          lineHeight: "84px",
          textDecoration: "none solid rgb(32, 33, 36)",
          textAlign: "center",
          marginTop: "-3px",
        }}
      >
        The browser <br />
        built to be yours
      </h1>
    </nav>
  );
}

export default Navbar1;
