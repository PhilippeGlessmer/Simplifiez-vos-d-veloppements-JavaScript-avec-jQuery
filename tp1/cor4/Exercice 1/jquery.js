$(function() {
	$('#label').click(function() {
		$('hr').after('<div id="container">Texte du label<input type="text" id="idinput"></input><button id="btnok">Ok</button></div>');
		$('#btnok').click(afficherLabel);
	});
	$('#texte').click(function() {
		$('hr').after('<div id="container">Id de la zone de texte<input type="text" id="idinput"></input><button id="btnok">Ok</button></div>');
		$('#btnok').click(afficherTexte);
	});
	$('#bouton').click(function() {
		$('hr').after('<div id="container">Texte du bouton<input type="text" id="idinput"></input><button id="btnok">Ok</button></div>');
		$('#btnok').click(afficherBouton);
	});
});

let afficherLabel = function() {
	let validation = '<span>' + $('#idinput').val() + '</span>';
	$('#gauche').append(validation);
	$('#container').remove();
};
let afficherTexte = function() {
	let validation = '<input type="text" id="' + $('#idinput').val() +  '"><br>';
	$('#gauche').append(validation);
	$('#container').remove();
};
let afficherBouton = function() {
	let validation = '<button>' + $('#idinput').val() + '</button>';
	$('#gauche').append(validation);
	$('#container').remove();
};