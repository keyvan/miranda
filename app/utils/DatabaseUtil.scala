package utils

import scala.slick.driver.MySQLDriver.simple._
import play.api.Play._

object DatabaseUtil {
   lazy val default = Database.forDataSource(play.api.db.DB.getDataSource("default"))
}