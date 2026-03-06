const mongoose = require("mongoose");
const initdata = require("./data.js");
const listening = require("../Model/listening.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

main()
.then((res)=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await listening.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({...obj,owner: "69a01c51d61c7279f1e69da6"}));
    await listening.insertMany(initdata.data);
    console.log("data is inisialized");
}
initDB();