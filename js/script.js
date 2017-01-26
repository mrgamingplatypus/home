$(document).ready(function() {
	$(".btn-hidden").hide();
	$("#content-links").hide();
	$("#content-contact").hide();
	$("#content-sched").hide();

	$("#fomo").click(function() {
		$(".btn-hidden").toggle();
	});

	$("#sched").click(function() {
		$("#content-links").hide();
		$("#content-contact").hide();
		$("#content-sched").show();
	});

	$("#link").click(function() {
		$("#content-links").show();
		$("#content-contact").hide();
		$("#content-sched").hide();
	});

	$("#contact").click(function() {
		$("#content-links").hide();
		$("#content-contact").show();
		$("#content-sched").hide();
	});


});

