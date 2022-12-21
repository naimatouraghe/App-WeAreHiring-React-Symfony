import React from "react";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
import Navigation from "../components/Navigation";
import OffersCards from "../components/OffersCards";

function Home() {
    return (
        <div>
            <Navigation />
            <div className="Home">
                <HeaderHome />
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="my-5 text-center">About Us</h1>
                    <p class="lead text-center text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                        repellendus quibusdam labore inventore ratione, impedit soluta
                        delectus est dolores cum atque eligendi non. Facere, molestiae
                        cumque. Omnis voluptatem dolorum magnam?
                    </p>
                </div>

                <OffersCards />
                <div class="d-flex align-items-center justify-content-around py-5">
                    <div class="d-flex flex-column align-items-start gap-2 ml-5">
                        <h3 class="fw-bold">Ready to get started?</h3>
                        <h5>Contact us</h5>
                    </div>
                    <div class="d-flex">
                        <a href="/api/contact" class="btn btn-outline-primary btn-lg">
                            Contact Us
                        </a>
                    </div>
                </div>




            </div>

            <Footer />
        </div>
    );
}

export default Home;
