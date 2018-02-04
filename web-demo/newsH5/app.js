//get viewport width
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//get html dom
let htmlDom = document.getElementsByTagName('html')[0];

//set html font size
htmlDom.style.fontSize = htmlWidth/10 + 'px';

window.addEventListener('resize', (e)=>{
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth/10 + 'px';
});
