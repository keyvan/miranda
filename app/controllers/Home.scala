package controllers

import logic.EpisodeLogic
import play.api.mvc._

class Home extends Controller {

  def index = Action {
    Ok(views.html.home("Keyvan.FM", EpisodeLogic.getTopEpisode, EpisodeLogic.getRecentEpisodes(3)))
  }
}
