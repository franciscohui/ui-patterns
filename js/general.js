$(document).ready(function(){
	
	//Load content
	$('#content').load('content/home.html');

	//Click Nav to display content
	//$('nav a').click(function(){
	//	$('input#nav-handler').attr('checked',false);
	//});

	//handle menu clicks
	$('nav a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('content/'+ page + '.html'); // Loads selected page content
		$('input#nav-handler').attr('checked',false); //Toggles view slide on click
		return false;
	});
});