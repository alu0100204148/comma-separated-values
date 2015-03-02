var assert = chai.assert;

suite('temperature', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/test.html'];
          original = document.getElementById('original');
	  
          //converted = document.getElementById('converted');
	  
	  finaltable  = document.getElementById('finaltable');
      }
    });

    
    
    test('32F = 0C', function() {
        original.value = '"32F","aa"';
        calculate();
        assert.deepEqual(finaltable.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(finaltable.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(finaltable.innerHTML, /ERROR/);
    });
    
    
    
    
    
    
});