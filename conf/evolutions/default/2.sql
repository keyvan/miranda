# episode schema

# --- !Ups

CREATE TABLE `episode` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `episode_number` bigint(11) unsigned NOT NULL DEFAULT 1,
  `title` varchar(300) NOT NULL,
  `summary` varchar(500) NOT NULL,
  `body` mediumtext NOT NULL,
  `slug` varchar(300) NOT NULL,
  `download_url` varchar(500) NOT NULL,
  `file_length` bigint(11) unsigned  NOT NULL,
  `large_image_url` varchar(500) NOT NULL,
  `small_image_url` varchar(500) NOT NULL,
  `duration` varchar(500) NOT NULL,
  `is_published` tinyint(1) NOT NULL,
  `views` bigint(11) unsigned NOT NULL DEFAULT 0,
  `author_id` bigint(11) unsigned NOT NULL,
  `created` datetime  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`),
  KEY `created` (`created`),
  KEY `timestamp` (`timestamp`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

# --- !Downs

DROP TABLE `episode`;