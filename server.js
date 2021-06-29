import express from "express"
import { APP_PORT } from './config';
import routes from "./routes"


const app = express();

app.use('/api',routes)


app.listen(APP_PORT, () =>{console.log("Listening at port 5000")})