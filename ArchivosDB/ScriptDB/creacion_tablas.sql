create database if not exists rueDb;

use rueDb;

create table if not exists tipo_usuarios(
	tipo_usuario_id int not null auto_increment primary key,
	descripcion varchar(50) not null,
	estatus TINYINT not null default 1
);

create table if not exists tipo_categorias(
	tipo_categoria_id int not null auto_increment primary key,
	descripcion varchar(50) not null,
	estatus TINYINT not null default 1
);

create table if not exists tipo_comidas(
	tipo_comida_id int not null auto_increment primary key,
	descripcion varchar(50) not null,
	estatus TINYINT not null default 1
);


create table if not exists usuarios(
	usuario_id int not null auto_increment primary key,
	nombre_primero varchar(50) not null,
	nombre_segundo varchar(50),
	apellidoP varchar(50) not null,
	apellidoM varchar(50),
	correo varchar(100) not null unique,
	telefono varchar(15) not null,
	passwords varchar(120) not null,
	estatus TINYINT not null default 1,
	foto varchar(100) not null,
	tipo_usuario_id int,
	foreign key (tipo_usuario_id) references tipo_usuarios (tipo_usuario_id)
);

create table if not exists productos(
	producto_id int not null auto_increment primary key,
	nombre varchar(50) not null,
	precio float not null,
	descuento float,
	tipo_comida_id int,
	tipo_categoria_id int,
	estatus TINYINT not null default 1,
	descripcion varchar(500) not null,
	foto varchar(100) not null,
	foreign key (tipo_comida_id) references tipo_comidas (tipo_comida_id),
	foreign key (tipo_categoria_id) references tipo_categorias (tipo_categoria_id)
);

create table if not exists carritos(
	carrito_id int not null auto_increment primary key,
	usuario_id int,
	estatus TINYINT not null default 1,
	cantidad_items int not null,
	precio_total float not null,
	foreign key (usuario_id) references usuarios (usuario_id)
);

/**
 * createdAt
 * updatedAt
 * */