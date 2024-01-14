import express from "express";
import routes from "./controllers/routes";
import { dbConnection } from "./configs/databaseConnections";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnection();
routes(app);

app.listen(port, () => {
  console.log(`listening in port:${port}`);
});
