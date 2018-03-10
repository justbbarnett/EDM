$(function () {
    let database = firebase.database();

    database.ref("empArr/").orderByChild("dateAdded")
        .on("child_added", function(snapshot) {
        
        let currentEmp = snapshot.val();
        console.log(currentEmp);
        
        var newRow = $("<tr>");
        var currentName = $(".name").text(currentEmp.name);
        var currentRole = $(".role").text(currentEmp.role);
        var currentStart = $(".start").text(currentEmp.start);
        var currentMonth = $(".months");
        var currentRate = $(".rate").text(currentEmp.rate);
        var currentBill = $(".billed");
        newRow.append(currentName).append(currentRole).append(currentStart).append(currentMonth).append(currentRate).append(currentBill);
        $("tbody").append(newRow);
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