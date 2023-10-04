create database db_boo_shoes;
use db_boo_shoes;

create table tb_marcas {
    id_marca        int primary key auto_increment,
    nm_marca        varchar(100)
}

create table tb_produtos {
    id_produto      int primary key auto_increment,
    nm_produto      varchar(100),
    ds_tamanho      int,
    id_marca        int, foreign key (id_marca) references tb_marcas (id_marca),
    vl_preco        decimal(10,2)
}