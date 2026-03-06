const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listeningSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: String,

    image: {
        url: String,
        filename: String,
    },

    price: Number,
    location: String,
    country: String,

    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "review",
        }
    ],

    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    geometry:{
        type:{
            type:String,
            enum:["Point"],
            required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    }
});

listeningSchema.post("findOneAndDelete", async (doc)=>{
    if(doc){
        await Review.deleteMany({
            _id:{$in:doc.reviews}
        });
    }
});

const listening = mongoose.model("listening", listeningSchema);
module.exports = listening;