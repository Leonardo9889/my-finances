const app = require('./app')

const start = async () =>{
  app.listen(3000, () =>{
    console.log("Server runing");
  })
}

start()