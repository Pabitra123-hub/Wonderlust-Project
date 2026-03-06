const Review = require("../Model/review.js");
const listening = require("../Model/listening.js");
const maptilerClient = require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAP_TOKEN;
// index route
module.exports.index = async(req,res)=>{
   const allistening = await listening.find({});
   res.render("./listening/index.ejs",{allistening});
};

// new routes
module.exports.renderNewForm = (req,res)=>{
    res.render("./listening/new.ejs");
};

//show route
module.exports.showListening =  async (req, res, next) => {

    const geoData = await maptilerClient.geocoding.forward(
            req.body.listening.location,
            { limit: 1 }
        );
    
    let url = req.file.path;
    let filename = req.file.filename;
    try{
    let data2 = new listening(req.body.listening);
    data2.owner = req.user._id
    data2.image = {url, filename};
    data2.geometry = geoData.features[0].geometry;
    let saveListening = await data2.save();
    console.log(saveListening);
    req.flash("success","New listening created"); 
    res.redirect("/listening");
    }
    catch(err){
        next(err);
    }
};

//show route
module.exports.createListening = async(req,res)=>{
    let {id} = req.params;
    const data1 = await listening.findById(id).populate({path: "reviews", populate:{
        path: "author",
    }}).populate("owner");
    console.log(data1);
    res.render("./listening/show.ejs",{data1, mapToken: process.env.MAP_TOKEN});
}

//delete route

module.exports.deleteListening = (async (req,res)=>{
    let {id} = req.params;
    await listening.findByIdAndDelete(id);
    req.flash("deleted","Listening deleted successfully"); 
    res.redirect("/listening");
})

