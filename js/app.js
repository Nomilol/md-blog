console.log('coucou');
(function(){
	"use strict";
	var app = {
		init:function(){
			app.listeners();
			app.functionAppelJSON();

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
		},
		failed : function(){
			console.log('échec');
		},
		always : function(){
			
		},
		functionAppelJSON : function(){
			$.ajax('http://192.168.1.40:1337/menu.json')
			.done(app.successJSON)
			.fail(app.failedJSON)
			.always(app.alwaysJSON);
		},
		successJSON : function(response){
			for(var i = 0 ; i < response.menu.length ; i++){
			var responseJSON = response.menu[i];
			$('ul').append('<li>' + '<a href>' + responseJSON.title + '</li>');
				console.log(responseJSON);
			}
		},
		failedJSON : function(){
			console.log('échecJSON');
		},
		alwaysJSON : function(){

		}
	}
	$(document).ready(function(){
		app.init();
	});
})(); 