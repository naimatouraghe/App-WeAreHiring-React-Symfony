import React from "react";

function Footer() {
    return (
        <footer
            className="d-flex flex-wrap justify-content-center flex-column align-items-center"
            style={{ background: "#ced4da47" }}
        >
            <p className="pt-4">
                <b>WE ARE HIRING</b>
            </p>
            <hr
                style={{
                    margin: "0.5rem 0rem 1rem 0",
                    color: "inherit",
                    border: "0",
                    borderTop: "3px solid",
                    opacity: ".25",
                    width: "75%",
                }}
            />
            <p className="mb-3">© 2022 - We Are Hiring</p>
        </footer>
    );
}

export default Footer;
