name := """play-scala"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.6"

val slick = "com.typesafe.slick" %% "slick" % "3.0.2"
val nycto_hasher = "com.roundeights" %% "hasher" % "1.0.0"
val mysql = "mysql" % "mysql-connector-java" % "5.1.36"
val joda = "joda-time" % "joda-time" % "2.7"
val joda_convert = "org.joda" % "joda-convert" % "1.7"
val joda_mapper = "com.github.tototoshi" %% "slick-joda-mapper" % "2.0.0"

libraryDependencies ++= Seq(
   jdbc,
   cache,
   ws,
   specs2 % Test,
   mysql,
   slick,
   nycto_hasher,
   joda,
   joda_convert,
   joda_mapper
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
resolvers += "RoundEights" at "http://maven.spikemark.net/roundeights"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator


fork in run := true