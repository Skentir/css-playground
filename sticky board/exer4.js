console.log("hello human");

$(document).ready(
)

$("#submitbtn").click(function(){
    var colors = ["#fcba03", "#f078be", "#a8edb0", "#fae664","#b1f2eb", "#d9a1ed"];
    var input = $("#user-input").val();
    console.log(input);
    
    var stickynote = `
        <li>
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <article>
                <span>` + input +`</span>
            </article>
        </li>`;

    var i = Math.floor(Math.random() * 5);
    $("#ideaboard").append(stickynote);
    $("#ideaboard li:last-child").css({"background-color":colors[i]});
    $("#ideaboard li:last-child").bind("click", ".close", function(){
        $(this).closest("li").remove();
        console.log("removed dynamic note! ");
    });
})

/* For non-dynamic notes */
$(".close").click(function(){
    console.log("removing..")
    $(this).closest("li").remove();
    console.log("removed! ")
})
