const express = require('express')
//creamos instancia del servidor
const app = express();
app.get("/",(req,res) =>{
    res.send("Cac Deploy");
});
const PORT = process.env.PORT || 3000;
//Le decimos a la app que escuche a través de ese puerto
app.listen(PORT,() => console.log(`http://localhost:${PORT}`));