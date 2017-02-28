
function gallery(gallerywidth,columncount,gutter,divcount){
	document.write('<div class="gallery" style="width:>'+gallerywidth+'px">');
	for (i=0;i<divcount;i++) {
		document.write('<div class="galItem" style="width:'+(gallerywidth/columncount - 2*gutter)+'px;margin:'+gutter+'px"><img src="'1.jpg.jpg'"></div>');
		

		document.write('</div>');
		document.write('<div class="clear"></div>');
		
	}
}

gallery(900,2,5,3)