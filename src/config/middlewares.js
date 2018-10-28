import morgan from 'morgan'
import {isDev} from "../constants/index";
import express from 'express'

export default app =>{
    app.use(morgan(isDev ? 'dev' : 'common'))
    app.use(express.json());
}