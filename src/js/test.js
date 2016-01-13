QUnit.test( "Test Calculate - 3 Ringe", function( assert ) {
  countRings = 3;
  selectedRing1 = "yellow";
  multiplier_ring = "brown";
  tolerance_ring = "gold";
  assert.equal(calculateOhm(), "40 5%", "Result:" + calculateOhm());
});

QUnit.test( "Test Calculate - 4 Ringe", function( assert ) {
  countRings = 4;
  selectedRing1 = "blue";
  selectedRing2 = "yellow";
  multiplier_ring = "gold";
  tolerance_ring = "red";
  assert.equal(calculateOhm(), "6.4 2%", "Result:" + calculateOhm());
});

QUnit.test( "Test Calculate - 5 Ringe", function( assert ) {
  countRings = 5;
  selectedRing1 = "white";
  selectedRing2 = "grey";
  selectedRing3 = "purple";
  multiplier_ring = "blue";
  tolerance_ring = "silver";
  assert.equal(calculateOhm(), "987000000 10%", "Result:" + calculateOhm());
});

QUnit.test( "Test Calculate - Check Validation 3 Ringe", function( assert ) {
  countRings = 3;
  selectedRing1 = undefined;
  multiplier_ring = undefined;
  tolerance_ring = undefined;
  assert.equal(checkColorValidation(), true, "Error!");
});
QUnit.test( "Test Calculate - Check Validation 4 Ringe", function( assert ) {
  countRings = 4;
  selectedRing1 = undefined;
  selectedRing2 = undefined;
  multiplier_ring = undefined;
  tolerance_ring = undefined;
  assert.equal(checkColorValidation(), true, "Error!");
});
QUnit.test( "Test Calculate - Check Validation 5 Ringe", function( assert ) {
  countRings = 5;
  selectedRing1 = undefined;
  selectedRing2 = undefined;
  selectedRing3 = undefined;
  multiplier_ring = undefined;
  tolerance_ring = undefined;
  assert.equal(checkColorValidation(), true, "Error!");
});