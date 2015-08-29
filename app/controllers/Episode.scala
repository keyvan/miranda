package controllers

import logic.EpisodeLogic
import play.api.mvc._

class Episode extends Controller {

  def view(id: Int) = Action {
    Ok(views.html.home("Keyvan.FM", EpisodeLogic.getTopEpisode, EpisodeLogic.getRecentEpisodes(3)))
  }
}
