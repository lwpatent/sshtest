console.log("JqueryGet loaded");

$( function(){
  $( '#github' ).click( function( evt ) {

    evt.preventDefault();

    // const url = 'https://api.github.com/users/lwpatent'
    const url = 'https://www.theverge.com/';

   $.get(url, function(result) {
         $('#output').append(getdata(result));
   });
});
})

function getData(result) {
console.log( 'getdata invoked');
let output = "";
output += "<ul>";
for( const key in result ) {
  output += "<li>";
  output += key + " - " + result[key];
  output += "</li>";
}
  output += "</ul>";
  return output
}

// console.dir(document.getElementById('github'));
