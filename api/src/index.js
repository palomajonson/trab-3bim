import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import produtoController from './controller/produtoController.js'
server.use(produtoController)

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API CONECTADA NA PORTA ${PORT}`))