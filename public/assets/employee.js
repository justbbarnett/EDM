$(function () {
    let database = firebase.database();

    database.ref("empArr/").orderByChild("dateAdded")
        .on("child_added", function(snapshot) {
        
        let currentEmp = snapshot.val();
        
        var newRow = $("<tr class='tableRow'>");
        var currentName = $("<td class='name'>").text(currentEmp.name);
        var currentRole = $("<td class='role'>").text(currentEmp.role);
        var currentStart = $("<td class='start'>").text(currentEmp.start);
        var currentMonth = $("<td class='months'>");
        var currentRate = $("<td class='rate'>").text(currentEmp.rate);
        var currentBill = $("<td class='billed'>");
        
        newRow.append(currentName)
            .append(currentRole)
            .append(currentStart)
            .append(currentMonth)
            .append(currentRate)
            .append(currentBill);
        
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