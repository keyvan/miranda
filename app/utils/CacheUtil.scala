package utils

import models.Episode
import org.joda.time.DateTime

object CacheUtil {
   var episodeDataCache: Option[(DateTime, List[Episode])] = None

   def checkEpisodeData = {
      if (episodeDataCache.isDefined)
         episodeDataCache.get._1.isAfter(TimeUtil.utcNow.minusMinutes(5))
      else
         false
   }

   def setEpisodeData(episodeData: List[Episode]) = {
      synchronized {
         val newCache = episodeDataCache.getOrElse((TimeUtil.utcNow, episodeData))
         episodeDataCache = Some(newCache)
      }
   }

   def getEpisodeData: Option[List[Episode]] = {
      if (episodeDataCache.isDefined)
         Some(episodeDataCache.get._2)
      else
         None
   }
}
