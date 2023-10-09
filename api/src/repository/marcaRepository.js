import conexao from "./connection.js";

export async function ListarTodasMarcas() {
    const comando = `
    select 
        nm_marca    as nome
    from tb_marca
    `;

    const [respo] = await (await conexao).query(comando)
    return respo
};

export async function PesquisarMarcas(busca) {
    const comando = `
    select 
        nm_marca    as nome
    from tb_marca 
    where
        nm_marca
    like ?
    `;

    const [respo] = await (await conexao).query(comando, [`%${busca}%`]);
    return respo
};

export async function AdicionarMarca(marca) {
    const comando = `
    insert into (nm_marca)
    values (?)
    `;
    
    const [respo] = await (await conexao).query(comando, [marca.nome]);
};

export async function AlterarMarca(marca) {
    const comando = `
    update tb_marca
    set
        nm_marca = ?
    where id_marca = ?
    `;

    const [respo] = await (await conexao).query(comando, [
        marca.nome,
        marca.id
    ]);

    const respoAR = respo.AffectedRows;
    return respoAR;
};

export async function DeletarMarca(id) {
    const comando = `
    delete from tb_marcas
    where id_marca = ?
    `;

    const [respo] = con.query(comando, [id]);
};