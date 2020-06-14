import express from 'express';

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'dist' });
})

app.listen(3000, () => console.log("Running server"));