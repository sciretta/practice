const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/leo',{ useNewUrlParser: true, useUnifiedTopology: true  })
.catch(err=>console.error(err))

mongoose.connection
.once('error',err=>{
  console.log('Error:',err);
  mongoose.connection.close();
});

module.exports = mongoose;