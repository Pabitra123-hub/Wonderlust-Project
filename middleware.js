const Review = require("./Model/review");

module.exports.isloggedin = (req,res,next)=>{
     if(!req.isAuthenticated()){
        req.session.redirecturl = req.originalUrl;
        req.flash("deleted","You must loged in to create new listenings");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveUrl = (req, res, next) =>{
    if(req.session.redirecturl){
        res.locals.redirecturl = req.session.redirecturl;
    }
    next();
}
module.exports.isReviewAuthor = async(req,res,next) => {
    let{ id , reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(! review.author.equals(res.locals.curruser._id)){
        req.flash("deleted","You are not the owner of this review");
        return res.redirect(`/listening/${id}`);
    }

    next();
};