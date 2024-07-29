/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState } from "react";

function Checkout({ products }) {
    const [loading, setLoading] = useState(false);

    const makePayment = async () => {
        setLoading(true);
        try {
            const stripe = await loadStripe(
                "pk_test_51Ph3UnRuFWixJrx01UMAHChNFudIem20I6YZmHSwqygUourVl0Q69GKwnOnhVa5ukBQcADo9zy06ZFQBSkN52LIg0093JjoBBU"
            );

            const body = {
                products: products,
            };

            const headers = {
                "Content-Type": "application/json",
            };

            // Make the payment request
            const res = await axios.post("http://localhost:8080/payment", body, { headers });

            // Access the session directly from the Axios response
            const session = res.data;

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.log(result.error.message);
            }
        } catch (error) {
            console.error("Error during the payment process:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Button
                variant="dark"
                className="w-100"
                onClick={makePayment}
                disabled={loading} // Disable button while loading
            >
                {loading ? "Processing..." : "Checkout"}
            </Button>
        </div>
    );
}

export default Checkout;
