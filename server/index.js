const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");
const userRouter = require("./routes/user.routes");

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connected to database"))
  .catch((error) => console.log("error:", error));

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use("/api/users", userRouter);
app.use("/users", userRouter);

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});
