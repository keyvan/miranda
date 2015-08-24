CREATE TABLE `episode` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL,
  `summary` varchar(500) NOT NULL,
  `body` mediumtext NOT NULL,
  `slug` varchar(300) NOT NULL,
  `is_published` tinyint(1) NOT NULL,
  `views` bigint(11) unsigned NOT NULL DEFAULT 0,
  `created` datetime  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`),
  KEY `created` (`created`),
  KEY `timestamp` (`timestamp`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;