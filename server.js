import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { NASA_API_URL, APOD, PLANETARY } from "./constants.js";
import { HttpClient } from "./app/util/HttpClient.js";

const API_KEY = process.env.NASA_API_KEY;
const client = new HttpClient()

const app = express();
app.use(cors());
app.use(express.json());

app.get('/apod', async (req, res) => {

    let params = new URLSearchParams();
    params.append("api_key", API_KEY);

    let response = await client.get(`${NASA_API_URL}${PLANETARY}${APOD}`, params, null);

    res.send(response)


})

app.listen(8080, () => console.log("Discover today's asteroid picture at 'http://localhost:8080/apod'!"))
