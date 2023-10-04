import { connection } from "./connection.js";

export async function ListarTodasMarcas() {
    const comando = `
    select 
        nm_marca    as nome
    from tb_marca
    `;

    const [respo] = await connection.query(comando)
    return respo
};

export async function PesquisarMarcas(busca) {
    const comando = `
    select 
        nm_marca    as nome
    from tb_marca 
    where
        nm_marca
    like %?%
    `;

    const [respo] = await connection.query(comando, [busca])
};

export async function AdicionarMarca(marca) {
    const comando = `
    insert into (nm_marca)
    values (?)
    `;
    
    const [respo] = await connection.query(comando, [marca.nome]);
};

export async function AlterarMarca(marca) {
    const comando = `
    update tb_marca
    set
        nm_marca = ?
    where id_marca = ?
    `;

    const [respo] = await connection.query(comando, [
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

    const [respo] = connection.query(comando, [id]);
};