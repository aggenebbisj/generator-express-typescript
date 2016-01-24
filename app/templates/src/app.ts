import * as express from "express";
import {Express, Request, Response} from "express";

export var app: Express = express();

app.get("/", (req: Request, res: Response) => res.send("Hello World!"));
