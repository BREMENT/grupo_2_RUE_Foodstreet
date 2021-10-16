use rueDb;

/*insertar tabla tipo_comida*/
INSERT INTO tipo_comidas
(descripcion)
VALUES
('Mexicana'),
('China'),
('Japonesa'),
('Francesa'),
('Italiana'),
('Vegetariana');

/*insertar tabla tipo_categoria*/
INSERT INTO tipo_categorias
(descripcion)
VALUES
('En oferta'),
('Utimos agregados');

/*insertar tabla tipo_usuario*/
INSERT INTO tipo_usuarios
(descripcion)
VALUES
('vendedor'),
('cliente');

/*insertar tabla productos*/
INSERT INTO productos
(nombre, precio, descuento, tipo_comida_id, tipo_categoria_id, descripcion, foto)
VALUES
('Orden Taco fundido',45,0,1,2,
'Elige la carne que te gusta con queso fundido, chile poblano, tortilla de maíz y la salsa especial de Chiplotle',
'tacofundido.jpg'),
('Burrito',40,0,1,2,
'Tortilla de harina de trigo con frijoles, arroz, cebolla, la carne que mas te gusta y queso fundido',
'burrito.jpg'),
('Flautas',40,0,1,2,
'6 rollitos de tortilla de maíz con pollo bañados en crema, con aguacate, queso fresco, lechuga y jitomate',
'dorados.jpg'),
('Sopes',40,0,1,2,
'Sope de maíz con pollo bañados en crema, con aguacate, queso fresco y lechuga',
'sopes.jpg'),
('Keto-taco',40,15,1,1,
'Tortilla de queso fundido con la carne que te gusta acompañados de cebolla, cilantro, tomate y aguacate',
'taco_keto.jpg'),
('Torta Cubana',40,20,1,1,
'Milaneza, chorizo, huevo, jamon y quesos fundido, acompañada con nuestra salsa especial de chipotle',
'torta_cubana.jpg'),
('Taco de Pescado',40,5,1,1,
'Tortilla de maíz, con pescado empanizado, col, jitomate, aguacate, cilantro y crema',
'taco_pescado.jpg'),
('Taco de Camaron',40,2,1,1,
'Tortilla de maíz, con camarones empanizados, col, jitomate, aguacate, cilantro y crema ',
'taco_camaron.jpg');

/*insertar tabla usuarios*/
INSERT INTO usuarios 
(nombre_primero, nombre_segundo, apellidoP, apellidoM, correo, telefono, passwords, foto, tipo_usuario_id)
VALUES
('luis','jesus','villegas','castillo','lc77278@gmail.com','9932245543',
'$2a$10$Y.0wfrCAQUSltTlqLCACTe.6p.NkFgUxQcxx7tyhPUjVk88Gs8pPO',
'1634264732388_perfil_.png',1),
('andrea','jasmin','alegria','alegria','andrea@gmail.com','9924550110',
'$2a$10$iUirrwo1RH5SflcMCWbCleq1lON/Bv7/2rrugD7qDyauVbdzC1hzq',
'1634265249332_perfil_.png',2),
('lua','regina','castillo','negrin','luaRegina@gmail.com','9934550910',
'$2a$10$2wJprZBmAT1ntD3.id0W9OpKCOCQtqO4XwzFBhnEnbB33d3ZZwvWu',
'1634341376507_perfil_.jpg',2),
('alejandra','','perez','perez','alePerez123@gmail.com','9930120223',
'$2a$10$7.rzPUA1CMnr.xF0bpciSOFp5gloLQbI0ykIsurz1W0498uUA.xG.',
'1634342619607_perfil_.jpg',2),
('gael','matias','gallegos','leon','matiasLeon@gmail.com','9955989001',
'$2a$10$hU4EoWhelDZtFEOuo5HOueIvAJqNz8Hwp6zt9t4GnfqsRmvi6x1k2',
'1634342801933_perfil_.jpg',1),

/*insertar tabla carrito opcional*/
