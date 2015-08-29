package controllers

import logic.EpisodeLogic
import play.api.mvc._

class Feed extends Controller {

  def rss = Action {
    Ok(views.html.home("Your new application is ready.", EpisodeLogic.getTopEpisode, EpisodeLogic.getRecentEpisodes(3)))
  }

  def itunes = Action {
    Redirect("http://www.google.com?fornow=true", 302)
  }
}
