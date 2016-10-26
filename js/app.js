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
			console.log('successJSON');
			for(var i = 0 ; i < response.menu.length ; i++){
				var responseJSON = response.menu[i];
				$('ul').append('<li>' + '<a href ="#">' + responseJSON.title + '</a>' + '</li>');
				$('li').addClass(function(index){
					return "lienArticle" + index;
					$('.lien0').on('click',function(){
						console.log('lienO');
					});
					
					$('.lien1').on('click', function(){});

				})

			}
		},
		failedJSON : function(){
			console.log('échecJSON');
		},
		alwaysJSON : function(){

		},
		functionRedirection : function(){

			console.log('functionRedirection');
		}

	}
	$(document).ready(function(){
		app.init();
	});
})(); 