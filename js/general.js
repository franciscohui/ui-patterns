$(document).ready(function(){
	
	//Load content
	$('#content').load('content/about.html');

	//Click Nav to display content
	//$('nav a').click(function(){
	//	$('input#nav-handler').attr('checked',false);
	//});

	//handle menu clicks
	$('nav a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('content/'+ page + '.html');
		$('input#nav-handler').attr('checked',false);
		return false;
	});
});