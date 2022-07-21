/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 */

// Steps


//global

let div = null;

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById('root');
	const btn = document.getElementById('change-btn');
	const output = document.getElementById('output');
	const copyBtn = document.querySelector('#copy-btn')

	btn.addEventListener('click', function () {
		const bgColor = generateHexColor();
		root.style.backgroundColor = bgColor;
		output.value = bgColor;
	});

	copyBtn.addEventListener('click', function(){
		navigator.clipboard.writeText(output.value);

		if(div !== null){
			div.remove()
			div = null
		}
		
		generateTostMsg(`${output.value} copied`)


	})
}

  const generateTostMsg = (msg) => {
	  div = document.createElement("div")
	  div.innerText = msg
	  div.className = 'toast-message'
	  document.body.appendChild(div)

	  div.addEventListener('click', function(){
		  div.remove()
		  div = null
	  })
  }

// step 2 - random color generator function
function generateHexColor() {
	// #000000 #ffffff
	// 255, 255, 255 -> #FFFFFF
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// step 3 - collect all necessary references

// step 4 - handle the click event