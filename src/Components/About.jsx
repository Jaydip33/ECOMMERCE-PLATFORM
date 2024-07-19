import about1 from "../assets/about_us_2.webp";
import about2 from "../assets/about_us_1.jpg";

function About() {
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-md-6">
                    {about1 && (
                        <img
                            src={about1}
                            alt=""
                            className="w-75"
                            style={{ mixBlendMode: "multiply" }}
                        />
                    )}
                </div>
                <div className="col-md-6">
                    <div>
                        <h1>About Us</h1>
                    </div>
                    <div>
                        <h5>Sample Headline</h5>
                    </div>
                    <div className="mt-4">
                        <span>
                            Article evident arrived express highest men did boy. Mistress
                            sensible entirely am so. Quick can manor smart money hopes worth
                            too. Comfort produce husband boy her had hearing. Law others
                            theirs passed but wishes. You day real less till dear read.
                            Considered use dispatched melancholy sympathize discretion led. Oh
                            feel if up to till like.
                        </span>
                    </div>
                </div>
            </div>

            <div className="m-5 shadow-lg p-3 mb-5 bg-body rounded">
                {about1 && (
                    <p className="m-5" style={{ fontSize: "20px" }}>
                        <em>
                            He an thing rapid these after going drawn or. Timed she his law the
                            spoil round defer. In surprise concerns informed betrayed he
                            learning is ye. Ignorant formerly so ye blessing. He as spoke avoid
                            given downs money on we. Of properly carriage shutters ye as
                            wandered up repeated moreover.
                        </em>
                    </p>
                )}
            </div>

            <div className="row mb-5">
                <div className="col-md-6 mt-5">
                    {about1 && (
                        <div>
                            <div>
                                <h1>Our Mission</h1>
                            </div>
                            <div>
                                <div className="m-3 ms-5">
                                    <span>
                                        Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                                        udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                                        gravida. Risus commodo viverra sebfd dho eiusmod tempor
                                        maecenas accumsan lacus. Risus commodo viverra sebfd dho
                                        eiusmod tempor maecenas accumsan lacus.
                                    </span>
                                </div>
                                <div className="m-3 ms-5">
                                    <span>
                                        Risus commodo viverra sebfd dho eiusmod tempor maecenas
                                        accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                                        maecenas accumsan.
                                    </span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <div>
                                    <h1>Our Vision</h1>
                                </div>
                                <div>
                                    <div className="m-3 ms-5">
                                        <span>
                                            Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                                            udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                                            gravida. Risus commodo viverra sebfd dho eiusmod tempor
                                            maecenas accumsan lacus. Risus commodo viverra sebfd dho
                                            eiusmod tempor maecenas accumsan lacus.
                                        </span>
                                    </div>
                                    <div className="m-3 ms-5">
                                        <span>
                                            Risus commodo viverra sebfd dho eiusmod tempor maecenas
                                            accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                                            maecenas accumsan.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    {about2 && (
                        <img
                            src={about2}
                            alt=""
                            style={{ mixBlendMode: "multiply", width: "693px" }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;
