import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import produtoController from './controller/produtoController.js';
server.use(produtoController);

server.use('/storage/fotos_gerais', express.static('storage/fotos_gerais'));

import marcaController from './controller/marcaController.js';
server.use(marcaController)

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, () => console.log(`API CONECTADA NA PORTA ${PORT}`));