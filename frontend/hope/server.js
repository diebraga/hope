const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const stripe = new Stripe('< YOUR_STRIPE_SECRET_KEY >')

app.post('/payment', async (req, res) => {

    try {
        const {amount} = req.body
        console.log(amount)

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "USD"
        })

        res.status(200).send(paymentIntent.client_secret);
    } catch (error) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }

})


app.listen(5000, () => {
    console.log("Now listening on PORT 5000")
})
