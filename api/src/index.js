import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/fotos_gerais', express.static('storage/fotos_gerais'));

import produtoController from './controller/produtoController.js'
server.use(produtoController)

import marcaController from './controller/marcaController.js';
server.use(marcaController)



server.listen(process.env.PORT, () => console.log(`API CONECTADA NA PORTA ${process.env.PORT}`));