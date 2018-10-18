function get_weight() {
  var get_weight = document.querySelectorAll('.questionHolder option:checked');
  console.log(get_weight);
  var total_weight = 0;

  for (var i = 0; i < get_weight.length; i++) {
    var weight = get_weight[i].getAttribute('data-weight');
    var to_number = parseFloat(weight, 10);
    total_weight += to_number;
    var total_weight = Math.ceil(total_weight);;
    // var total_weight = total_weight;
    // Math.ceil(total_weight);
    get_high_risk_factor(to_number);
  }
  get_risk(total_weight, 0);
}

function get_risk(X, Y) {
  var risk = Number((1 / (1 + Math.exp(-1 * (-8.57219 + X))) * 100).toFixed(Y));

  if (risk > 0) {
    animate_value('riskPlace', 0, risk, 1000);
  } else {
    animate_value('riskPlace', 0, 1, 1000);
  }
  return risk;
}

function get_high_risk_factor() {

}

// Animation gewoon an webs niet opnieuw het wiel
function animate_value(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function() {
    current += increment;
    obj.innerHTML = current + "%";
    if (current == end) {
      clearInterval(timer);
      percent_color(current)
    }

  }, stepTime);
}

function percent_color(percent) {
  console.log(percent);
  var risk_place = document.getElementById('riskPlace');
  var riskValue = document.getElementById('riskValue');
  var red = "#ec3b51";
  var blue = "#259E89";
  if (percent > 45) {
    risk_place.style.color = red
    riskValue.style.color = red
    loadbar(percent, red)

    riskValue.innerHTML = "High Risk"
  } else {
    risk_place.style.color = blue
    riskValue.style.color = blue
    loadbar(percent, blue)

    riskValue.innerHTML = "Low Risk"
  }
}

function loadbar(value, color) {
  progress = document.getElementById('progress');
  progress_header = document.querySelector('#progress > span');

  progress.style.height = "" + value + "%" + "";
  progress_header.innerHTML = value + "%";

  progress.style.background = color;
  progress_header.style.color = color;
}

// get_weight()
