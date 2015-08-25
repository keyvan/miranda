package models

import org.joda.time.DateTime
import scala.slick.driver.MySQLDriver.simple._
import com.github.tototoshi.slick.H2JodaSupport._

case class Episode(
                     id: Long,
                     title: String,
                     summary: String,
                     body: String,
                     slug: String,
                     isPublished: Boolean,
                     views: Long,
                     createdDate: DateTime
                     )

class Episodes(tag: Tag) extends Table[Episode](tag, "episode") {
   def * = (id, title, summary, body, slug, isPublished, views, createdDate) <>(Episode.tupled, Episode.unapply)

   //def ? = (id.?, title.?, summary.?, body.?, slug.?, isPublished.?, views.?, createdDate.?).shaped.<>({ r => import r._; _1.map(_ => Episode.tupled(_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get, _8.get)) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

   def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

   def title = column[String]("title")

   def summary = column[String]("summary")

   def body = column[String]("body")

   def slug = column[String]("slug")

   def isPublished = column[Boolean]("isPublished")

   def views = column[Long]("views")

   def createdDate = column[DateTime]("created")
}
