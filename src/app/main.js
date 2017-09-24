(function() {
	/*
Constants
---------------------------
*/

	var compile = function toSwift(CODE){  
		// This function should compile code in here to Swift (Or JSON)
		var $TEXT = console.log(CODE);
		var $Compiler = $TEXT.compile($TEXT);
		log($Compiler);
	};
	/*
Variables
----------------------------
*/

	function log(str){
		console.log(str);
	}
	var nil = null;
	var Scope = 'object.scope';
	var a = '$SERVER_IMPORT.compileToSwift.' + Scope + '{(item=[strictmode] >> type=[in] >> in(([function]))';
	log(a);
    function editor(){
	var editor = ["code", "BG", "menu", "btns", "search"];
	var b = editor[0];
	var c = editor[1];
	var d = editor[2];
	var e = editor[3];
	var f = editor[4];
    }
	
})();

