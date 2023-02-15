require("dotenv").config();

const express = require("express");
// app is running express function
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    // client url
    origin: "http://localhost:3000",
  })
);
  
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
    [1, { priceInCents: 1999, name: "Basic Package" }],
    [2, { priceInCents: 3999, name: "Standard Package" }],
]);

app.post("/create-checkout-session", async (req, res) => {
    try {
      // integrate stripe
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        // we can get item info with req.body and .items bc thats the items object 
        // then map through each item and return a new item formatted for stripe
        line_items: req.body.items.map(item => {
          const storeItem = storeItems.get(item.id)
          return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: storeItem.name,
                },
                unit_amount: storeItem.priceInCents,
            },
            quantity: item.quantity,
          }
        }),
        success_url: `${process.env.CLIENT_URL}`,
        cancel_url: `${process.env.CLIENT_URL}`,
      })
      // get stripe session url
      res.json({ url: session.url })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  });

const PORT = process.env.PORT|| 4000;
app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`));