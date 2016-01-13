/*******************************************/
/*        Elektro AG Script - v-0.1        */
/* Michael Haenzi, Tim Pfister, Ivo Keller */
/*              02.11.2015                 */
/*******************************************/

$(document).on('ready', function() {
  hideAllBallons();
  ringsHide();
});

$(document).keyup(function(e) {    
  if (e.keyCode == 27) {
    hideAllBallons();
    }
});

function resetColors() {
  selectedRing1 = undefined;
  selectedRing2 = undefined;
  selectedRing3 = undefined;
  tolerance_ring = undefined;
  multiplier_ring = undefined;
}

function resetClassColor () {
  $('#selectableRing1').attr('class', 'ring selectableRing ring_standart');
  $('#selectableRing2').attr('class', 'ring selectableRing ring_standart');
  $('#selectableRing3').attr('class', 'ring selectableRing ring_standart');
  $('#multiplierRing').attr('class', 'ring ring_standart');
  $('#toleranceRing').attr('class', 'ring ring_standart');  
}

function ringsHide () {
  $('#selectableRing1').hide();
  $('#selectableRing2').hide();
  $('#selectableRing3').hide();
  $('#multiplierRing').hide();
  $('#toleranceRing').hide();
  $('#displayOhm').hide();
  $('#calcOhm').hide();
}

$('#selectRings').on('click', function () {
  hideAllBallons();
  countRings = $('#selectRings').val();
  if (countRings == 3) {
    resetClassColor();
    resetColors();
    $('#selectableRing1').show();
    $('#selectableRing2').hide();
    $('#selectableRing3').hide();
    $('#multiplierRing').show();
    $('#toleranceRing').show();
    $('#displayOhm').show();
    $('#calcOhm').show();
  } else if (countRings == 4) {
    resetClassColor();
    resetColors();
    $('#selectableRing1').show();
    $('#selectableRing2').show();
    $('#selectableRing3').hide();
    $('#multiplierRing').show();
    $('#toleranceRing').show();
    $('#displayOhm').show();
    $('#calcOhm').show();
  } else if (countRings == 5) {
    resetClassColor();
    resetColors();
    $('#selectableRing1').show();
    $('#selectableRing2').show();
    $('#selectableRing3').show();
    $('#multiplierRing').show();
    $('#toleranceRing').show();
    $('#displayOhm').show();
    $('#calcOhm').show();
  } else {
    resetClassColor();
    resetColors();
    ringsHide();
  }
});

function setColor(color) {  
  if ($(selectedRing).attr('id') == "selectableRing1") {
    selectedRing1 = color;
    $('#selectableRing1').attr('class', 'ring selectableRing ring_standart');
  } else if ($(selectedRing).attr('id') == "selectableRing2") {
    selectedRing2 = color;
    $('#selectableRing2').attr('class', 'ring selectableRing ring_standart');
  } else if ($(selectedRing).attr('id') == "selectableRing3") {
    selectedRing3 = color;
    $('#selectableRing3').attr('class', 'ring selectableRing ring_standart');
  } else if ($(selectedRing).attr('id') == "multiplierRing") {
    multiplier_ring = color;
    $('#multiplierRing').attr('class', 'ring ring_standart');
  } else {
    tolerance_ring = color;
    $('#toleranceRing').attr('class', 'ring ring_standart');  
  }
  $(selectedRing).addClass("ring_" + color);
  $('.selectableRing').hideBalloon();
  $('#multiplierRing').hideBalloon();
  $('#toleranceRing').hideBalloon();
}

function previewColor(color) {
  /*
  var ring_color = "ring_" + color;
  if($(selectedRing).hasClass("ring_standart")){
    $(selectedRing).addClass(ring_color);
    $(".selectableColor").mouseout(function(){
      $(selectedRing).removeClass(ring_color);
    });  
  }
  */ 
}

function hideAllBallons() {
  $('.selectableRing').hideBalloon();
  $('#multiplierRing').hideBalloon();
  $('#toleranceRing').hideBalloon();
};

