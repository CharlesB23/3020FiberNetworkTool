const express = require("express");
const bodyparser = require("body-parser");
const StandardsRoutes = require("./db/routes/standards.route");
const linkDesignRoutes = require("./db/routes/linkDesigns.route");
const fibreRoutes = require("./db/routes/fibres.route");
const SubdesignRoutes = require("./db/routes/subdesigns.route");
const oltRoutes = require("./db/routes/olts.route");
const onuRoutes = require("./db/routes/onus.route");
const splitterRoutes = require("./db/routes/splitters.route");
const MetrodesignRoutes = require("./db/routes/metrodesigns.route");
const mongoose = require("mongoose");

const app = express();

const dbConnectionString = "mongodb://localhost:27017/fibredb";
mongoose
    .connect(dbConnectionString)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log("Connection failed: " + err);
    });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

// Problem app.use("api/pcparts",StandardsRoutes);
app.use(StandardsRoutes);
app.use(linkDesignRoutes);
app.use(fibreRoutes);
app.use(SubdesignRoutes);
app.use(oltRoutes);
app.use(onuRoutes);
app.use(splitterRoutes);
app.use(MetrodesignRoutes);

module.exports = app;