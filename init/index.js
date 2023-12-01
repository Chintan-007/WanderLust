const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main(){
    await mongoose.connect(MONGO_URL);
}

main()
.then((res)=>{
    console.log("Connected to db");
})
.catch((err)=>{
    console.log("Some err in DB");
});

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:"6565978c6c3bedfd74a5c2db"}));
    await Listing.insertMany(initData.data);
    console.log("Database initalised");
};

initDB();