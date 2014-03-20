/*
 * Blanco v0.1
 * - Lees JSON uit / Check!
 * - Bouw website en stijl voor- en achterkant kaartje / Check!
 * - Laat random een voorkant van een kaartje zien
 * - Druk op een knop om de achterkant te laten zien
 * - Druk op een knop om naar het volgende random kaartje te gaan
 * - Houd procentueel bij hoe vaak je een kaartje goed had
 * - Laat kaartjes die je fout had vaker zien (op basis van lage procentuele waarde)
 */

$.getJSON('cards.json', function(cards) {
	var source = $('#js-cards-template').html();
	var template = Handlebars.compile(source);
	$('#js-cards').html(template(cards));
});