$('.selectableRing').on('click', function() {
  hideAllBallons();
  $(this).showBalloon();
  selectedRing = this;
}).showBalloon({
  position: 'top',
  tipSize: 0,
  contents: '<div class="colorPicker"> <h1>Ringfarbe auswählen</h1> <div class="selectableColor"><div class="black" onmouseover="previewColor(\'black\')" onclick="setColor(\'black\')" value="0"></div>' + 
  '<p class="selectableColorTitle">Schwarz</p> </div> <div class="selectableColor"> <div class="brown" onmouseover="previewColor(\'brown\')" onclick="setColor(\'brown\')" value="1"></div><p class="selectableColorTitle">Braun</p> </div> '+
  ' <div class="selectableColor"> <div class="red" onmouseover="previewColor(\'red\')" onclick="setColor(\'red\')" value="2"></div> <p class="selectableColorTitle">Rot</p> </div> '+ 
  ' <div class="selectableColor"> <div class="orange" onmouseover="previewColor(\'orange\')" onclick="setColor(\'orange\')" value="3"></div> <p class="selectableColorTitle">Orange</p> </div> '+
  ' <div class="selectableColor"> <div class="yellow" onmouseover="previewColor(\'yellow\')" onclick="setColor(\'yellow\')" value="4"></div> <p class="selectableColorTitle">Gelb</p> </div> '+
  ' <div class="selectableColor"> <div class="green" onmouseover="previewColor(\'green\')" onclick="setColor(\'green\')" value="5"></div> <p class="selectableColorTitle">Grün</p> </div> '+
  ' <div class="selectableColor"> <div class="blue" onmouseover="previewColor(\'blue\')" onclick="setColor(\'blue\')" value="6"></div> <p class="selectableColorTitle">Blau</p> </div> '+
  ' <div class="selectableColor"> <div class="purple" onmouseover="previewColor(\'purple\')" onclick="setColor(\'purple\')" value="7"></div> <p class="selectableColorTitle">Violett</p> </div> '+
  ' <div class="selectableColor"> <div class="grey" onmouseover="previewColor(\'grey\')" onclick="setColor(\'grey\')" value="8"></div> <p class="selectableColorTitle">Grau</p> </div> '+
  ' <div class="selectableColor"> <div class="white" onmouseover="previewColor(\'white\')" onclick="setColor(\'white\')" value="9"></div> <p class="selectableColorTitle">Weiss</p> </div> '+
  ' </div>',
  css: {
    opacity: '1'
  }
});

$('#multiplierRing').on('click', function() {
  hideAllBallons();
  $(this).showBalloon();
  selectedRing = this;
}).showBalloon({
  position: 'top',
  tipSize: 0,
  contents: '<div class="colorPicker"> <h1>Multiplizier Ringfarbe auswählen</h1> <div class="selectableColor"><div class="black" onmouseover="previewColor(\'black\')" onclick="setColor(\'black\')" value="0"></div>' + 
  '<p class="selectableColorTitle">Schwarz</p> </div> <div class="selectableColor"> <div class="brown" onmouseover="previewColor(\'brown\')" onclick="setColor(\'brown\')" value="1"></div><p class="selectableColorTitle">Braun</p> </div> '+
  ' <div class="selectableColor"> <div class="red" onmouseover="previewColor(\'red\')" onclick="setColor(\'red\')" value="2"></div> <p class="selectableColorTitle">Rot</p> </div> '+ 
  ' <div class="selectableColor"> <div class="orange" onmouseover="previewColor(\'orange\')" onclick="setColor(\'orange\')" value="3"></div> <p class="selectableColorTitle">Orange</p> </div> '+
  ' <div class="selectableColor"> <div class="yellow" onmouseover="previewColor(\'yellow\')" onclick="setColor(\'yellow\')" value="4"></div> <p class="selectableColorTitle">Gelb</p> </div> '+
  ' <div class="selectableColor"> <div class="green" onmouseover="previewColor(\'green\')" onclick="setColor(\'green\')" value="5"></div> <p class="selectableColorTitle">Grün</p> </div> '+
  ' <div class="selectableColor"> <div class="blue" onmouseover="previewColor(\'blue\')" onclick="setColor(\'blue\')" value="6"></div> <p class="selectableColorTitle">Blau</p> </div> '+
  ' <div class="selectableColor"> <div class="gold" onmouseover="previewColor(\'gold\')" onclick="setColor(\'gold\')" value="7"></div> <p class="selectableColorTitle">Gold</p> </div> '+
  ' <div class="selectableColor"> <div class="silver" onmouseover="previewColor(\'silver\')" onclick="setColor(\'silver\')" value="8"></div> <p class="selectableColorTitle">Silber</p> </div> '+
  ' </div>',
  css: {
    opacity: '1'
  }
});

$('#toleranceRing').on('click', function() {
  hideAllBallons()
  $(this).showBalloon();
  selectedRing = this;
}).showBalloon({
  position: 'top',
  tipSize: 0,
  contents: '<div class="colorPicker"> <h1>Toleranz Ringfarbe auswählen</h1><div class="selectableColor"> <div class="brown" onmouseover="previewColor(\'brown\')" onclick="setColor(\'brown\')" value="1"></div><p class="selectableColorTitle">Braun</p> </div>'+
  ' <div class="selectableColor"> <div class="red" onmouseover="previewColor(\'red\')" onclick="setColor(\'red\')" value="2"></div> <p class="selectableColorTitle">Rot</p> </div> '+ 
' <div class="selectableColor"> <div class="gold" onmouseover="previewColor(\'gold\')" onclick="setColor(\'gold\')" value="3"></div> <p class="selectableColorTitle">Gold</p> </div> '+
  ' <div class="selectableColor"> <div class="silver" onmouseover="previewColor(\'silver\')" onclick="setColor(\'silver\')" value="4"></div> <p class="selectableColorTitle">Silber</p> </div> '+
  ' </div>',
  css: {
    opacity: '1'
  }
});

