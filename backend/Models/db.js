const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
.then(()=>{
  console.log('MOngodb is coneected')
}).catch((err)=>{
  console.log('mondgo ERROORRR', err)
})