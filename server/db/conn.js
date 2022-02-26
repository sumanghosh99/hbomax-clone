const mongoose = require('mongoose');

const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
   
    useUnifiedTopology:true,
 
}).then(()=>{
    console.log("db connect......")
}).catch((err)=>{
    console.log('no connection....')
})
// const DB='mongodb+srv://dilipjakhar:dilipjakhar123@cluster0.0t2ya.mongodb.net/Reactweb?retryWrites=true&w=majority';
// const DB='mongodb+srv://dilipjakhar:dilipjakhar123@cluster0.8sh72.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'