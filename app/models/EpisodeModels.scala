package models

import org.joda.time.DateTime
import scala.slick.driver.MySQLDriver.simple._
import com.github.tototoshi.slick.MySQLJodaSupport._

case class Episode(
                     id: Long,
                     episodeNumber: Long,
                     title: String,
                     summary: String,
                     body: String,
                     slug: String,
                     downloadUrl: String,
                     isPublished: Boolean,
                     views: Long,
                     createdDate: DateTime
                     )

class Episodes(tag: Tag) extends Table[Episode](tag, "episode") {
   def * = (id, episodeNumber, title, summary, body, slug, downloadUrl, isPublished, views, createdDate) <>(Episode.tupled, Episode.unapply)

   def ? = (id.?, episodeNumber.?, title.?, summary.?, body.?, slug.?, downloadUrl.?, isPublished.?, views.?, createdDate.?).shaped.<>({ r => import r._; _1.map(_ => Episode.tupled(_1.get, _2.get, _3.get, _4.get, _5.get, _6.get, _7.get, _8.get, _9.get, _10.get)) }, (_: Any) => throw new Exception("Inserting into ? projection not supported."))

   def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

   def episodeNumber = column[Long]("episode_number")

   def title = column[String]("title")

   def summary = column[String]("summary")

   def body = column[String]("body")

   def slug = column[String]("slug")

   def downloadUrl = column[String]("download_url")

   def isPublished = column[Boolean]("isPublished")

   def views = column[Long]("views")

   def createdDate = column[DateTime]("created")
}
