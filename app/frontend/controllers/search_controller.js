import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  connect() {
    this.element.setAttribute("data-action", "keyup->search#search")
  }

  search(event) {
    console.log(event.target.value)
  }
}
