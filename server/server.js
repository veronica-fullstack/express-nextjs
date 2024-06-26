const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');

app.use(cors());

// api/route
app.get("/api/home", (req, res) => {
    res.json({message:"Hello World", people: ["B1","B2","B3"]});
});


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})