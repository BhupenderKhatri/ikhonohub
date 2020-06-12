const razor = require('express')()
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')
const bodyParser = require('body-parser')

razor.use(cors())
razor.use(bodyParser.json())

const razorpay = new Razorpay({
    key_id: 'rzp_test_WUnv0wZtxJ2aP6',
    key_secret: '1xvU7zDiI6vbeI1bZBceMBjd'
})

razor.get('/ih', (req, res) => {
    res.sendFile(path.join(__dirname, 'ih.png'))
})

razor.post('/verification', (req, res) => {
    // do a validation
    const secret = '10717210039'

    console.log(req.body)

    const crypto = require('crypto')

    const shasum = crypto.createHmac('sha256', secret)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    console.log(digest, req.headers['x-razorpay-signature'])

    if (digest === req.headers['x-razorpay-signature']) {
        console.log('request is legit')
            // process it
        require('fs').appendFileSync('payment1.json', JSON.stringify(req.body, null, 4))
    } else {
        console.log("not working")
    }
    res.json({ status: 'ok' })
})

razor.post('/razorpay', async(req, res) => {
    const payment_capture = 1
    const amount = 499
    const currency = 'INR'

    const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture
    }

    try {
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports = razor