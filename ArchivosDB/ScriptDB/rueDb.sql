-- MySQL dump 10.13  Distrib 8.0.26, for macos10.15 (x86_64)
--
-- Host: localhost    Database: rueDb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carritos`
--

DROP TABLE IF EXISTS `carritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carritos` (
  `carrito_id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `estatus` tinyint NOT NULL DEFAULT '1',
  `cantidad_items` int NOT NULL,
  `precio_total` float NOT NULL,
  PRIMARY KEY (`carrito_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `carritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritos`
--

LOCK TABLES `carritos` WRITE;
/*!40000 ALTER TABLE `carritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `producto_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  `descuento` float DEFAULT NULL,
  `tipo_comida_id` int DEFAULT NULL,
  `tipo_categoria_id` int DEFAULT NULL,
  `estatus` tinyint NOT NULL DEFAULT '1',
  `descripcion` varchar(500) NOT NULL,
  `foto` varchar(100) NOT NULL,
  PRIMARY KEY (`producto_id`),
  KEY `tipo_comida_id` (`tipo_comida_id`),
  KEY `tipo_categoria_id` (`tipo_categoria_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`tipo_comida_id`) REFERENCES `tipo_comidas` (`tipo_comida_id`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`tipo_categoria_id`) REFERENCES `tipo_categorias` (`tipo_categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Orden Taco fundido',45,0,1,2,1,'Elige la carne que te gusta con queso fundido, chile poblano, tortilla de maíz y la salsa especial de Chiplotle','tacofundido.jpg'),(2,'Burrito',40,0,1,2,1,'Tortilla de harina de trigo con frijoles, arroz, cebolla, la carne que mas te gusta y queso fundido','burrito.jpg'),(3,'Flautas',40,0,1,2,1,'6 rollitos de tortilla de maíz con pollo bañados en crema, con aguacate, queso fresco, lechuga y jitomate','dorados.jpg'),(4,'Sopes',40,0,1,2,1,'Sope de maíz con pollo bañados en crema, con aguacate, queso fresco y lechuga','sopes.jpg'),(5,'Keto-taco',40,15,1,1,1,'Tortilla de queso fundido con la carne que te gusta acompañados de cebolla, cilantro, tomate y aguacate','taco_keto.jpg'),(6,'Torta Cubana',40,20,1,1,1,'Milaneza, chorizo, huevo, jamon y quesos fundido, acompañada con nuestra salsa especial de chipotle','torta_cubana.jpg'),(7,'Taco de Pescado',40,5,1,1,1,'Tortilla de maíz, con pescado empanizado, col, jitomate, aguacate, cilantro y crema','taco_pescado.jpg'),(8,'Taco de Camaron',40,2,1,1,1,'Tortilla de maíz, con camarones empanizados, col, jitomate, aguacate, cilantro y crema ','taco_camaron.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_categorias`
--

DROP TABLE IF EXISTS `tipo_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_categorias` (
  `tipo_categoria_id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `estatus` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`tipo_categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_categorias`
--

LOCK TABLES `tipo_categorias` WRITE;
/*!40000 ALTER TABLE `tipo_categorias` DISABLE KEYS */;
INSERT INTO `tipo_categorias` VALUES (1,'En oferta',1),(2,'Utimos agregados',1);
/*!40000 ALTER TABLE `tipo_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_comidas`
--

DROP TABLE IF EXISTS `tipo_comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_comidas` (
  `tipo_comida_id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `estatus` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`tipo_comida_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_comidas`
--

LOCK TABLES `tipo_comidas` WRITE;
/*!40000 ALTER TABLE `tipo_comidas` DISABLE KEYS */;
INSERT INTO `tipo_comidas` VALUES (1,'Mexicana',1),(2,'China',1),(3,'Japonesa',1),(4,'Francesa',1),(5,'Italiana',1),(6,'Vegetariana',1);
/*!40000 ALTER TABLE `tipo_comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_usuarios`
--

DROP TABLE IF EXISTS `tipo_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_usuarios` (
  `tipo_usuario_id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(50) NOT NULL,
  `estatus` tinyint NOT NULL DEFAULT '1',
  PRIMARY KEY (`tipo_usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuarios`
--

LOCK TABLES `tipo_usuarios` WRITE;
/*!40000 ALTER TABLE `tipo_usuarios` DISABLE KEYS */;
INSERT INTO `tipo_usuarios` VALUES (1,'vendedor',1),(2,'cliente',1);
/*!40000 ALTER TABLE `tipo_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nombre_primero` varchar(50) NOT NULL,
  `nombre_segundo` varchar(50) DEFAULT NULL,
  `apellidoP` varchar(50) NOT NULL,
  `apellidoM` varchar(50) DEFAULT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `passwords` varchar(120) NOT NULL,
  `estatus` tinyint NOT NULL DEFAULT '1',
  `foto` varchar(100) NOT NULL,
  `tipo_usuario_id` int DEFAULT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `correo` (`correo`),
  KEY `tipo_usuario_id` (`tipo_usuario_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`tipo_usuario_id`) REFERENCES `tipo_usuarios` (`tipo_usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'luis','jesus','villegas','castillo','lc77278@gmail.com','9932245543','$2a$10$Y.0wfrCAQUSltTlqLCACTe.6p.NkFgUxQcxx7tyhPUjVk88Gs8pPO',1,'jaime.jpg',1),(2,'andrea','jasmin','alegria','alegria','andrea@gmail.com','9924550110','$2a$10$iUirrwo1RH5SflcMCWbCleq1lON/Bv7/2rrugD7qDyauVbdzC1hzq',1,'avatar.jpg',2),(3,'lua','regina','castillo','negrin','luaRegina@gmail.com','9934550910','$2a$10$2wJprZBmAT1ntD3.id0W9OpKCOCQtqO4XwzFBhnEnbB33d3ZZwvWu',1,'avatar.jpg',2),(4,'alejandra','','perez','perez','alePerez123@gmail.com','9930120223','$2a$10$7.rzPUA1CMnr.xF0bpciSOFp5gloLQbI0ykIsurz1W0498uUA.xG.',1,'avatar.jpg',2),(5,'gael','matias','gallegos','leon','matiasLeon@gmail.com','9955989001','$2a$10$hU4EoWhelDZtFEOuo5HOueIvAJqNz8Hwp6zt9t4GnfqsRmvi6x1k2',1,'jaime.jpg',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'rueDb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-19 17:20:30
