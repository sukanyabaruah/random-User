


//controller function


const getAllTasks = async(req, res) => {

    try {
     const tasks = await Task.find({});
     res.status(200).json({tasks})         // {tasks:tasks}
    } catch (error) {
     res.status(500).json({msg:error})
    }
 
 }

const getUsers = async(req,res) => {
    try {
        fetch("https://randomuser.me/api/?results=5")
        .then((results) => {
          return results.json();
        })
        .then((data) => {
          res.status(200).json(showRandomData(data));
        });
    } catch (error) {
        res.status(500).json({msg:error})
    }
   
  }
  
  function showRandomData(randomUser) {
  
    const finalObj = {};
  
    const users = randomUser.results.map(({name: { title, first, last},dob:{date},email}) => `Name: ${title} ${first} ${last} , Email: ${email}, DOB: ${date}`);
    
    finalObj["data"] = users
  
    return finalObj;
  }


  module.exports = {getUsers};
  