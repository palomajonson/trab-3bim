import { Router } from 'express';
const endpoint = Router();

import { AdicionarProdutos, AlterarProdutos, DeletarProdutos, ListarTodosProdutos, PesquisarProdutos } from '../repository/produtoRepository.js';


endpoint.get(('/produto'), async (req, resp) => {
    try {
        const respo = await ListarTodosProdutos();
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});

endpoint.get(('/pesquisar/produto/:busca'), async (req, resp) => {
    try {
        const pedi = req.params.busca;
        const respo = await PesquisarProdutos(pedi)
        resp.send(resp);
    } catch (err) {
        resp.status(400).send({erro: err.mensage})
    };
});

endpoint.post(('/inserir/produto'), async (req, resp) => {
    try {
        const pedi = req.body;
        const respo = await AdicionarProdutos(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});

endpoint.put(('/alterar/produto'), async (req, resp) => {
    try {
        const pedi = req.body;
        const respo = await AlterarProdutos(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});

endpoint.delete(('/deletar/produto/:id'), async (req, resp) => {
    try {
        const pedi = req.params.id;
        const respo = await DeletarProdutos(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.mensage});
    };
});