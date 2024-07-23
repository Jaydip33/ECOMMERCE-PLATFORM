import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import imgSrc1 from "../assets/blog1.jpg";
import imgSrc2 from "../assets/blog2.jpg";
import imgSrc3 from "../assets/blog3.jpg";
import download1 from "../assets/download1.jpg";
import download3 from "../assets/farm.jpg";
import download4 from "../assets/flexible.jpg";
import productDrop2 from "../assets/images.jpg";
import productDrop3 from "../assets/images.png";
import productDrop4 from "../assets/images1.jpg";
import download2 from "../assets/images1.png";
import productDrop from "../assets/product-drop.jpg";

const blogItems = [
    {
        src: imgSrc1,
        alt: "First slide",
    },
    {
        src: imgSrc2,
        alt: "Second slide",
    },
    {
        src: imgSrc3,
        alt: "Third slide",
    },
];

function Blog() {
    return (
        <>
            <div>
                <Carousel data-bs-theme="dark">
                    {blogItems.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={item.src}
                                alt={item.alt}
                                style={{
                                    height: "90vh",
                                    objectFit: "cover",
                                }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 position-relative">
                        <img
                            src={productDrop}
                            alt="Loading..."
                            className="w-100 opacity-75"
                            style={{ height: "424px" }}
                        />
                        <div
                            className="text-black"
                            style={{ position: "absolute", top: "10px", left: "50px" }}
                        >
                            <h3>
                                <strong>25%</strong>
                            </h3>
                            <h3>
                                <strong>off everything</strong>
                            </h3>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="position-relative">
                            <img
                                src={productDrop2}
                                alt=""
                                className="w-100 opacity-50"
                                style={{ height: "200px" }}
                            />
                            <div
                                className="text-black"
                                style={{ position: "absolute", top: "10px", left: "50px" }}
                            >
                                <h3>
                                    <strong>Meet the trends</strong>
                                </h3>
                                <h3>
                                    <strong>of the season</strong>
                                </h3>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center my-4">
                            <div className="position-relative me-2">
                                <img
                                    src={productDrop4}
                                    alt=""
                                    className="w-100 opacity-75"
                                    style={{ height: "200px" }}
                                />
                                <div
                                    className="text-black"
                                    style={{ position: "absolute", top: "10px", left: "20px" }}
                                >
                                    <h3>
                                        <strong>25%</strong>
                                    </h3>
                                    <h3>
                                        <strong>off everything</strong>
                                    </h3>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img
                                    src={productDrop3}
                                    alt=""
                                    className="w-100"
                                    style={{ height: "200px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <center>
                        <h4>OUR PROMISE</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Asperiores, assumenda non earum iusto ipsam maxime inventore fuga.
                        </p>
                    </center>
                </div>

                <div className="d-flex justify-content-center my-5">
                    <div className="row container">
                        <div className="col-md-3">
                            <Card
                                style={{
                                    width: "16rem",
                                    height: "23rem",
                                    borderTopLeftRadius: "130px",
                                    borderBottomRightRadius: "130px",
                                }}
                                className="shadow p-3 mb-5 bg-body border-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={download1}
                                    style={{ mixBlendMode: "darken" }}
                                />
                                <Card.Body>
                                    <center>
                                        <Card.Title>A modern Approach</Card.Title>
                                        <Card.Text>
                                            We pride ourselves on sourcing on-trend flowers.
                                        </Card.Text>
                                    </center>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card
                                style={{
                                    width: "16rem",
                                    height: "23rem",
                                    borderBottomLeftRadius: "130px",
                                    borderTopRightRadius: "130px",
                                }}
                                className="shadow p-3 mb-5 bg-body border-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={download2}
                                    style={{ height: "13rem", mixBlendMode: "darken" }}
                                />
                                <Card.Body>
                                    <center>
                                        <Card.Title>Delivery Fast</Card.Title>
                                        <Card.Text>
                                            From our coast-to-coast next-day delivery to our same-day
                                            delivery.
                                        </Card.Text>
                                    </center>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card
                                style={{
                                    width: "16rem",
                                    height: "23rem",
                                    borderTopLeftRadius: "130px",
                                    borderBottomRightRadius: "130px",
                                }}
                                className="shadow p-3 mb-5 bg-body border-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={download3}
                                    style={{ mixBlendMode: "darken" }}
                                />
                                <Card.Body>
                                    <center>
                                        <Card.Title>Sourced at the Farm</Card.Title>
                                        <Card.Text>
                                            No middlemen. No cutting corners. Just happiness.
                                        </Card.Text>
                                    </center>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card
                                style={{
                                    width: "16rem",
                                    height: "23rem",
                                    borderBottomLeftRadius: "130px",
                                    borderTopRightRadius: "130px",
                                }}
                                className="shadow p-3 mb-5 bg-body border-0"
                            >
                                <Card.Img
                                    variant="top"
                                    src={download4}
                                    style={{ mixBlendMode: "darken" }}
                                />
                                <Card.Body>
                                    <center>
                                        <Card.Title>Flexible</Card.Title>
                                        <Card.Text>
                                            Customize each delivery or set your recipient & frequency.
                                        </Card.Text>
                                    </center>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
