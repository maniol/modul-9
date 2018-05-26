'use strict';
(function(){

var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];


var body = document.getElementsByTagName('body')[0];
for (var key in data){
	/*genereate divs with ids*/
	var div = "<div id="+data[key]['id']+" class='box'></div>";
	body.insertAdjacentHTML('beforeend',div);
	/*generate headers and contents*/
	var header = "<header>" + data[key]['title'] + "</header>";
	var content = data[key]['content'];
	var box = document.getElementById(data[key]['id']);
	box.insertAdjacentHTML('afterbegin', header);
	box.insertAdjacentHTML('beforeend', content);
	/*add classes*/
	var classes = data[key]['categories'];
	var boxHeader = box.getElementsByTagName('header')[0];
	for (var key in classes) {
		if (classes[key] == "special-header") {
			boxHeader.classList.add(classes[key]);
		}
		else {
			box.classList.add(classes[key]);
		}
	}
}
})(); 