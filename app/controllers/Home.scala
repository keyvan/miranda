package controllers

import play.api._
import play.api.mvc._

class Home extends Controller {

  def index = Action {
    Ok(views.html.home("Your new application is ready."))
  }
}
