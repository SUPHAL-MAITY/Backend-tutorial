import express from "express"

const app=express()
const port = 4000

// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"first  joke",
            content:"This is  suphal",

    },
        {
            id:2,
            title:"second joke",
            content:"This is  susmita",

    },
        {
            id:3,
            title:"third joke",
            content:"This is  rahul",

    },
        {
            id:4,
            title:"fourth joke",
            content:"This is  ambika",

    }]
    res.send(jokes)
})


app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})