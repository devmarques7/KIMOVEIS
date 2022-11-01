import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log(`Connect to ${process.env.POSTGRES_DB}`);
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
  });
})();
