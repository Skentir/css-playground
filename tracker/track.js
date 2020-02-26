
$(document).ready(function() {

    var expenseList = [];

    class expenseBill {
        constructor(date, price, desc, type) {
            this.date = date;
            this.price = price;
            this.desc = desc;
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
        
        if(check== true) {
            $("#warning").text("");
            var date = $("#date").val();
            var desc = $("#desc").val();
            var price = $("#price").val();
            var type = $("#type").val();
            console.log("Date " + date + " Price " + price + " Desc " + desc + " Type " +type);
            
            var expense = new expenseBill(date,price, desc, type);
            expenseList.push(expense);

            var string = 
            `
                <td>`+ expense.date + `</td>
                <td>`+ expense.desc + `</td>
                <td> Php `+ expense.price+ `</td>
                <td>`+ expense.type + `</td>
            `

            $("#expenses").append(string);
            console.log(expenseList);
            alert("Added to table");
        }
    });
    
    function checkField(field, val){
        var valid = val;
        if(field.val() == '') {
            valid = false;
            field.css({"border": "1px solid red"});
            $("#warning").text("Fill-in missing information.");
            console.log("Empty");
        } else {
            field.css('background-color', 'white');
        }
        return valid;
    }
    
});
