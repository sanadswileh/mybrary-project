const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

//must export for server.js to use
module.exports = router;