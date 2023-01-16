const express = require ('express')
const {PORT}=require("./config/index.js")
const flightSearches=()=>{
    const app=express()
    app.listen(PORT,function(){
        console.log(`your server is started on port ${PORT}`)
    })
}
flightSearches()