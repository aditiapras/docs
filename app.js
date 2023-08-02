const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

const isAuth = (req, res, next) => {
  const base = req.header("X-Base-URL");
  if (base === process.env.BASE_URL) {
    next();
  } else {
    res.status(401);
    res.json({
      error: "Access forbidden, you are not authorized to access this API!",
    });
  }
};

app.get("/test", isAuth, (req, res) => {
  const getData = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL).then((r) =>
      r.json()
    );
    res.json(data);
  };
  getData();
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
