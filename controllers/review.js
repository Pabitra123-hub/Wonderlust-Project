const Review = require("../Model/review.js");
const listening = require("../Model/listening.js");
//review post route
module.exports.reviewPost =  async(req,res) =>{
    const listeningdoc = await listening.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listeningdoc.reviews.push(newReview);

    await newReview.save();
    await listeningdoc.save();
    req.flash("success","Review created");
   res.redirect(`/listening/${listeningdoc._id}`);
}

//review delete route
module.exports.reviewDelete = async(req,res)=>{
    let {id,reviewId} = req.params;
    await listening.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("deleted","Review deleted");
    res.redirect(`/listening/${id}`);
}