var assert = chai.assert;

suite('Comma Separated Values', function() {

  setup(function(){
    if (typeof __html__ !== 'undefined') {
      document.body.innerHTML = __html__['tests/index.html'];
      original = document.getElementById('original');
      converted = document.getElementById('converted');
    }
  });
  
  test('click button is calling calculate()', function() {
  	original.value = "25";
  	$("button").trigger("click");
  	assert.deepEqual(finaltable.innerHTML, '\n      <p>\n          </p><table class="center" id="result">\n               \n                   <tbody><tr class="">\n                       \n                       <td>25</td>\n                       \n                   </tr>\n               \n          </tbody></table>\n      <p></p>\n      ');
  });
  
  test('localStorage working', function() {
  	original.value = "25";
    calculateN();
    if (window.localStorage) assert.deepEqual(localStorage.original, original.value);
  });

  test('calculate function working on 1 value', function() {
    original.value = "32F";
    calculateN();
    assert.deepEqual(finaltable.innerHTML, '\n      <p>\n          </p><table class="center" id="result">\n               \n                   <tbody><tr class="">\n                       \n                       <td>32F</td>\n                       \n                   </tr>\n               \n          </tbody></table>\n      <p></p>\n      ');
  });
  
  test('caculate function working on 3 values', function() {
    original.value = "32, 25, DD";
    calculateN();
    assert.deepEqual(finaltable.innerHTML, '\n      <p>\n          </p><table class="center" id="result">\n               \n                   <tbody><tr class="">\n                       \n                       <td>32</td>\n                       \n                       <td> 25</td>\n                       \n                       <td> DD</td>\n                       \n                   </tr>\n               \n          </tbody></table>\n      <p></p>\n      ');
  });
  
  test('caculate function working on values in different lines', function() {
    original.value = "32\n25, DD";
    calculateN();
    assert.deepEqual(finaltable.innerHTML, '\n      <p>\n          </p><table class="center" id="result">\n               \n                   <tbody><tr class="">\n                       \n                       <td>32</td>\n                       \n                   </tr>\n               \n                   <tr class="error">\n                       \n                       <td>25</td>\n                       \n                       <td> DD</td>\n                       \n                   </tr>\n               \n          </tbody></table>\n      <p></p>\n      ');
  });
});
