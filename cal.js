let display = document.getElementById('display');
// convert into Array
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);


// Through Swith statement--------------------------------------
// buttons.map(button => {
// 	button.addEventListener('click', (e)=>{
// 		console.log('clicked')
// 		console.log(e)
// 		console.log(e.target)
// 		console.log(e.target.innerText);
// 		switch (e.target.innerText) {
// 			case 'C':
//                 display.innerText = '';
//                 break;
// 			case '=':
// 				try {
// 					display.innerText = eval(display.innerText);
// 				} catch  {
// 					display.innerText = "Error";
				
// 				}
// 				break;
// 				case '←':
// 					if (display.innerText){
// 					   display.innerText = display.innerText.slice(0, -1);
// 					}
// 					break;
// 			default:
// 				display.innerText += e.target.innerText;
// 		}
// 	})

// })

// Through If/else contditions---------------------------------
buttons.map(button => {
	button.addEventListener('click', (e)=>{
		console.log('clicked')
		console.log(e)
		console.log(e.target)
		console.log(e.target.innerText);
		buttonText = e.target.innerText;

		if (e.target.innerText== 'C') {
			display.innerText = '';
		} else if(e.target.innerText== '=') {
			try {
				display.innerText = eval(display.innerText);
			} catch  {
				display.innerText = "Error";
				
			
		}}else if(e.target.innerText=='←') {
			if (display.innerText){
				display.innerText = display.innerText.slice(0, -1);
			 }
			
		}else {
			display.innerText += e.target.innerText;
		}
	
	})

})






















































// let firstnum, secondnum, num1, num2,opt, sum,mul,sub,div;
// function Calculator(){


// firstnum = window.prompt("enter first number");
// opt = window.prompt("Type (+, -, /, *) in the box");
// secondnum = window.prompt("enter second number");
// num1 = parseInt(firstnum);
// num2 = parseInt(secondnum);

// sum = num1+num2;
// mul = num1*num2;
// div =num1/num2;
// sub = num1 - num2;

// switch(opt){
//     case "+":
//         document.writeln("<h1> the Sum is : "+ sum +" </h1>");
// 		break;
//     case "-":
//         document.writeln("<h1> the Sub is : "+ sub +" </h1>");
// 		break;
//     case "/":
//         document.writeln("<h1> the div is : "+ div +" </h1>");
// 		break;
// 	case "*":
// 		document.writeln("<h1> the Mul is : "+ mul +" </h1>");
// 		break;

// }



// }










// 	// if (opt == "+") {
// 	// 		document.writeln("<h1> the Sum is : "+ sum +" </h1>");
// 	// };
// 	// if (opt == "-") {
// 	// 		document.writeln("<h1> the Sub is : "+ sub +" </h1>");
// 	// 	};
// 	// if (opt == "/") {
// 	// 		document.writeln("<h1> the div is : "+ div +" </h1>");
// 	// 	};
// 	// if (opt == "*") {
// 	// 		document.writeln("<h1> the mul is : "+ mul +" </h1>");
// 	// 	};

