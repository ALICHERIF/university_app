// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "materialize"
import "controllers"
import "jquery"
//import "custom/main"
import "./main.js"
//= require materialize
//= require jquery
//= require rails-ujs

//= require materialize
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {
  $('.dropdown-trigger').dropdown();
    $('#fade-out-target').fadeOut(4000);
});
