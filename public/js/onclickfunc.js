document.addEventListener("DOMContentLoaded", function() {
    var lastButtonClicked = localStorage.getItem('lastButtonClicked');
    if (lastButtonClicked) {
      var logsSection = document.getElementById("logs");
      var logMessage = document.createElement("p");
      logMessage.textContent = "הפרק אהחרון שנצפה: " + lastButtonClicked;
      logsSection.appendChild(logMessage);
    }
  });

  function recordButtonClick(event, element) {
    event.preventDefault();
    var buttonText = element.innerText;
    var buttonUrl = element.href;
    var logsSection = document.getElementById("logs");
    var logMessage = document.createElement("p");
    logMessage.textContent = "Clicked button text: " + buttonText + ", URL: " + buttonUrl;
    logsSection.appendChild(logMessage);
    localStorage.setItem('lastButtonClicked', buttonText);
    window.location.href = buttonUrl;
  }