var assert = chai.assert;

suite('temperature', function() {

  setup(function(){
    if (typeof __html__ !== 'undefined') {
      document.body.innerHTML = __html__['tests/index.html'];
      original = document.getElementById('original');
      converted = document.getElementById('converted');
    }
  });

  test('32F = 0C', function() {
    original.value = "32F";
    calculate();
    assert.deepEqual(finaltable.innerHTML, '<p>\n</p><table class="center" id="result">\n<tbody><tr>                    <td>32F</td>              </tr>\n</tbody></table>');
  });
  /*test('45C = 113.0 Farenheit', function() {
    original.value = "45C";
    calculate();
    assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
  });
  test('25e4F = 138871.1C', function() {
    original.value = "25e4F";
    calculate();
    assert.deepEqual(converted.innerHTML, "138871.1 Celsius");
  });
  test('30e2C = 5432.0 Farenheit', function() {
    original.value = "30e2C";
    calculate();
    assert.deepEqual(converted.innerHTML, "5432.0 Farenheit");
  });
  test('5X = error', function() {
    original.value = "5X";
    calculate();
    assert.match(converted.innerHTML, /ERROR/);
  });*/
});
