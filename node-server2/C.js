const express= require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Quizcom');
    console.log('db connected')
}
const userSchema = new mongoose.Schema({
    comment: String,
    phone:String,
  });
  const User = mongoose.model('user', userSchema);


const server =express();
server.use(cors());
server.use(bodyParser.json());


server.post('/Quizcom',async(req,res)=>{

    let user=new User();
    user.phone=req.body.phone;
    user.comment=req.body.comment;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/Quizcom',async(req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8002,()=>{
    console.log('server started')
})