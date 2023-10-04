import { Router } from 'express';
const endpoint = Router();

import { AdicionarProdutos, AlterarProdutos, DeletarProdutos, ListarTodosProdutos, PesquisarProdutos } from '../repository/produtoRepository.js';


endpoint.get(('/produto'), async (req, resp) => {
    try {
        const respo = await ListarTodosProdutos();
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.message});
    };
});

endpoint.get(('/pesquisar/produto/:busca'), async (req, resp) => {
    try {
        const pedi = req.params.busca;
        const respo = await PesquisarProdutos(pedi)
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.message})
    };
});

endpoint.post(('/inserir/produto'), async (req, resp) => {
    try {
        const pedi = req.body;
        const respo = await AdicionarProdutos(pedi);

        if (!pedi.nome) {
            throw new Error('Obrigatório inserir um Nome!');
        };

        if (!pedi.tamanho) {
            throw new Error('Obrigatório inserir um Tamanho');
        };

        if (!pedi.marca) {
            throw new Error('Obrigatório inserir uma Marca');
        }

        if (!pedi.preco) {
            throw new Error('Obrigatório inserir um Preço!');
        };

        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.message});
    };
});

endpoint.put(('/alterar/produto'), async (req, resp) => {
    try {
        const pedi = req.body;
        const respo = await AlterarProdutos(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.message});
    };
});

endpoint.delete(('/deletar/produto/:id'), async (req, resp) => {
    try {
        const pedi = req.params.id;
        const respo = await DeletarProdutos(pedi);
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.message});
    };
});

export default endpoint