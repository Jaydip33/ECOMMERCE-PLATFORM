import { FaTwitter, FaFacebookF, FaPinterest } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Footer() {
    const [email, setEmail] = useState("");

    const socialIcons = [
        { icon: FaTwitter, link: "" },
        { icon: FaFacebookF, link: "" },
        { icon: TfiGoogle, link: "" },
        { icon: FaPinterest, link: "" },
        { icon: ImInstagram, link: "" },
    ];

    const footerSections = [
        {
            title: "SUPPORT",
            links: ["Contact Us", "FAQs", "Size Guide", "Shipping & Returns"],
        },
        {
            title: "SHOP",
            links: ["Mens Shopping", "Womens Shopping", "Kids Shopping", "Discounts"],
        },
        {
            title: "COMPANY",
            links: [
                "Our Story",
                "Careers",
                "Terms & Conditions",
                "Privacy & Cookie policy",
            ],
        },
        {
            title: "CONTACT",
            links: ["1-202-555-0105", "1-202-555-0106", "help@shopper.com"],
        },
    ];

    const handleClick = (e) => {
        e.preventDefault();
        if (email) {
            toast.success("Thank you for subscribing!")
        } else {
            toast.error("Please enter an email address")
        }

        setEmail("");
    }

    return (
        <footer className="bg-dark text-white pt-5 px-5 pb-4">
            <ToastContainer position="top-center" autoClose={2000} />
            <div className="container">
                <div className="text-center m-5">
                    <div className="m-4">
                        <h4>Want style Ideas and Treats?</h4>
                    </div>
                    <div>
                        <input
                            className="bg-dark text-white mx-3 ps-5 border border-black border-2 rounded-2"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email *"
                            style={{ width: "40%", height: "60px" }}
                        />
                        <button
                            className="bg-dark text-white border border-black border-2 rounded-2 p-3"
                            style={{ width: "150px", height: "60px" }}
                            onClick={handleClick}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center m-5">
                    <div>
                        <h4 className="ms-4">Shopper.</h4>
                        <div className="me-5">
                            {socialIcons.map((icon, index) => (
                                <icon.icon key={index} className="m-2" />
                            ))}
                        </div>
                    </div>

                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <ul>
                                <h6>{section.title}</h6>
                                {section.links.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border-top">
                <p className="mt-4 text-secondary text-center">
                    © 2024 All rights reserved. Designed by Unvab.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
