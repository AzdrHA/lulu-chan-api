Enter password: 
-- MariaDB dump 10.19  Distrib 10.6.5-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: luluchan
-- ------------------------------------------------------
-- Server version	10.6.5-MariaDB-1:10.6.5+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lulu_client`
--

DROP TABLE IF EXISTS `lulu_client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_client` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientId` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` enum('-1','0','1','2','3','4','5') NOT NULL DEFAULT '0',
  `status` enum('online','offline','idle','dnd','invisible') NOT NULL DEFAULT 'idle',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_6275daf03df27d041132cc4132` (`clientId`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_client`
--

LOCK TABLES `lulu_client` WRITE;
/*!40000 ALTER TABLE `lulu_client` DISABLE KEYS */;
INSERT INTO `lulu_client` VALUES (1,'767824187779710986','Heir to the throne of the peasantry','0','idle'),(2,'578907743122096148','Heir to the throne of the peasantry','0','idle');
/*!40000 ALTER TABLE `lulu_client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_command`
--

DROP TABLE IF EXISTS `lulu_command`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_command` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `visible` tinyint(4) NOT NULL DEFAULT 1,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `categoryId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_0bcbe9d13eb5060238f0dc4dc4` (`name`),
  KEY `FK_52279a06232325b02a69c9f7af3` (`categoryId`),
  CONSTRAINT `FK_52279a06232325b02a69c9f7af3` FOREIGN KEY (`categoryId`) REFERENCES `lulu_command_category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_command`
--

LOCK TABLES `lulu_command` WRITE;
/*!40000 ALTER TABLE `lulu_command` DISABLE KEYS */;
INSERT INTO `lulu_command` VALUES (1,'blush',1,'2022-01-22 18:02:01.157687','2022-01-22 18:02:01.157687',1),(2,'bullshit',1,'2022-01-22 18:02:01.162800','2022-01-22 18:02:01.162800',1),(3,'cry',1,'2022-01-22 18:02:01.167820','2022-01-22 18:02:01.167820',1),(4,'happy',1,'2022-01-22 18:02:01.172285','2022-01-22 18:02:01.172285',1),(5,'laugh',1,'2022-01-22 18:02:09.944111','2022-01-22 18:02:09.944111',1),(6,'nom',1,'2022-01-22 18:02:16.489037','2022-01-22 18:02:16.489037',1),(7,'nyan',1,'2022-01-22 18:02:25.095436','2022-01-22 18:02:25.095436',1),(8,'rage',1,'2022-01-22 18:02:36.131002','2022-01-22 18:02:36.131002',1),(9,'shrug',1,'2022-01-22 18:02:44.221973','2022-01-22 18:02:44.221973',1),(10,'shy',1,'2022-01-22 18:02:51.273599','2022-01-22 18:02:51.273599',1),(11,'sip',1,'2022-01-22 18:02:59.075193','2022-01-22 18:02:59.075193',1),(12,'sleep',1,'2022-01-22 18:03:11.445912','2022-01-22 18:03:11.445912',1),(13,'smug',1,'2022-01-22 18:03:33.013777','2022-01-22 18:03:33.013777',1),(14,'think',1,'2022-01-22 18:03:40.873601','2022-01-22 18:03:40.873601',1),(15,'baka',1,'2022-01-22 18:06:30.047415','2022-01-22 18:06:30.047415',2),(16,'bang',1,'2022-01-22 18:07:02.557278','2022-01-22 18:07:02.557278',2),(17,'bite',1,'2022-01-22 18:07:11.688829','2022-01-22 18:07:11.688829',2),(18,'bleh',1,'2022-01-22 18:07:30.468977','2022-01-22 18:07:30.468977',2),(19,'bless',1,'2022-01-22 18:08:30.252820','2022-01-22 18:08:30.252820',2),(20,'burn',1,'2022-01-22 18:12:47.439173','2022-01-22 18:12:47.439173',2),(21,'cuddle',1,'2022-01-22 18:13:07.802441','2022-01-22 18:13:07.802441',2),(22,'feed',1,'2022-01-22 18:16:22.108637','2022-01-22 18:16:22.108637',2),(23,'greet',1,'2022-01-22 18:17:09.597935','2022-01-22 18:17:09.597935',2),(24,'hit',1,'2022-01-22 18:17:37.646285','2022-01-22 18:17:37.646285',2),(25,'hug',1,'2022-01-22 18:17:44.749224','2022-01-22 18:17:44.749224',2),(26,'karma',1,'2022-01-22 18:17:52.789838','2022-01-22 18:17:52.789838',2),(27,'kiss',1,'2022-01-22 18:18:08.216672','2022-01-22 18:18:08.216672',2),(28,'lick',1,'2022-01-22 18:23:28.290162','2022-01-22 18:23:28.290162',2),(29,'naruto',1,'2022-01-22 18:23:55.435168','2022-01-22 18:23:55.435168',2),(30,'pat',1,'2022-01-22 18:24:22.341011','2022-01-22 18:24:22.341011',2),(31,'poke',1,'2022-01-22 18:24:30.641022','2022-01-22 18:24:30.641022',2),(32,'pout',1,'2022-01-22 18:24:43.419101','2022-01-22 18:24:43.419101',2),(33,'punch',1,'2022-01-22 18:26:00.317069','2022-01-22 18:26:00.317069',2),(34,'push',1,'2022-01-22 18:26:09.512782','2022-01-22 18:26:09.512782',2),(35,'slap',1,'2022-01-22 18:26:19.093965','2022-01-22 18:26:19.093965',2),(36,'tickle',1,'2022-01-22 18:26:36.867508','2022-01-22 18:26:36.867508',2),(37,'wasted',1,'2022-01-22 18:26:48.510964','2022-01-22 18:26:48.510964',2),(38,'wink',1,'2022-01-22 18:26:57.494612','2022-01-22 18:26:57.494612',2),(39,'ahegaoreal',1,'2022-01-22 18:30:40.570688','2022-01-22 18:35:10.225880',4),(40,'anal',1,'2022-01-22 18:30:55.683530','2022-01-22 18:30:55.683530',4),(41,'ass',1,'2022-01-22 18:31:03.745727','2022-01-22 18:31:03.745727',4),(42,'bdsm',1,'2022-01-22 18:31:12.494555','2022-01-22 18:31:12.494555',4),(43,'bigtits',1,'2022-01-22 18:31:32.080278','2022-01-22 18:31:32.080278',4),(44,'bixexy',1,'2022-01-22 18:31:57.413598','2022-01-22 18:31:57.413598',4),(45,'bondage',1,'2022-01-22 18:32:08.688465','2022-01-22 18:32:08.688465',4),(46,'feet',1,'2022-01-22 18:32:15.869505','2022-01-22 18:32:15.869505',4),(47,'fnude',1,'2022-01-22 18:32:33.188090','2022-01-22 18:32:33.188090',4),(48,'gay',1,'2022-01-22 18:32:41.246809','2022-01-22 18:32:41.246809',4),(49,'lesbian',1,'2022-01-22 18:32:51.279708','2022-01-22 18:32:51.279708',4),(50,'lingerie',1,'2022-01-22 18:33:02.986886','2022-01-22 18:33:02.986886',4),(51,'mnude',1,'2022-01-22 18:33:10.495575','2022-01-22 18:33:10.495575',4),(52,'pee',1,'2022-01-22 18:33:20.675087','2022-01-22 18:33:20.675087',4),(53,'pussy',1,'2022-01-22 18:33:27.875998','2022-01-22 18:33:27.875998',4),(54,'smalltits',1,'2022-01-22 18:33:48.005203','2022-01-22 18:33:48.005203',4),(55,'swimsuit',1,'2022-01-22 18:33:58.153573','2022-01-22 18:33:58.153573',4),(56,'toys',1,'2022-01-22 18:34:05.257404','2022-01-22 18:34:05.257404',4),(57,'ahegao',1,'2022-01-22 18:35:00.031164','2022-01-22 18:35:00.031164',5),(58,'chiisai',1,'2022-01-22 18:35:22.013871','2022-01-22 18:35:22.013871',5),(59,'futanari',1,'2022-01-22 18:36:29.392306','2022-01-22 18:36:29.392306',5),(60,'hanal',1,'2022-01-22 18:36:37.003108','2022-01-22 18:36:37.003108',5),(61,'hboobs',1,'2022-01-22 18:36:45.562461','2022-01-22 18:36:45.562461',5),(62,'hsolo',1,'2022-01-22 18:39:25.007891','2022-01-22 18:39:30.194230',5),(63,'hswimsuit',1,'2022-01-22 18:40:05.390465','2022-01-22 18:40:05.390465',5),(64,'keta',1,'2022-01-22 18:40:13.676748','2022-01-22 18:40:13.676748',5),(65,'neko',1,'2022-01-22 18:40:24.716286','2022-01-22 18:40:24.716286',5),(66,'tentai',1,'2022-01-22 18:40:33.300033','2022-01-22 18:40:33.300033',5),(67,'yaoi',1,'2022-01-22 18:40:42.697759','2022-01-22 18:40:42.697759',5),(68,'yuri',1,'2022-01-22 18:40:53.847392','2022-01-22 18:40:53.847392',5);
/*!40000 ALTER TABLE `lulu_command` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_command_category`
--

DROP TABLE IF EXISTS `lulu_command_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_command_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `nsfw` tinyint(4) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9411c98dad9cc0351c0bc3f933` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_command_category`
--

LOCK TABLES `lulu_command_category` WRITE;
/*!40000 ALTER TABLE `lulu_command_category` DISABLE KEYS */;
INSERT INTO `lulu_command_category` VALUES (1,'emote',0,'2022-01-22 17:51:12.115778','2022-01-22 17:51:12.115778'),(2,'reaction',0,'2022-01-22 17:51:12.124995','2022-01-22 17:51:12.124995'),(3,'image',0,'2022-01-22 17:51:12.133946','2022-01-22 17:51:12.133946'),(4,'porn',1,'2022-01-22 17:51:12.141492','2022-01-22 17:51:12.141492'),(5,'hentai',1,'2022-01-22 17:51:12.148586','2022-01-22 17:51:12.148586');
/*!40000 ALTER TABLE `lulu_command_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_guild`
--

DROP TABLE IF EXISTS `lulu_guild`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_guild` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `guild` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `settingId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9c52b23589089b4007a8fbc5bf` (`guild`),
  UNIQUE KEY `REL_0d5ba335a2d89e6576498e2f74` (`settingId`),
  CONSTRAINT `FK_0d5ba335a2d89e6576498e2f740` FOREIGN KEY (`settingId`) REFERENCES `lulu_guild_setting` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_guild`
--

LOCK TABLES `lulu_guild` WRITE;
/*!40000 ALTER TABLE `lulu_guild` DISABLE KEYS */;
INSERT INTO `lulu_guild` VALUES (1,'587424467538673664','2022-01-22 17:52:28.556519','2022-01-22 17:52:28.556519',1);
/*!40000 ALTER TABLE `lulu_guild` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_guild_setting`
--

DROP TABLE IF EXISTS `lulu_guild_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_guild_setting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prefix` varchar(255) NOT NULL DEFAULT 'l!',
  `color` varchar(255) NOT NULL DEFAULT '#67acbb',
  `language` varchar(255) NOT NULL DEFAULT 'en',
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_guild_setting`
--

LOCK TABLES `lulu_guild_setting` WRITE;
/*!40000 ALTER TABLE `lulu_guild_setting` DISABLE KEYS */;
INSERT INTO `lulu_guild_setting` VALUES (1,'l!','#67acbb','en','2022-01-22 17:52:48.399933','2022-01-22 17:52:48.399933');
/*!40000 ALTER TABLE `lulu_guild_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_guild_warn`
--

DROP TABLE IF EXISTS `lulu_guild_warn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_guild_warn` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `reason` varchar(255) NOT NULL,
  `deleteAt` datetime(6) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `moderatorId` int(11) DEFAULT NULL,
  `guildId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_78a1a56e628209fb3b56b6e358f` (`userId`),
  KEY `FK_98a0e2fac6602f7abe9debe22dc` (`moderatorId`),
  KEY `FK_719c4e1c9328209f646c3f12a1d` (`guildId`),
  CONSTRAINT `FK_719c4e1c9328209f646c3f12a1d` FOREIGN KEY (`guildId`) REFERENCES `lulu_guild` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_78a1a56e628209fb3b56b6e358f` FOREIGN KEY (`userId`) REFERENCES `lulu_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_98a0e2fac6602f7abe9debe22dc` FOREIGN KEY (`moderatorId`) REFERENCES `lulu_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_guild_warn`
--

LOCK TABLES `lulu_guild_warn` WRITE;
/*!40000 ALTER TABLE `lulu_guild_warn` DISABLE KEYS */;
/*!40000 ALTER TABLE `lulu_guild_warn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_image`
--

DROP TABLE IF EXISTS `lulu_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `size` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `formatId` int(11) DEFAULT NULL,
  `commandId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_3443b24859e65f4422e358343b3` (`formatId`),
  KEY `FK_7f72894cb9239308871bb6790f0` (`commandId`),
  CONSTRAINT `FK_3443b24859e65f4422e358343b3` FOREIGN KEY (`formatId`) REFERENCES `lulu_image_format` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_7f72894cb9239308871bb6790f0` FOREIGN KEY (`commandId`) REFERENCES `lulu_command` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_image`
--

LOCK TABLES `lulu_image` WRITE;
/*!40000 ALTER TABLE `lulu_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `lulu_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_image_format`
--

DROP TABLE IF EXISTS `lulu_image_format`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_image_format` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mimetype` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e14d16ebd532d554f98189a9b5` (`mimetype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_image_format`
--

LOCK TABLES `lulu_image_format` WRITE;
/*!40000 ALTER TABLE `lulu_image_format` DISABLE KEYS */;
/*!40000 ALTER TABLE `lulu_image_format` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_token`
--

DROP TABLE IF EXISTS `lulu_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_token` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_token`
--

LOCK TABLES `lulu_token` WRITE;
/*!40000 ALTER TABLE `lulu_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `lulu_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_user`
--

DROP TABLE IF EXISTS `lulu_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_95ec0d728248fa70ec28c743fd` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_user`
--

LOCK TABLES `lulu_user` WRITE;
/*!40000 ALTER TABLE `lulu_user` DISABLE KEYS */;
INSERT INTO `lulu_user` VALUES (1,'311874717504110593','2022-01-22 17:59:36.525747','2022-01-22 17:59:36.525747'),(2,'393835722454597633','2022-01-22 17:59:45.818993','2022-01-22 17:59:45.818993'),(3,'649352959364169739','2022-01-22 17:59:53.695041','2022-01-22 17:59:53.695041');
/*!40000 ALTER TABLE `lulu_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lulu_user_blacklist`
--

DROP TABLE IF EXISTS `lulu_user_blacklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lulu_user_blacklist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reason` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updateAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `removeAt` datetime(6) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `moderatorId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_00635fe85224647aa8edbe62d9d` (`userId`),
  KEY `FK_9c9f525647c2a61a008683217f9` (`moderatorId`),
  CONSTRAINT `FK_00635fe85224647aa8edbe62d9d` FOREIGN KEY (`userId`) REFERENCES `lulu_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_9c9f525647c2a61a008683217f9` FOREIGN KEY (`moderatorId`) REFERENCES `lulu_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lulu_user_blacklist`
--

LOCK TABLES `lulu_user_blacklist` WRITE;
/*!40000 ALTER TABLE `lulu_user_blacklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `lulu_user_blacklist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-22 18:41:25
