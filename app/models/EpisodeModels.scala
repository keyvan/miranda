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
                     fileLength: Long,
                     largeImageUrl: String,
                     smallImageUrl: String,
                     duration: String,
                     isPublished: Boolean,
                     views: Long,
                     authorId: Long,
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

   def fileLength: Rep[Long] = column[Long]("file_length")

   def largeImageUrl: Rep[String] = column[String]("large_image_url")

   def smallImageUrl: Rep[String] = column[String]("small_image_url")

   def duration: Rep[String] = column[String]("duration")

   def isPublished: Rep[Boolean] = column[Boolean]("is_published")

   def views: Rep[Long] = column[Long]("views")

   def authorId: Rep[Long] = column[Long]("author_id")

   def createdDate: Rep[DateTime] = column[DateTime]("created")

   def * : ProvenShape[Episode] =
      (id, episodeNumber, title, summary, body, slug, downloadUrl, fileLength, largeImageUrl, smallImageUrl, duration, isPublished, views, authorId, createdDate) <>(Episode.tupled, Episode.unapply)
}

object Episodes {
   val query = TableQuery[Episodes]
}
