package controllers

import play.api.mvc._

class Episode extends Controller {

  def view(id: Int) = Action {
    Ok(views.html.home("Your new application is ready."))
  }
}
