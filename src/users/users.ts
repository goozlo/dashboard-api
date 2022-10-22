import express from "express";

const router = express.Router()

router.use((req, res, next) => {
    console.log('Emitter router: ' + Date.now())
    next()
})

router.post('/login', (req, res) => {
    res.send('login')
})

router.post('/register', (req, res) => {
    res.send('register')
})

export { router }
