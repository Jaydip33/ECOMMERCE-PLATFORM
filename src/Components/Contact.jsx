import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const isFormEmpty = Object.values(inputValue).some((value) => !value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormEmpty) {
            toast.error("Please fill in all fields");
        } else {
            toast.success("Thank you for your message!");
            setInputValue({
                name: "",
                email: "",
                title: "",
                message: "",
            });
        }
    };

    return (
        <>
            <div className="container mb-5">
                <ToastContainer position="top-center" autoClose={2000} />
                <div className="d-flex justify-content-center m-5">
                    <h1>Contact Us</h1>
                </div>

                <div className="row justify-content-between">
                    <div className="col-12 col-md-4 col-lg-3 mt-0">
                        <div className="mb-3 d-flex align-items-center">
                            <FiPhone size={"1.5em"} /> <h4 className="m-3"> Call Us:</h4>
                        </div>
                        <div className="mb-3">
                            <p>We are available from 10 am - 10 pm EST, 7 days a week.</p>
                        </div>
                        <div className="mb-3">
                            <span>
                                <b>Customer Service:</b>
                            </span>
                            <p>(123) 123-1234</p>
                        </div>
                        <div className="mb-3">
                            <span>
                                <b>Careers:</b>
                            </span>
                            <p>(123) 123-1234</p>
                        </div>

                        <hr className="d-md-none" />

                        <div className="mb-3 d-flex align-items-center">
                            <MdOutlineEmail size={"1.5em"} /> <h4 className="m-3"> Email Us:</h4>
                        </div>
                        <div className="mb-3">
                            <p>Fill out our form and we will contact you within 24 hours.</p>
                        </div>
                        <div className="mb-3">
                            <span>
                                <b>Customer Service:</b>
                            </span>
                            <p>customer@example.com</p>
                        </div>
                        <div className="mb-3">
                            <span>
                                <b>Careers:</b>
                            </span>
                            <p>careers@example.com</p>
                        </div>

                        <hr className="d-md-none" />

                        <div>
                            <h4> Find Us:</h4>
                            <p>Want to visit our Offline Stores?</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-4">
                                <input
                                    className="form-control p-4"
                                    name="name"
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                    value={inputValue.name}
                                    onChange={handleChange}
                                    style={{ height: "50px" }}
                                    aria-label="Your Name"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    className="form-control p-4"
                                    name="email"
                                    type="email"
                                    placeholder="Your Email *"
                                    required
                                    value={inputValue.email}
                                    onChange={handleChange}
                                    style={{ height: "50px" }}
                                    aria-label="Your Email"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <input
                                    className="form-control p-4"
                                    name="title"
                                    type="text"
                                    placeholder="Title *"
                                    required
                                    value={inputValue.title}
                                    onChange={handleChange}
                                    style={{ height: "50px" }}
                                    aria-label="Title"
                                />
                            </div>
                            <div className="form-group mb-4">
                                <textarea
                                    className="form-control p-4"
                                    rows={5}
                                    name="message"
                                    placeholder="Message *"
                                    value={inputValue.message}
                                    onChange={handleChange}
                                    aria-label="Message"
                                ></textarea>
                            </div>
                            <div>
                                <button className="btn btn-dark">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
