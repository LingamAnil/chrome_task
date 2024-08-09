import React from "react";
import { TbShieldSearch } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import image from "../Images/Img2.png";
function Parent() {
  return (
    <div style={{ height: "1632px", marginTop: "600px" }} id="Safe">
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            fontSize: "60px",
            fontWeight: "700",
          }}
        >
          Stay{" "}
          <div
            style={{
              backgroundColor: " #E8F0FE",
              color: "#1967D2",
              padding: "0px 30px 10px 30px",
              borderRadius: "45px",
            }}
          >
            <TbShieldSearch /> safe
          </div>
        </h1>
        <h1 style={{ fontSize: "60px", fontWeight: "700" }}>
          while you browse
        </h1>
      </div>
      <div className="fourDivs">
        <div>
          <div
            id="one"
            style={{
              backgroundColor: "#1e32d6",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontSize: "14px",
                fontWeight: "500",
                marginLeft: "50px",
                position: "relative",
                top: "250px",
              }}
            >
              PASSWORD MANAGER
            </p>
            <h1
              style={{
                position: "relative",
                top: "190px",
                left: "50px",
                color: "#fff",
              }}
            >
              Use strong passwords on <br /> every site.
            </h1>
            <div style={{ position: "relative", right: "150px" }}>
              <img
                src="https://www.google.com/chrome/static/images/v2/gallery/passwords-fill-1.webp"
                alt=""
                style={{
                  position: "relative",
                  top: "100px",
                  width: "600px",
                  right: "0px",
                }}
              />
              <img
                id="i1"
                src={image}
                alt=""
                style={{
                  height: "110px",
                  position: "relative",
                  bottom: "210px",
                  cursor: "pointer",
                  transition: "all 0.5s",
                  width: "360px",
                  borderRadius: "10px",
                  left: "130px",
                }}
              />
            </div>
            <div
              style={{
                position: "relative",
                width: "60px",
                height: "400px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#fff",
                bottom: "220px",
                left: "370px",
              }}
            >
              <FaPlus
                style={{
                  fontSize: "60px",
                  fontWeight: "100",
                  color: "#1e32d6",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div id="two">
            <p>ENHANCED SAFE BROWSING</p>
            <h1>
              Browse with the <br /> confidence that <br /> you're staying safer{" "}
              <br /> online.
            </h1>
            <div
              style={{
                position: "relative",
                width: "60px",
                height: "60px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#fff",
                bottom: "20px",
                left: "370px",
              }}
            >
              <FaPlus
                style={{
                  fontSize: "60px",
                  fontWeight: "100",
                  color: "#FFF",
                  cursor: "pointer",
                  backgroundColor: "1e32d6",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div id="three">
            <p>SAFETY CHECK</p>
            <h1>
              Check your safety <br /> level in real time with <br /> just one
              click.
            </h1>
            <div
              style={{
                position: "relative",
                width: "60px",
                height: "60px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#fff",
                top: "40px",
                left: "370px",
              }}
            >
              <FaPlus
                style={{
                  fontSize: "60px",
                  fontWeight: "100",
                  color: "#FFF",
                  cursor: "pointer",
                  backgroundColor: "#1e32d6",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
          <div id="four">
            <p>PRIVACY GUIDE</p>
            <h1>
              Keep your privacy under <br /> your control with easy-to <br />{" "}
              -use settings.
            </h1>
            <img
              src="https://www.google.com/chrome/static/images/v2/gallery/google-safety.webp"
              alt=""
            />
            <div
              style={{
                position: "relative",
                width: "60px",
                height: "60px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#fff",
                bottom: "200px",
                left: "390px",
              }}
            >
              <FaPlus
                style={{
                  fontSize: "60px",
                  fontWeight: "100",
                  color: "#1e32d6",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parent;
