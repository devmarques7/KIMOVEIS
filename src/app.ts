import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import usersRouter from "../src/routes/user.routes";
import loginRouter from "../src/routes/login.routes";
import propertiesRouter from "../src/routes/propertie.routes";
import categoryRouter from "../src/routes/category.routes";
import scheduleRouter from "../src/routes/schedule.routes";
import { appError } from "./errors/appError";

const app = express();
app.use(express.json());
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/properties", propertiesRouter);
app.use("/categories", categoryRouter);
app.use("/schedules", scheduleRouter);

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof appError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  console.error(err);
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

export default app;
