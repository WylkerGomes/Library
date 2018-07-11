

var url = "https://api.myjson.com/bins/udbm5";
//var all_books = [];


$(document).ready(function(){ // this is to show the data in your document. it calls all the functions that you made
    $.getJSON( url, function(data){

        var all_books = data.books;


        movment();

        books(all_books);
        // book_titles(all_books);

        book_search (all_books);

        select (all_books);

        scrollDown ();

        scrollUp();



    }
             );   

});



/////////////////////////////////// mouse effect ////////////////////////////////////////////



var object1=$('.logo');
var object2=$('#image');

var object3=$('#pageTitle');



function movment(){


    object2.mousemove(function(e){

        var valueX = (e.pageX * -0.2 / 50 );
        var valueY = (e.pageY * -0.2 / 10 );
        
        

        setTimeout(function(){

            object1.css({

                'transform': 'translate3d('+valueX+'1%,'+valueY+'1%,0) rotate(0deg)'
            });


        }, 1000); /// 500 = 0.5 seconds  2200 = 2.2 seconds  etc..



    });


}




///////////////////////////////////////////////////////////////////////////////////  get the books  //////////////////////////////////////////////////////////////

// with this function you can create a template for all the books.
// "all_books" he is the data that we need to access

// more infomation about this function : " https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals "


function books(all_books){

    var template = "";

    all_books.forEach(function(book){

        template += `
<div class="flip3D">

<div class ="back">
<span> ${book.descripcion} </span>
<a href=" ${book.detalle} "><button>More Info</button></a>
</div>

<div class ="front">                 
<img class="cover img-responsive" src="${book.portada}" > 
</div>

</div>
`;


    })

    document.getElementById("books").innerHTML = template;


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//function book_titles(all_books){


//var book_list = "";

//all_books.forEach(function(list){

// input = document.getElementById('book_name');
//filter = input.value.toUpperCase();


//  a = all_books.titulo.getElementById('a');

//  if(a.innerHTML.toUpperCase().indexOf(filter) > -1){


//   a.display = "";


//  }

// else{

//    a.display = 'none';
// }







//})

//document.getElementById("wrapper").innerHTML = book_list;

//}



//function book_titles(all_books){

//console.log("hello2");

// var titles = books.titulo;
// var input = document.getElementById('book_name');

//  var filter = input.value.toUpperCase();

//console.log("hello3");

// if(titles == filter ){

//console.log("hello");
// }



//}





// <input type="text" name="search" id="book_name" //placeholder="Search" value="" autocomplete="off" //onkeyup="searchFunction()">  


function book_search (all_books){ // i got information to create this from : https://www.youtube.com/watch?v=mZOpvhywT_E 


    $('#search').keyup(function(){


        $('#result').html('');                 


        var searchField = $('#search').val(); // this where we write what we are searching               
        var expression = new RegExp(searchField, "i");                


        //var url = "https://api.myjson.com/bins/udbm5";

        //$.getJSON( all_books, function(data){

        var data = all_books;

        $.each(data, function(key, value){

            if(value.titulo.search(expression) != -1 || value.idioma.search(expression) != -1){


                $('#result').append('<li class= "list-group-item"> <img src=" '+value.portada+' " height= "40" width="40" class="img-thumbnail" /> | '+value.titulo+' | <span class = "text-muted"> '+value.idioma+' </span></li>'); // this is where we get the elements from our json


            }

            if(searchField.length == 0){ // make it that when the searchField is empty, the results list disapear
                $('#result').html(''); // go backs to 0
            }


        });

        // })               


    });    


}




/////////////////////////////////////////////////////////////// get the books from the selection //////////////////////////////////////////////////////////////


function select(all_books){


    $('#result').click(function(event){


        //$('#result').find('img').attr('src');

        var web = $('#result').find('img').attr('src'); // i got the element that i needeed going through the $('#result')

        window.open(web, '_blank'); // then i open a new window with the url that i gathered. info on this website: https://stackoverflow.com/questions/19851782/how-to-open-a-url-in-a-new-tab-using-javascript-or-jquery?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

        console.log($(event.target).find('img').attr('src'));


    });


    ///////  to take off the search list /////

    $('.container').click (function(){ // this makes that everytime i click on the container (in this case out of the search box) the search box options disapear.. got website: https://stackoverflow.com/questions/1070760/javascript-function-in-href-vs-onclick?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
        $('#result').html(''); // go backs to 0

    });


}









//////////////////////////////////////////////////////////////////////  scroll down button ///////////////////////////////////////////////////////////////////


function scrollDown(){ // got from here https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa  

    // console.log("hello guyssss");
    //var downbutton = document.getElementById('books');


    $('#goButton').click(function(){ // gets the id in html file 

        $('html,body').animate({ // it will animate all html body 


            scrollTop: $('#books').offset().top}, 'slow'); // get the other id where you want the page to scroll to. then offset the page and slow the animation.the only options available to offset are top and left for some reason.

        console.log("hello guy");

    });


}


////////////////////////////////////////////////////////////// scroll UP button  ////////////////////////////////////////////////////////////////////////////////



function scrollUp(){


    $('#goButton_up').click(function(){ // gets the id in html file 

        $('html,body').animate({ // it will animate all html body 


            scrollTop: $('.container').offset().top}, 'slow'); // get the other id where you want the page to scroll to. then offset the page and slow the animation.the only options available to offset are top and left for some reason.

        console.log("hello guy");

    });


}

























