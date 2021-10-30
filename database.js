//!connect to the database
const mongoose = require('mongoose')
const url ='mongodb://127.0.0.1:27017/checkpoint'
mongoose.connect(url, { useNewUrlParser: true }) 
//!vérifier si la connexion a réussi
const db = mongoose.connection
db.once('open', _ => {
console.log('Database connected:', url)
})
db.on('error', err => {
console.error('connection error:', err)
})
//!import model person
const PersonModel = require('./models/person')
//!Create and Save a Record of a Model
/* let person = new PersonModel({
    name :'serine',
    age : 21,
    favoriteFoods :['Mhajeb','couscous','Recheta']
})
person.save(function (error, document) {
    if (error) console.error(error)
    console.log(document)
}) */
//!Create Many Records with model.create()
 /* var arrayOfPeople=[
    {
        name :'Naila',
        age :18,
        favoriteFoods :['Pizza','chekhchokha']
    },
    {
        name :'wassim',
        age : 14,
        favoriteFoods :['la purée','frite']
    },
    {
        name :'Dalila',
        age : 49,
        favoriteFoods :['pasta','couscous','recheta']
    },
    {
        name :'Mourad',
        age : 55,
        favoriteFoods :['loubia','jwaz']
    },
    {
        name :'Mary',
        age : 19,
        favoriteFoods :['pasta','couscous']
    },
    {
        name :'Mary',
        age : 3,
        favoriteFoods :['Loubia','recheta']
    },
    {
        name :'Mary',
        age : 23,
        favoriteFoods :['Humburger','la purée']
    },
]
PersonModel.create(arrayOfPeople).then(doc=>{
    console.log('Success registration');
    console.log(doc)
})  */
//!Use model.find() to Search Your Database
/* PersonModel.find({name :'serine'})
.then(doc=>{
    console.log("find by name");
    console.log(doc)
})
.catch(err=>{
    console.log(err)
}) */
//!Use model.findOne() to Return a Single Matching Document from Your Database
/* PersonModel.findOne({favoriteFoods :'couscous'})
.then(doc=>{
    console.log("find by favorite food");
    console.log(doc)
})
.catch(err=>{
    console.log(err)
}) */
//!Use model.findById() to Search Your Database By _id
/* _id :'ObjectId("617c0d5850e000a0d75e0f32")'
PersonModel.findById("617c0d5850e000a0d75e0f32")
.then(doc=>{
    console.log("find by Id");
    console.log(doc)
})
.catch(err=>{
    console.log(err)
}) */
//!Perform Classic Updates by Running Find, Edit, then Save
/* PersonModel.findById('617c0d5850e000a0d75e0f33',function(err,data){
    if(err){
        console.log(err);
    }
    data.favoriteFoods.push('humburger');
    data.save((err,data)=>{
        if(err){
            console.log(err);
        }
        console.log('humburger added to the list of favorite foods');
        console.log(data);
    });
}); */
//!Perform New Updates on a Document Using model.findOneAndUpdate()
//!{new:true} return the unmodified object
/* PersonModel.findOneAndUpdate({name :'Dalila'},{$set :{age:20}},{new :true},function(err,data){
   if(err){
       console.log(err);
   }
   console.log("age changed successfully ");
   console.log(data);
}); */
//!Delete One Document Using model.findByIdAndRemove
/* PersonModel.findByIdAndRemove('617c0d5950e000a0d75e0f35',function(err,data){
    if(err){
        console.log(err);
    }
    console.log("document deleted successfully ");
    console.log(data);
}); */
//!MongoDB and Mongoose - Delete Many Documents with model.remove()
/* PersonModel.remove({name:'Mary'},function(err,data){
    if(err){
        console.log(err);
    }
    console.log("Many documents removed successfully");
    console.log(data);
}); */
//!Chain Search Query Helpers to Narrow Search Results
PersonModel.find({favoriteFoods :'couscous'}).sort({name:"asc"}).limit(2).select("-age").exec(function(err,data){
  if(err){
      console.log(err);
  }
  console.log("Query Helpers");
  console.log(data);
});