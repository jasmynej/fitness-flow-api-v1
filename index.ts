import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

const app: Express = express();
const port = 4000;

const options: cors.CorsOptions = {
    origin: '*'
};

app.use(cors(options))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",async (req:Request,res:Response) => {
    res.send("FitnessFlow API V1")
})
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});