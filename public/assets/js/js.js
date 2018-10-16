console.log("yeboi");

function selectedOptions(){
  const selected = document.querySelectorAll('.questionHolder option:checked');
  // dit is van internet maar wel wat aangepast.
  const values = Array.from(selected).map((el) => el.getAttribute('data-weight'));
}


// Maak dit functie
function get_weight() {
  var get_weight = document.querySelectorAll('.questionHolder option:checked');
  var total_weight = 0;
  for (var i = 0; i < get_weight.length; i++) {
    let weight = get_weight[i].getAttribute('data-weight');
    var to_number = parseInt(weight, 10);
    total_weight += to_number;
  }
  get_Risk(total_weight,0);

}

// get_weight();


function get_Risk(X,Y){
  var risk = Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + X ) ) ) * 100000000 ).toFixed( Y ) );
  animateValue('riskPlace',0,risk,1000);
  return risk;
}

// Animation gewoon an webs niet opnieuw het wiel
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current + "%";
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
