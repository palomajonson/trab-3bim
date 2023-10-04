import { connection } from "./connection.js";

export async function ListarTodosProdutos() {
    const comando = `
    select
        nm_produto      as nome,
        ds_tamanho      as tamanho,
        id_marca        as marca,
        vl_preco        as preco
    from tb_produtos
    `;

    const [respo] = await connection.query(comando);
    return respo;
};

export async function PesquisarProdutos(busca) {
    const comando = `
    select
        nm_produto      as nome,
        from tb_produtos
    where
        nm_produto
    like %?% 
    `;

    const [respo] = await connection.query(comando, [busca]);
    return respo;
};

export async function MostrarDetalhesProduto(id) {
    const comando = `
    select
        nm_produto      as nome,
        ds_tamanho      as tamanho,
        id_marca        as marca,
        vl_preco        as preco
        img_produto     as imagem
    from tb_produtos
    where id_produto = ?
    `;

    const [respo] = await connection.query(comando, [id])
}

export async function AdicionarProdutos(produto) {
    const comando = `
    insert into tb_produto (
        nm_produto      as nome,
        ds_tamanho      as tamanho,
        id_marca        as marca,
        vl_preco        as preco
    values (
        ?,
        ?,
        ?,
        ?,
        ?
    )`; 

    const [respo] = await connection.query(comando, [
        produto.nome,
        produto.tamanho,
        produto.marca,
        produto.preco
    ]);

    const respoID = respo.insertId;
    return respoID

};

export async function InserirImagemProduto(imagem, id) {
    const comando = `
    update tb_produto
    set
        img_produto = ?
    where id_produto = ?
    `;

    const [respo] = await connection.query(comando, [imagem, id])
    const respoAR = respo.AffectedRows
    return respoAR;
};

export async function AlterarProdutos(produto) {
    const comando = `
    update tb_produto 
    set
        nm_produto = ?,
        ds_tamanho = ?,
        id_marca = ?,
        vl_preco = ?
    where id_produto = ?
    `;

    const [respo] = await connection.query(comando, [
        produto.nome,
        produto.tamanho,
        produto.marca,
        produto.preco,
        produto.id
    ]);

    const respoAR = respo.AffectedRows;
    return respoAR;
};

export async function DeletarProdutos(id) {
    const comando = `
    delete from tb_produtos
    where id_produto = ?
    `;

    const [respo] = await connection.query(comando, [id]);
};