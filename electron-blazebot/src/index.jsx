import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import MainLogo from "./index/test3.png";
import TrovoLogo from "./index/trovologo.png";
import "./index.css";
import { VFXProvider, VFXImg } from "react-vfx";
import { Link } from "react-router-dom";

function Index() {
  return (
    <VFXProvider>
      <div>
        <Header />
        <div className="main-index">
          <div style={{ marginTop: "130px" }}>
            <VFXImg
              src={MainLogo}
              shader="glitch"
              style={{ width: "450px", marginBottom: "35px" }}
            />
            <p style={{ fontFamily: "Syne Mono, sans-serif", fontSize: "6vh" }}>
              BlazeBot
            </p>
            <Link to={"/account"}>
              <div style={{ marginTop: "30px", textAlign: "center" }}>
                <button className="btn btn-trovo">
                  Login Into Trovo{" "}
                  <img src={TrovoLogo} alt="trovo" style={{ width: "30px" }} />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </VFXProvider>
  );
}

export default Index;
