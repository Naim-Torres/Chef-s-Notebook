-- Creación de la base de datos
drop database if exists notebookdb;
create database notebookdb;


-- Seleccionarla para usar
use notebookdb;


-- Crear la tabla de recetas
create table recipes (
	id binary(16) primary key default (uuid_to_bin(uuid())),
	name varchar(255) not null unique,
	ingredientes varchar(255) not null,
	steps TEXT not null,
	cooking_time int not null,
	img text,
	favorite bit not null
);

-- Insertar 15 registros de ejemplo
INSERT INTO recipes (name, ingredientes, steps, cooking_time, img, favorite) VALUES
('Pasta Carbonara', 'Spaghetti, huevos, panceta, parmesano, pimienta negra', '1. Cocinar spaghetti. 2. Freír panceta. 3. Mezclar huevos y parmesano. 4. Combinar todos los ingredientes.', 20, 'https://www.gourmet.cl/wp-content/uploads/2016/12/Carbonara-editada.jpg', 1),
('Curry de Pollo', 'Pollo, curry en polvo, leche de coco, cebollas, ajo', '1. Sofreír cebollas y ajo. 2. Añadir pollo y curry en polvo. 3. Verter leche de coco y cocinar a fuego lento.', 45, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXHEv6mih5K7VodCf74dRpmSWthjMrRN5dw&s', 0),
('Estofado de Res', 'Res, zanahorias, papas, cebollas, caldo de res', '1. Dorar la res. 2. Añadir verduras y caldo. 3. Cocinar a fuego lento hasta que esté tierno.', 120, null, 1),
('Salteado de Verduras', 'Brócoli, zanahorias, pimientos, salsa de soya, ajo', '1. Saltear las verduras. 2. Añadir salsa de soya y ajo. 3. Cocinar hasta que estén tiernas.', 15, 'https://kristineskitchenblog.com/wp-content/uploads/2024/01/vegetable-stir-fry-22-3.jpg', 0),
('Sopa de Tomate', 'Tomates, cebollas, ajo, albahaca, crema', '1. Sofreír cebollas y ajo. 2. Añadir tomates y albahaca. 3. Licuar y agregar crema.', 30, 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/tomato-soup-recipe.jpg', 1),
('Sándwich de Queso a la Parrilla', 'Pan, queso, mantequilla', '1. Untar mantequilla en el pan. 2. Añadir queso. 3. Tostar hasta que esté dorado.', 10, 'https://www.jocooks.com/wp-content/uploads/2024/01/grilled-cheese-1-9.jpg', 0),
('Ensalada César', 'Lechuga romana, crutones, parmesano, aderezo César', '1. Mezclar lechuga con aderezo. 2. Añadir crutones y parmesano. 3. Servir inmediatamente.', 10, 'https://itsavegworldafterall.com/wp-content/uploads/2023/04/Avocado-Caesar-Salad-FI.jpg', 1),
('Pastel de Chocolate', 'Harina, azúcar, cacao en polvo, huevos, mantequilla', '1. Mezclar ingredientes secos. 2. Añadir ingredientes húmedos. 3. Hornear a 175°C por 30 minutos.', 60, 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg', 1),
('Panqueques', 'Harina, leche, huevos, azúcar, polvo para hornear', '1. Mezclar ingredientes. 2. Verter la mezcla en una plancha caliente. 3. Voltear cuando se formen burbujas.', 20, 'https://www.allrecipes.com/thmb/FE0PiuuR0Uh06uVh1c2AsKjRGbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_002-0e249c95678f446291ebc9408ae64c05.jpg', 0),
('Tacos de Pescado', 'Pescado, tortillas, repollo, limón, cilantro', '1. Asar el pescado. 2. Armar tacos con repollo y cilantro. 3. Exprimir limón encima.', 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7BcMDtZV3BOHkqHGSZuog4-Tb5JpXadirA&s', 1),
('Tacos de Res', 'Carne molida, tortillas, lechuga, queso, salsa', '1. Cocinar la carne. 2. Armar tacos con lechuga y queso. 3. Cubrir con salsa.', 20, 'https://familiakitchen.com/wp-content/uploads/2021/01/iStock-960337396-3beef-barbacoa-tacos-e1695391119564.jpg', 0),
('Lasaña de Verduras', 'Láminas de lasaña, ricotta, espinacas, salsa marinara', '1. Colocar capas de láminas, ricotta, espinacas y salsa. 2. Hornear a 190°C por 45 minutos.', 60, null, 1),
('Pollo Alfredo', 'Fettuccine, pollo, crema, parmesano, ajo', '1. Cocinar fettuccine. 2. Sofreír pollo y ajo. 3. Añadir crema y parmesano. 4. Combinar con la pasta.', 30, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb-2E4TRtAxpHsCpXdaxHBSsHEdX_WO-tyQ&s', 1),
('Camarones al Ajillo', 'Camarones, linguine, ajo, mantequilla, vino blanco', '1. Cocinar linguine. 2. Sofreír camarones y ajo en mantequilla. 3. Añadir vino blanco y combinar con la pasta.', 25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5YdYf4Eez99z2iqRJs3AP_Fr51Yypkg9XQ&s', 0),
('Pastel de Ma