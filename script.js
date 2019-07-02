$(document).ready(function () {
    var tableData = [
        { id: 1, title: 'John', action: 'delete' },
        { id: '5', title: 'Mary', action: 'delete' },
        { id: '02', title: 'July', action: 'delete' }
    ];

    var gWay = 'asc';
    var fieldID = 'id';

    unifyIDNumbers();

    function maxID() {
        var max = 0;

        for (var i = 0; i < tableData.length; i++) {
            //   var number = Math.max(tableData.id);
            if (tableData[i]["id"] > max) { max = tableData[i]["id"]; }
        }
        debugger;
        return max;
    }

    function unifyNumbers(num) {
        return Number(num);
    }

    function unifyIDNumbers() {
        debugger;
        for (var i = 0; i < tableData.length; i++) {
            tableData[i]["id"] = unifyNumbers(tableData[i]["id"]);
        }
    }

    function renderTable() {
        allFields = "";

        for (var i = 0; i < tableData.length; i++) {
            var idField = "<td>" + tableData[i]["id"] + "</td>";
            var titleField = "<td>" + tableData[i]["title"] + "</td>";
            var actionField = "<td>" + "<button type='button' class='btn btn-danger delete-cls' id='" + tableData[i]["id"] + "'>" + tableData[i]["action"] + "</button>" + "</td>";
            allFields = allFields + "<tr>" + idField + titleField + actionField + "</tr>";

            // $('#data_table').append("<tr>" + idField + nameField + lastNameField + emailField + ageField + "</tr>");
        };
        debugger;
        $('#data_table tbody').html(allFields);
    }

    sortTableData(tableData, fieldID, gWay);
    renderTable();


    $('#add').click(function () {
        debugger;
        var newTitle = $('#item').val();
        if (newTitle == "" || newTitle == undefined) {
            $('#myModal').modal('show');
        } else {
            debugger;
            if (fieldID == 'id') {
                if (gWay == 'desc') {
                    tableData.unshift({ id: maxID() + 1, title: newTitle, action: 'del' });
                } else if (gWay == 'asc') {
                    tableData.push({ id: maxID() + 1, title: newTitle, action: 'del' });
                }
            } else if (fieldID == 'title') {
                tableData.push({ id: maxID() + 1, title: newTitle, action: 'del' });
                sortTableData(tableData, fieldID, gWay);
            }

            $('#item').val('');
            renderTable();
        }


    });

    function sortTableData(data, field, way) {
        debugger;
        if (way == 'asc') {
            if (field == 'id' || field == 'action') {
                return data.sort((a, b) => (a[field] > b[field]) ? 1 : -1);
            } else if (field == 'title') {
                return data.sort((a, b) => (a[field].toLowerCase() > b[field].toLowerCase()) ? 1 : -1);
            }

        } else if (way == 'desc') {
            if (field == 'id' || field == 'action') {
                return data.sort((a, b) => (a[field] < b[field]) ? 1 : -1);
            } else if (field == 'title') {
                return data.sort((a, b) => (a[field].toLowerCase() < b[field].toLowerCase()) ? 1 : -1);
            }

        }
    };

    $('#data_table th').click(function () {
        fieldID = $(this).attr('id');
        debugger;

        if (gWay == '' || gWay == 'desc') {
            gWay = 'asc';
        } else {
            gWay = 'desc';
        }

        sortTableData(tableData, fieldID, gWay);
        renderTable();
    });


    $(document).on('click', '.delete-cls', function () {
        debugger;
        var clickID = $(this).attr('id');
        deleteItem(clickID);
    });


    function deleteItem(id) {
        debugger;
        for (var i = 0; i < tableData.length; i++) {
            if (tableData[i]["id"] == id) {
                tableData.splice(i, 1);
            }
        }
        renderTable();
    }


});

