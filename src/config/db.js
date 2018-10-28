import mongoose from 'mongoose';

import {DB_URL} from "../constants/index";

mongoose.Promise = global.Promise;
mongoose.set('debug' , true);

try{
    mongoose.connect(DB_URL ,{
        useNewUrlParser : true
    })

}catch (error){
    mongoose.createConnection(DB_URL,{
        useNewUrlParser : true
    })
}

mongoose.connection
    .once('open' ,()=>console.log("Mongo DB Running"))
    .on('error' , e =>{
 //   throw e;
});