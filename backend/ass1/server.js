import express from "express";

const PORT = process.env.PORT || 70;
const app = express();


// GET route to render a basic form
app.get("/", (req, res) => {
    res.send(`
    <section>
  <h2>Ass 1</h2>
  <h4> Learning Docker </h4>
 </section>`);
});

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
