$(function () {
    let database = firebase.database();
    //sets a variable to the firebase database so that we don't have to keep retyping it

    database.ref("empArr/").orderByChild("dateAdded")
    .on("child_added", function(snapshot) {

        let currentEmp = snapshot.val();
        //sets a variable to the data recorded on each child appended
        
        function monthsWorked() {
            
            var startDate = moment(currentEmp.start).format("X");
            //puts the inputed start date into a specific format
            
            var totalMonths = moment().diff(moment.unix(startDate, "X"), "months");
            //calculates the difference between the current date and the employees start date
            
            return totalMonths;
            //sets the monthsWorked to the product that is total Months
        }
        
        function totalBill() {
           return currentEmp.rate * monthsWorked();
            //sets the totalBill to the product of the rate times monthsWorked
        }

        var newRow = $("<tr class='tableRow'>");
        //creates a newRow variable with a class tableRow
        var currentName = $("<td class='name'>").text(currentEmp.name);
        //creates a new <td> for the name inputed
        var currentRole = $("<td class='role'>").text(currentEmp.role);
        //creates a new <td> for the role inputed
        var currentStart = $("<td class='start'>").text(currentEmp.start);
        //creates a new <td> for the start date inputed
        var currentMonth = $("<td class='months'>").text(monthsWorked);
        //creates a new <td> for the monthsWorked that was calculated
        var currentRate = $("<td class='rate'>").text(currentEmp.rate);
        //creates a new <td> for the rate inputed
        var currentBill = $("<td class='billed'>").text(totalBill);
        //creates a new <td> for the totalBill that was calculated
        
        newRow.append(currentName)
            .append(currentRole)
            .append(currentStart)
            .append(currentMonth)
            .append(currentRate)
            .append(currentBill);
        //adds the new td elements to the new tableRow

        $("tbody").append(newRow);
        // dynamically creates new table rows with employee data

    })
        
    $("form").off("submit").on("submit", function (e) {
        e.preventDefault();

        let name = $("#employee-name").val().trim();
        let role = $("#employee-role").val().trim();
        let start = $("#start-date").val().trim();
        let rate = $("#employee-rate").val().trim();
        //sets the variables to the user input

        $("#employee-name").val("");
        $("#employee-role").val("");
        $("#start-date").val("");
        $("#employee-rate").val("");
        //clears the input field after each input

        database.ref("empArr").push({
            "name": name, 
            "role": role, 
            "start": start, 
            "rate": rate
        });
        //appends latest employee added to the empArr firebase.ref

    })
        
})