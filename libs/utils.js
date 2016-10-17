/**
 * Return true if 'number' is even, false if not.
 */
function isEven(number) {
  return number % 2 === 0;
}

/**
 * Return true if 'number' is odd, false if not.
 */
function isOdd(number) {
  return number % 2 !== 0;
}

/**
 * Convert a list of strings into a HTML list.
 *
 * Example :
 * ["hello", "world"]
 *  =>
 * "<ul>
 *    <li>hello</li>
 *    <li>world</li>
 * </ul>"
 */
function renderList(elements) {
  return "<ul>"
      + elements.map(element => "<li>" + element + "</li>").join("")
      + "</ul>";
}

// Color list from d3.scale.category10()
const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"];

/**
 * Convert a Number into a color.
 */
function color(number) {
  return COLORS[number % COLORS.length];
}

/**
 * Convert a list of numbers into a HTML list of 'colors'
 *
 * Example :
 * [0, 1, 2]
 *  =>
 * "<ul>
 *    <li style='background-color: red'></li>
 *    <li style='background-color: blue'></li>
 *    <li style='background-color: yellow'></li>
 * </ul>"
 */
function renderColoredList(numbers) {
  return "<ul class='color-list'>"
      + numbers.map(n => "<li style='background-color:" + color(n) + "'></li>").join("")
      + "</ul>";
}

/**
 * WebSockets server URL.
 */
const WS_URL = "ws:\\websockets-charlynux.rhcloud.com:8000";
