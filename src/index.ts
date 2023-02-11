/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
/**
 * App Variables
 */

if (!process.env.port)
{
    process.exit(1)
}

const port:number=parseInt(process.env.port as string,10);
const app=express()
/**
 *  App Configuration
 */

/**
 * Server Activation
 */