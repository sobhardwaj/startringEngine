<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("demo_test.txt");
  });
});
</script>
</head>
<body>

<div id="div1"><h2>Let jQuery AJAX Change This Text</h2></div>

<button>Get External Content</button>

/* comments are shown here */
<!-- Write your comments here -->

</body>
</html>
/*--------------------------------------------*/
//listen for form sumbit
document.getElementById('myForm').addEventListener('sumbit', savebookmarker);
//commets are showen here
// all right and we gonna work

function savebookmarker(e){
    var siteName = document.getElementById('siteName').Value;
    var sitUrl = document.getElementById('siteUrl').value;
   
    
    var bookmark = {
        name: 'siteName',
        url: 'siteUrl'
    }
    /*
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test'));
    */
//test if bookmark is null
if(localStorage.getItem('bookmarks')===null){
//int array
var bookmarks = [];
//add an array
bookmarks.push(bookmarks);
//set to local storage
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

}else {
    //get bookmark from localstorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    }
// add bookmark to array
bookmarks.push('bookmark');
//re-set back to localstorage
localStorage.setItem('bookmarks', JSON.stringify('bookmarks')); 

console.log(bookmark);
    e.preventDefault();
}

