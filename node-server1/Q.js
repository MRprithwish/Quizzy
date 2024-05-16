const express= require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const mongoose = require('mongoose');

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Quizz');
    console.log('db connected')
}
const userSchema = new mongoose.Schema({
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    answer:String
  });
  const User = mongoose.model('user', userSchema);


const server =express();
server.use(cors());
server.use(bodyParser.json());


server.post('/Quizz',async(req,res)=>{

    let user=new User();
    user.question=req.body.question;
    user.option1=req.body.option1;
    user.option2=req.body.option2;
    user.option3=req.body.option3;
    user.option4=req.body.option4;
    user.answer=req.body.answer;
    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.get('/Quizz',async(req,res)=>{
    const docs = await User.find({});
    res.json(docs)
})

server.listen(8001,()=>{
    console.log('server started')
})