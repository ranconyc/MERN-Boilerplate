const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");
const cookieParser = require("cookie-parser");

const app = express();

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log("error:", error));

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());

const userRouter = require("./routes/user.routes");
app.use("/api/users", userRouter);

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);
});
