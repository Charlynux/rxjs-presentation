function renderList(elements) {
  return "<ul>"
      + elements.map(element => "<li>" + element + "</li>").join("")
      + "</ul>";
}

const COLORS = ["red", "blue", "yellow", "orange", "green", "purple"];
function color(number) {
  return COLORS[number % COLORS.length];
}

function renderColoredList(numbers) {
  return "<ul class='color-list'>"
      + numbers.map(n => "<li style='background-color:" + color(n) + "'></li>").join("")
      + "</ul>";
}

const WS_URL = "ws:\\websockets-charlynux.rhcloud.com:8000";
