/* eslint-disable no-undef */
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Ph3UnRuFWixJrx0dshKZCTWJfp89zdgYAL3tkjrg2UB9qkczbWgVXQblGbRa9MsaAOguQ7swF3YPhiVKRcTMXxC00mWniRjli"
);

app.use(express.json());
app.use(cors());

// Checkout API
app.post("/payment", async (req, res) => {
    const { products } = req.body;

    try {
        const lineItems = products.map((item) => ({
            price_data: {
                currency: "USD",
                product_data: {
                    name: item.title,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/sucess",
            cancel_url: "http://localhost:5173/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating payment session:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
