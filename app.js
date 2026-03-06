if(process.env.NODE_ENV != "production"){
require("dotenv").config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const listening = require("./Model/listening.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");
const Review = require("./Model/review.js");
const {listeningSchema , reviewSchema} = require("./schema.js");
const review = require("./Model/review.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./Model/user.js")


const listenings = require("./routes/listenings.js");
const userRouter = require("./routes/user.js")


// const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";
// console.log(dbUrl);
const dbUrl = process.env.ATLASDB_URL


mongoose.connect(process.env.ATLASDB_URL)
.then(() => {
  console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("❌ MongoDB Connection Error:", err);
});

async function main(){
    await mongoose.connect(dbUrl);
}

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(cookieParser());

const store = MongoStore.create({
  mongoUrl: process.env.ATLASDB_URL,
  ttl: 7 * 24 * 60 * 60,
  touchAfter: 24 * 3600,
});

store.on("error", (err) => {
  console.error("MongoStore Error:", err);
});

const sessionoption = {
    store,
    secret : process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
};



app.use(session(sessionoption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));

passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use((req,res,next) =>{
    res.locals.success = req.flash("success");
    res.locals.deleted = req.flash("deleted");
    res.locals.curruser = req.user;
    next();
})


app.use("/listening",listenings)
app.use("/",userRouter);


app.get("/getcookies",(req,res) =>{
    res.cookie("great","hello");
    res.send("great cookies");
    console.log(req.cookies);
})
app.get("/greet",(req,res)=>{
    let {name} = req.cookies;
    res.send(`hi ${req.name}`);
})

app.use((req,res,next) =>{
    next(new expressError( 404 ,"page not found"));
})

app.use((err,req,res,next)=>{
     if(res.headersSent){
        return next(err);
    }
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).send(message);
})

app.listen(8080,()=>{
    console.log("server running in port 8080");
})
