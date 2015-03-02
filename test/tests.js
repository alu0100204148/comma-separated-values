var assert = chai.assert;

suite('temperature', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['test/index.html'];
          original = document.getElementById('original');
          finaltable = document.getElementById('finaltable');
      }
    });

    
    
    test('Prueba 1', function() {
        original.value = '"producto", "precio"
			  "camisa",    "4,3"
			  "libro de O\"Reilly", "7,2"';
        calculate();
        assert.deepEqual(finaltable.innerHTML,	'"producto", "precio"
						"camisa",    "4,3"
						"libro de O\"Reilly", "7,2"');
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


