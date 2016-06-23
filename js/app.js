$(document).ready(function(){

	function count(Input){
		var numberList = [];
		for (var i=1; i <= Input; i++) {
			if ((i % 5 === 0) && (i % 3 === 0)) {
			numberList.push("<li>" + "FizzBuzz" + "</li>");
			}
		else if ((i % 3) ===0) {
			numberList.push("<li>" + "Fizz" + "</li>");
			}
		else if ((i % 5) === 0  ) {
			numberList.push("<li>" + "Buzz" + "</li>");
			}
		else {
			numberList.push("<li>" + i + "</li>");
			}
		}
		return numberList;
	}

	
	$("input[name=submit]").click(function(){
		$("li").remove();
		var numberConvert = parseInt(($("input[name=EnterNumber]").val()), 10);
		if (numberConvert === parseInt(numberConvert, 10)){
			$("p").append(count(numberConvert));
			console.log(numberConvert);
			$("input[name=EnterNumber]").val('');
		} else {
		alert ("Please enter a number!");
	}});

	
});

