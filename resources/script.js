var numberOfButtons = document.querySelectorAll(".drum-button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".drum-button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
  });
}