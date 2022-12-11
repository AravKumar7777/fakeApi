const { response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const apiData = require("./data.json");
const cors = require("cors");

app.use(cors());

app.get("/" ,(request , response) => {
    response.send("aman kumar shreya kumari mukul kumari rahul kumar");
});

app.get("/service" , (request , response) => {
    response.send(apiData);
});

app.listen(port , () =>{
    console.log("aman kumar shreya kumari")
})