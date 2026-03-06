const express = require("express");
const router = express.Router();
const listening = require("../Model/listening.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {listeningSchema , reviewSchema} = require("../schema.js");
const expressError = require("../utils/expressError.js");
const Review = require("../Model/review.js");
// const Revieew = require("../review.js");
const mongoose = require("mongoose");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })
const {isloggedin,isReviewAuthor} = require("../middleware.js");


const listeningController = require("../controllers/listenings.js");
const reviewController = require("../controllers/review.js");


const validateReview = (req,res,next)=>{
    let{error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new expressError(400,errMsg);
    }else{
        next();
    }
};

router.get("/filter/trending", (req,res)=>{
    req.flash("deleted","This feature is coming soon. Stay tuned");
    res.redirect("/listening");
});

router
.route("/")
.get(wrapAsync(listeningController.index))
.post(
isloggedin,
upload.single("listening[image][url]"),
wrapAsync(listeningController.showListening)
);

router.get("/search", async (req, res) => {
  let { location } = req.query;

  let listings = await listening.find({
    location: { $regex: location, $options: "i" }
  });

  res.render("listening/index.ejs", { allistening: listings });
});
//new routes
router.get("/new",isloggedin,listeningController.renderNewForm);

router
.route("/:id")
.get(wrapAsync(listeningController.createListening))
.delete(isloggedin,wrapAsync(listeningController.deleteListening));




//review post route
router.post("/:id/reviews",isloggedin,validateReview, wrapAsync(reviewController.reviewPost));

// review delete route
router.delete("/:id/review/:reviewId",isloggedin,isReviewAuthor,wrapAsync(reviewController.reviewDelete));



module.exports = router;