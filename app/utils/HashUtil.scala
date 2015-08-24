package utils

import com.roundeights.hasher.Implicits._
import play.api.Play

object HashUtil {
   def main(args: Array[String]) {
      if (args.length == 2)
         println("Hashed Text:" + hashWithSalt(args(0), args(1)))
   }

   def hash(text: String) = {
      val salt = Play.current.configuration.getString("security.md5.salt").getOrElse("")
      hashWithSalt(text, salt)
   }

   private def hashWithSalt(text: String, salt: String) = {
      text.salt(salt).md5.hex
   }
}
