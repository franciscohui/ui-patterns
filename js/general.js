$(document).ready(function(){
	
	//Load content
	$('#content').load('content/about.html');

	//handle menu clicks
	$('nav a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('content/'+ page + '.html');
		return false;
	});
});