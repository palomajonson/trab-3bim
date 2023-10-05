import { Router } from 'express';
const endpoint = Router();

import multer from 'multer';
const upload = multer({ dest: 'storage/fotos_gerais'});


import { AdicionarProdutos, AlterarProdutos, DeletarProdutos, InserirImagemProduto, ListarTodosProdutos, PesquisarProdutos } from '../repository/produtoRepository.js';


endpoint.get(('/produto'), async (req, resp) => {
    try {
        const respo = await ListarTodosProdutos();
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.message});
    };
});

///pesquisar/produto/busca?nome=
endpoint.get(('/pesquisar/produto/busca'), async (req, resp) => {
    try {
        const pedi = req.query;
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

endpoint.put(('/imagem/produto/:id'), upload.single('foto_produto'), async (req, resp) => {
    try {
        const idProduto = req.params.id;
        const imagem = req.file.path;
        const respo = await InserirImagemProduto(imagem, idProduto);

        if (respo != 1) {
            throw new Error('Erro ao Salvar imagem');
        };

        resp.status(204).send
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