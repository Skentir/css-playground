
$(document).ready(function() {

    var expenseList = [];
    var today = new Date();/*
    var y = today.getFullYear(),
        m = today.getMonth(),
        d = today.getDay();
        console.log(y)
        console.log(m)
        console.log(d)
    var todayNew = new Date(y,m,d);
    console.log(todayNew); */

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
            `   <tr>
                    <td>`+ expense.date + `</td>
                    <td>`+ expense.desc + `</td>
                    <td> Php `+ expense.price+ `</td>
                    <td>`+ expense.type + `</td>
                </tr>
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
        } else if (field.attr('type') === "date") {
            var d1 = field.val();
            var parts = d1.split(),
            
            dateStr = parts[1] + "/" + parts[0] + "/" + parts[2],
            d1 = new Date(d1),
            d = new Date();
            d.setMonth(d.getMonth());
            console.log(d1 + " > "+ d)
            if(d1 > d ) {
                valid = false;
                field.css({"border": "1px solid red"});
                $("#warning").text("Invalid date.");
                console.log("Empty");
            }
        } else 
            field.css('background-color', 'white');
        return valid;
    }

    $("#filter").change(function(){
        var type = $("#filter").val();
        filterType(type);
    })
    

    function filterType(type) {
        $("#expenses td").remove();
        var i;

        for (i=0; i<= expenseList.length; i++) {
            var string = 
            `<tr>
                <td>`+ expenseList[i].date + `</td>
                <td>`+ expenseList[i].desc + `</td>
                <td> Php `+ expenseList[i].price+ `</td>
                <td>`+ expenseList[i].type + `</td>
            </tr>
            `
            if (type != "none") {
                if (expenseList[i].type === type)
                $("#expenses").append(string);
            } else
                $("#expenses").append(string);
        }
    }
    
});
