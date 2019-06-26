$(document).ready(function () {
    var tableData = [
        { id: 3, title: 'John', action: 'del' },
        { id: 2, title: 'Mary', action: 'del' },
        { id: 1, title: 'July', action: 'del' }
    ];

    function maxID() {
        var max = 0;

        for (var i = 0; i < tableData.length; i++) {
            //   var number = Math.max(tableData.id);
            if (tableData[id] > 0) { max = tableData[id]; }
        }
    }

    
    function renderTable() {
        debugger;
        allFields = "";

        for (var i = 0; i < tableData.length; i++) {
            var idField = "<td>" + tableData[i]["id"] + "</td>";
            var titleField = "<td>" + tableData[i]["title"] + "</td>";
            var actionField = "<td>" + tableData[i]["action"] + "</td>";
            allFields = allFields + "<tr>" + idField + titleField + actionField + "</tr>";

            // $('#data_table').append("<tr>" + idField + nameField + lastNameField + emailField + ageField + "</tr>");
        };
        $('#data_table tbody').html(allFields);
    }

    renderTable();

})

