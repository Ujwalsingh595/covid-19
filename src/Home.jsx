import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbar from  "./Navbar";
import  web from "./1.png";
import Footer from "./Footer"
import { NavLink } from "react-router-dom";
const Home=()=>{
    return(
        <>
        <Navbar/>
        <section id="header"className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 m-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 text-white">
                        <h3>Welcome,here you  will get  live corona  updates.</h3>
                        <NavLink exact to="/corona"class="btn-get-started">Live Updates</NavLink>
                    </div>
                   <div className="col-md-6 order-1 order-lg-1 pt-5  d-flex header_img">
                        <img src={web}className="img-fluid animated"alt="image1"/>
                   </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <Footer/>
        </>
    )
}
export default Home;