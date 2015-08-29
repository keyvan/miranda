package logic

import models._
import utils.CacheUtil
import scala.concurrent.duration._
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Await
import slick.driver.MySQLDriver.api._
import play.api.Play.current

object EpisodeLogic {

   def getEpisode(slug: String) = {
      getAllEpisodes.filter(e => e.slug == slug)
   }

   def getTopEpisode = {
      getAllEpisodes.filter(e => e.isPublished).last
   }

   def getRecentEpisodes(count: Int) = {
      getAllEpisodes.filter(e => e.isPublished).takeRight(count)
   }

   def getAllEpisodes = {
      if (CacheUtil.checkEpisodeData)
         CacheUtil.getEpisodeData.getOrElse(Nil)
      else {
         val data = getAllEpisodesFromDatabase
         CacheUtil.setEpisodeData(data)
         data
      }
   }

   private def getAllEpisodesFromDatabase = {
      val DB = Database.forDataSource(play.api.db.DB.getDataSource("default"))

      Await.result(DB.run(
         Episodes.query.result
      ), 30 seconds).map(x =>
         Episode(x.id, x.episodeNumber, x.title, x.summary, x.body, x.slug, x.downloadUrl, x.isPublished, x.views, x.createdDate)
         ).toList
   }
}
