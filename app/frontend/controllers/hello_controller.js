import { Controller } from "@hotwired/stimulus" 

export default class extends Controller {

  connect() { // => «connect» method is similar to initialize method in a ruby-class
    console.log("Hello, Stimulus!")
  }

  static targets = [ "name", "output" ]; // => «static targets» is a special property that defines the targets of the controller

  greet() { // => doesnt matter for now, but later for the view
    this.outputTarget.textContent = `Hello, ${this.nameTarget.value}!`;
  }
}
