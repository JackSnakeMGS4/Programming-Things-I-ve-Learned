// IIFE is an Immediately Invoked Function Expression
(function iife(){
	console.log("I'm an IIFE");
});

void function(){
	console.log("I'm an IIFE too");
}();

(function iife3(){
	console.log("I'm another IIFE");
})();