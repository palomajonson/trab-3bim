import { Router } from 'express'
const endpoint = Router();

import { AdicionarMarca, AlterarMarca, DeletarMarca, ListarTodasMarcas, PesquisarMarcas } from '../repository/marcaRepository';


endpoint.get(('/marca'), async (req, resp) => {
    try {
        const respo = await ListarTodasMarcas();
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});

endpoint.get(('/pesquisar/marca/:busca'), async (req, resp) => {
    try {
        const pedi = req.params.busca;
        const respo = await PesquisarMarcas(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});

endpoint.post(('/inserir/marca'), async (req, resp) => {
    try {
        const pedi = req.body;
        const respo = await AdicionarMarca(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});

endpoint.put(('/alterar/marca'), async (req, resp) => {
    try {
        const pedi = req.body;
        const respo = await AlterarMarca(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});

endpoint.delete(('/deletar/marca/:id'), async (req, resp) => {
    try {
        const pedi = req.params.id;
        const respo = await DeletarMarca(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});