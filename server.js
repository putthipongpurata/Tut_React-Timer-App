const express = require('express');

// Create our app
const app = express();

// app.use((req, res, next)=>{
//   if(req.headers['x-forwarded-proto'] === 'https'){
//     next();
//   }else{
//     res.redirect(`http://${req.hostname}${req.url}`);
//   }
// });

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`Express server is up on PORT ${PORT}`);
});