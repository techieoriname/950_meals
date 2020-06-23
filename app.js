const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require("cors");
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload")

const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 3001;

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'storage')));
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use("/", require('./routes'));

app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        error: "Not found",
    });
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
