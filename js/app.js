console.log('start');
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
			
		},
		successJSON : function(response){
			console.log('successJSON');
			for(var i = 0 ; i < response.menu.length ; i++){
				var responseJSON = response.menu[i];
				$('ul').append('<li>' + '<button>' + responseJSON.title + '</button>' + '</li>');
				$('button').addClass(function(index){
					return "lienArticle" + index;
				})
				$('.lienArticle0').on('click',function(){
					$.ajax('http://192.168.1.40:1337/example.md')
					.done(app.success);
					
				});

				$('.lienArticle1').on('click', function(){
					$.ajax('http://192.168.1.40:1337/alice.md')
					.done(app.success)
					
				});


			}
		},
		failedJSON : function(){
			console.log('échecJSON');
		},
		functionRedirection : function(){

			console.log('functionRedirection');
		}

	};
	$(document).ready(function(){
		app.init();
	});
})(); 