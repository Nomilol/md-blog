(function(){
	"use strict";
	var app = {
		init:function(){
			app.listeners();

		},
		listeners : function(){
			$('#putArticle').on('click', app.functionAjax);
			
		},
		functionAjax : function(){
			$.ajax('http://192.168.1.40:1337/alice.md')
			.done(app.success)
			.fail(app.failed)
			.always(app.always);
			
		},
		success : function(response){
			var converter = new showdown.Converter(),
			text = response,
			html = converter.makeHtml(text);
			$('#md').html(html);
			console.log(text);
			
		},
		failed : function(){
			console.log('échec');
		},
		always : function(){
			
		},
	}
	$(document).ready(function(){
		app.init();
	});
})(); 