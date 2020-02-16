$(document).ready(function(){
    $("#wow-btn").click(addItem);
    $("p").mouseenter(function() {
        $(this).css("color", "green");
    });
    $("p").mouseleave(function() {
        $(this).css("color","pink");
    });    
    $("#toggle").click(function () {
        $("p").fadeOut(300);
        $("p").fadeIn(300);
    });
});
/* var js = document.getElementById("menu");
var jq = $("#menu");

console.log(js.innerHTML);
console.log(jq.text());

jq.html("<h1>Header</h1>");
js.text("bro what even");
jq.style.color = "blue";
jq.style.fontSize = "40px";
jq.css("color","green");

var styles = {
    "font-family": "sans-serif";
}
console.log(jq == js); */

var jq = $("#link");
jq.attr({"href":"https://facebook.com",
        "title":"FB"});

function addItem() {
    var li = document.createElement("li");
    li.text("fuck"); /*wont work because li is NOT a JQuery object */
    li.innerHTML = "New item from function";
    
    var list = $("#list");
    list.append(li);

    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div.appendChild(div2);
    
    var jqli = $("<li></li>").text("new");
    $("#list").append(jqli);
}