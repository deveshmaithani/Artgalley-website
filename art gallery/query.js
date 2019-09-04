jQuery(document).ready(function($){
var bottomn;
if(bottomn==''){
bottomn='c.html';
}
var target=$('rightmanu a[href="'+bottomn+'"]');
target.addclass('active');
}