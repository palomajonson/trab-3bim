select id_marca as marca, nm_marca as nome from tb_marcas;
select nm_produto as nome, ds_tamanho as tamanho, ds_produto as descricao, id_marca as marca, vl_preco as preco from tb_produtos;


insert into tb_marcas (nm_marca) values ('puma'); 
insert into tb_marcas (nm_marca) values ('vans'); 
insert into tb_marcas (nm_marca) values ('converse'); 

-- insert teste
insert into tb_produtos (nm_produto, ds_tamanho, ds_produto, id_marca, vl_preco) values ('sapato gostoso', 45, 'é um sapato muito gostoso', 1, 33.99);
insert into tb_produtos (nm_produto, ds_tamanho, ds_produto, id_marca, vl_preco) values ('sapato maravilhoso', 35, 'é um sapato muito maravilhoso', 3, 33.95);
insert into tb_produtos (nm_produto, ds_tamanho, ds_produto, id_marca, vl_preco) values ('sapato top', 33, 'é um sapato muito top', 3, 33.90);