package models

import org.joda.time.DateTime
import slick.driver.MySQLDriver.api._
import com.github.tototoshi.slick.MySQLJodaSupport._
import slick.lifted.ProvenShape

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

   def id: Rep[Long] = column[Long]("id", O.PrimaryKey, O.AutoInc)
   def episodeNumber: Rep[Long] = column[Long]("episode_number")
   def title: Rep[String] = column[String]("title")
   def summary: Rep[String] = column[String]("summary")
   def body: Rep[String] = column[String]("body")
   def slug: Rep[String] = column[String]("slug")
   def downloadUrl: Rep[String] = column[String]("download_url")
   def isPublished: Rep[Boolean] = column[Boolean]("is_published")
   def views: Rep[Long] = column[Long]("views")
   def createdDate: Rep[DateTime] = column[DateTime]("created")

   def * : ProvenShape[Episode] =
      (id, episodeNumber, title, summary, body, slug, downloadUrl, isPublished, views, createdDate)<>(Episode.tupled, Episode.unapply)
}

object Episodes {
   val query = TableQuery[Episodes]
}
