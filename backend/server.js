import express from "express";
import bodyParser from "body-parser";
// import cors from "cors";
// import records from "./routes/record.js";

const PORT = process.env.PORT || 80;
const app = express();

let userGoal = "Docker"
// app.use(cors());
// app.use(express.json());
// app.use("/record", records);


// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

// GET route to render a basic form
app.get("/", (req, res) => {
  res.send(`
    <section>
  <h2>My Goal</h2>
  <h4> Learning ${userGoal}</h4>
    </section>
    <form action="/submit" method="POST">
      <label for="goal">User Goal:</label>
      <input type="text" id="goal" name="goal" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

// POST route to handle form submission
app.post("/submit", (req, res) => {
  const { goal } = req.body;
  userGoal = goal;
  res.redirect("/")
});



// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
