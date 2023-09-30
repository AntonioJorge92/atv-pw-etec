create database At_pw2;

use At_pw2;

create table tbl_produto(
codigo_produto INT(10) unsigned auto_increment primary key,
nome_produto varchar(255) not null,
valor_produto decimal(10,2) not null,
imagem_produto varchar(500) not null,
descricao_produto TEXT
);

create table tbl_categoria(
codigo_categoria int(10) unsigned auto_increment primary key,
nome_categoria varchar(255) not null,
observacoes_categoria TEXT
);