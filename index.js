const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
        status: true,
        message: "Hello World"
    });
})

app.listen(3000, () => {
    console.log("[Server] start on port 3000");
});

module.exports = app;