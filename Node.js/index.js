const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000;
 
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/sound/:name', (req, res) => {
    const { name } = req.params;
    switch (name) {
        case 'dog':
            res.json({'sound' : '멍멍'});
            break;
        case 'cat':
            res.json({'sound' : '야옹'});
            break;
        case 'cow':
            res.json({'sound' : '음머'});
            break;
        default:
            res.json({'sound' : '알수없음'})
    }

})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})