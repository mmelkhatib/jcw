//Constructs albums from XML for SlideshowPopup.js
function AlbumMaster(src, tgt, sizeW){
		var self = this;
		this.winSize = function(){
			  sw = $(window).width()*.8;
			  if(sw > 600){
				sw = 600;  
			  }
			  return sw;
			  }
		if(!sizeW){
			console.log("no size by default");
			this.width = this.winSize();
		}else{
			this.width = sizeW;
		}
		this.image = {};
		this.album = {};
		this.ssConstructed = "";
		this.albConstructed = "";
		this.slideimgs = {},
		slideimgs = this.slideimgs,
		this.albList = [],
		albList = this.albList,
		this.popup = function(set){
			//self.dialogTitle = $(tgt).siblings("div").children("h3").html();
			//self.imgHolder = $("#campaignSS div");
			self.imgSetLength = set.split("<img").length-1;
			self.imgSetWidth = (self.imgSetLength * self.winSize())+"px";
			//console.log(tgt);
			self.imgHolder = $(tgt).append('<div id="imgHolder"><div id="slideContainer"></div></div>');
			$('#imgHolder').children('div').css({width:self.winSize(), margin: '0 auto', marginTop:'1em', marginBottom:'1em', overflow:'hidden'}).html(set)
			.children("div").css({width:self.imgSetWidth, height:self.winSize()*.667, position:'relative'})
				.children("img").each(function(index){
				$(this).parent().children('img').css('width',self.winSize());
				thumb = $(this).clone();
				if($(this).parent("div").siblings("a").length > 0){
					$(this).parent("div").siblings("a:last-child").after('<a href="#_" class="thumb">'+parseInt(index+1)+'</a>').siblings("a:last-child").html(thumb).children("img").css('width','auto').after('<span>'+parseInt(index+1)+'</span>');	
				}else{
					$(this).parent("div").after('<a href="#_" class="thumb">'+parseInt(index+1)+'</a>').siblings("a").html(thumb).children("img").css('width','auto').after('<span>'+parseInt(index+1)+'</span>');
				}
			}).end().siblings("a").click(function(event){
				//console.log($(this).index());
				dist = ($(this).index()-1) * -self.winSize();
				$(this).siblings("div").css({'left':dist+'px'})
				event.preventDefault();
			});
		$("#imgHolder").dialog({
		"width": self.winSize()*1.05, 
		/*"height":auto,*/
		'resizable':false,
		'position': [($(window).width() * .5) - (self.winSize() * .5), 20],
		'show':'fade',
		'modal':true,
		'title':"",
		'close':function(){$(this).parent().remove();}
		});
			
			
		},
		this.xmlRequest = $.ajax({
				type: "GET",
				url: src,
				dataType : "xml",
				success: function(xml){
					xmlDoc = xml;
					},
				complete: function(){
						$(xmlDoc).find('album').each(function(){//Gather all content from each album
							self.ssConstructed = "";
							self.album.path = $(this).attr('lgPath'),
							self.album.title = $(this).attr('title'),
							self.album.ID = $(this).attr('id'),
							self.album.cover = $(this).find('img').eq(0).attr('src'),
							self.album.desc = $(this).attr('description');
							console.log(self.album.path);
						$(this).find('img').each(function(){//Convert each image reference in XML file to HTML tags
							self.image.URL = $(this).attr('src');
							if(self.ssConstructed){//If ssConstructed exists:
								self.ssConstructed += '<img src="'+self.album.path+'/'+self.image.URL+'"/>'
							}else{
								self.ssConstructed = '<img src="'+self.album.path+'/'+self.image.URL+'"/>';
								console.log(self.ssConstructed)
							}//bundle all images together in a string: ssConstructed
							});//each image
							if(self.albConstructed){
							self.albConstructed += '<div class="albumCover" id="'+self.album.ID+'"><a href="Javascript:void(0)"><img src="'+self.album.path+'/'+self.album.cover+'" title="'+self.album.title+'"  /></a><div><h3>'+self.album.title+'</h3><p>'+self.album.desc+'</p></div></div>';
							}else{
							self.albConstructed = '<div class="albumCover" id="'+self.album.ID+'"><a href="Javascript:void(0)"><img src="'+self.album.path+'/'+self.album.cover+'" title="'+self.album.title+'"  /></a><div><h3>'+self.album.title+'</h3><p>'+self.album.desc+'</p></div></div>';
							}
							self.slideimgs[self.album.ID] = "<div>"+self.ssConstructed+"</div>";
							console.log(self.album.ID);	
							self.albList.push(self.album.ID)
						});//end ('album').each()
						//return self.albConstructed;
						//console.log(self.albConstructed);
						$(tgt).html(self.albConstructed);
						$(tgt).children('.albumCover').click(function(){
							self.popup(self.slideimgs[$(this).attr('id')]);
						});
					}
			});//end .ajax()
			
}