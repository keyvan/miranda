package utils

import org.joda.time.{DateTimeZone, DateTime}

object TimeUtil {
   def utcNow: DateTime = {
      new DateTime(DateTimeZone.UTC)
   }

   def localNow: DateTime = {
      new DateTime()
   }
}
