
$(document).ready(function() {
    class expenseBill {
        constructor(date, price, description, type) {
            this.date = date;
            this.price = price;
            this.descriptionl
            this.type = type;
        }
    }
    
    $("#submitbtn").click(function(){
        console.log("Submit is pressed");
        var check = true;
        check = checkField($("#date"), check);
        check = checkField($("#desc"), check);
        check = checkField($("#price"), check);
        check = checkField($("#type"), check);
        console.log("Finished Checking");
    });
    
    function checkField(field, val){
        var valid = val;
        if(field.val() == '') {
            valid = false;
            field.css('border', 'red');
            $("#warning").text("Fill-in missing information.");
            console.log("Empty");
        } else {
            field.css('background-color', 'white');
        }
    
        return valid;
    }
    
});
