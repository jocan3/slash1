
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var list  = ['Andres','Alejo','Pablo','Irene','Stephanie','Adolfo','Zuriel'];

list = shuffle(list);

var element = document.getElementById('pageContent');
element.innerHTML = '';
var c = 0;
for (var i = 0; i < 4; ++i){
	element.innerHTML += '<div class="row">';
	for (var j = 0; j< 2; ++j){
		if (c < 7){
			element.innerHTML +=           '<div class="col-md-6">'+
	            '<div class="panel panel-default text-center">'+
	              '<div class="panel-heading"></div>'+
	              '<div class="panel-body">'+
	               '<h2>'+list[c]+ ' <a href="data/'+list[c]+'.pdf" target="_blank"><i class="fa fa-file-pdf-o" style="color:red"></i></a></h2>'+
	              '</div>'+
	            '</div>'+
	          '</div>';
	      }else{
	      	element.innerHTML +=           '<div class="col-md-6"></div>';
	      }
          ++c;
	}
	element.innerHTML += '</div>';
}



