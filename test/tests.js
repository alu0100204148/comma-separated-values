var assert = chai.assert;

suite('temperature', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/test.html'];
          original = document.getElementById('original');
	  
          //converted = document.getElementById('converted');
	  
	  result  = document.getElementById('result');
	  
	  finaltable  = document.getElementById('finaltable');
	  
	  
      }
    });

    
    
    test('32F = 0C', function() {
        original.value = '"32F","aa"';
        calculate();
        assert.deepEqual(result.innerHTML, '"32F","aa"');
    });
    
    /*
   test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(finaltable.innerHTML, "<p>\n<table class="center" id="result">\n</table>");
    });
    */
    
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(finaltable.innerHTML, /ERROR/);
    });
    
    
    
    
    
    
});