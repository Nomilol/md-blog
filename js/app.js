(function(){
	"use strict";
	var app = {
		init:function(){
			app.listeners();

		},
		listeners : function(){
			$('#putArticle').on('click', app.functionAjax);
			$('#converter').on('click', app.printArticle(app.printArticle.res));
		},
		functionAjax : function(){
			$.ajax('http://192.168.1.21:1337/alice.md')
			.done(function(response){
				$('#montreMoi').html(response)
			})
			.fail(app.failed())
			.always(app.always());
			
		},
		printArticle : function(){
			console.log();
		},
		success : function(response){
			console.log(response);
			console.log('réussi');
		},
		failed : function(){
			console.log('échec');
		},
		always : function(){
			
		},
		converter : function(alice){
			var converter = new showdown.Converter(),
			text = alice,
			html = converter.makeHtml(text);
			$('#md').html(html);
		}	

		
	}











	$(document).ready(function(){
		app.init();
	});
})(); 