function checkColorValidation() {
  var error = false;
  if (typeof countRings === 'undefined' || countRings == 0) {
    error = true;
  } else if (countRings == 3) {
    if (typeof selectedRing1 === 'undefined') {
      toastr.error("Dem ersten Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    } 
    if (typeof multiplier_ring === 'undefined') {
      toastr.error("Dem Multiplizier Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    } 
    if (typeof tolerance_ring === 'undefined') {
      toastr.error("Dem Toleranz Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    }
  } else  if (countRings == 4) {
    if (typeof selectedRing1 === 'undefined') {
      toastr.error("Dem ersten Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    }
    if (typeof selectedRing2 === 'undefined') {
      toastr.error("Dem zweiten Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
    }
    if (typeof multiplier_ring === 'undefined') {
      toastr.error("Dem Multiplizier Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    } 
    if (typeof tolerance_ring === 'undefined') {
      toastr.error("Dem Toleranz Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    }
  } else if (countRings == 5) {
    if (typeof selectedRing1 === 'undefined') {
      toastr.error("Dem ersten Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    }
    if (typeof selectedRing2 === 'undefined') {
      toastr.error("Dem zweiten Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
    }
    if(typeof selectedRing2 === 'undefined') {
      toastr.error("Dem dritten Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
    }
    if (typeof multiplier_ring === 'undefined') {
      toastr.error("Dem Multiplizier Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    } 
    if (typeof tolerance_ring === 'undefined') {
      toastr.error("Dem Toleranz Ring wurde keine Farbe zugewiesen.", "Error: Farbe fehlt");
      error = true;
    }
  }
  return error;
}

function getValueWithColor (ringName, ringColor) {
  var value;
  if (ringName == "ring1" || ringName == "ring2" || ringName == "ring3") {
    switch (ringColor) {
      case "black": value=0; break;
      case "brown": value=1; break;
      case "red": value=2; break;
      case "orange": value=3; break;
      case "yellow": value=4; break;
      case "green": value=5; break;
      case "blue": value=6; break;
      case "purple": value=7; break;
      case "grey": value=8; break;
      case "white": value=9; break;
    }
  } else if (ringName == "multiplier") {
    switch (ringColor) {
      case "black": value=1; break;
      case "brown": value=10; break;
      case "red": value=100; break;
      case "orange": value=1000; break;
      case "yellow": value=10000; break;
      case "green": value=100000; break;
      case "blue": value=1000000; break;
      case "gold": value=0.1; break;
      case "silver": value=0.01; break;
    }
  } else {
    switch (ringColor) {
      case "brown": value=1; break;
      case "red": value=2; break;
      case "gold": value=5; break;
      case "silver": value=10; break;
    }
  }
  return value;
}

function calculateOhm () {
  var result = "";
  var temp = "";
  var multiplier;
  var tolerance;
  if (countRings == 3) {
    temp += getValueWithColor("ring1", selectedRing1);
    multiplier = getValueWithColor("multiplier", multiplier_ring);
    temp = parseInt(temp) * multiplier;
    tolerance = getValueWithColor("tolerance", tolerance_ring);
    result += temp + " " + tolerance + "%";
  } else if (countRings == 4) {
    temp += getValueWithColor("ring1", selectedRing1);
    temp += getValueWithColor("ring2", selectedRing2);
    multiplier = getValueWithColor("multiplier", multiplier_ring);
    temp = parseInt(temp) * multiplier;
    tolerance = getValueWithColor("tolerance", tolerance_ring);
    result += temp + " " + tolerance + "%";
  } else if (countRings == 5) {
    temp += getValueWithColor("ring1", selectedRing1);
    temp += getValueWithColor("ring2", selectedRing2);
    temp += getValueWithColor("ring3", selectedRing3);
    multiplier = getValueWithColor("multiplier", multiplier_ring);
    temp = parseInt(temp) * multiplier;
    tolerance = getValueWithColor("tolerance", tolerance_ring);
    result += temp + " " + tolerance + "%";
  }
  return result;
}

$('#calcOhm').on('click', function () {
  var error = checkColorValidation();
  var result = "";
  if (!error) {
    result = calculateOhm();
    var res = result.split(" ")[0];
    var tolerance = result.split(" ")[1];
    $('#resultOhmText').html("<p>Der Widerstand beträgt " + res + " Ohm und " + tolerance + " Toleranz");
  }
});
