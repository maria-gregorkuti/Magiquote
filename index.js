
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req,res) => {
    try {
        const result = await axios.get("https://api.portkey.uk/quote");
        const year = new Date().getFullYear();
        console.log(year);
        res.render("index.ejs", { 
            quote: result.data.quote,
            speaker: result.data.speaker,
            year: year
         });
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
})

app.get("/submit", async (req, res) => {
    try {
        const result = await axios.get("https://api.portkey.uk/quote");
        const year = new Date().getFullYear();
        console.log(year);
        res.render("index.ejs", { 
            quote: result.data.quote,
            speaker: result.data.speaker,
            year: year
         });
      } catch (error) {
        console.log(error.response.data);
        res.status(500);
      }
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})