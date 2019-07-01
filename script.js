$(document).ready(function () {
    var tableData = [
        { id: 1, title: 'John', action: 'del' },
        { id: '5', title: 'Mary', action: 'del' },
        { id: '02', title: 'July', action: 'del' }
    ];

    var gWay = 'asc';

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
            var actionField = "<td>" + tableData[i]["action"] + "</td>";
            allFields = allFields + "<tr>" + idField + titleField + actionField + "</tr>";

            // $('#data_table').append("<tr>" + idField + nameField + lastNameField + emailField + ageField + "</tr>");
        };
        debugger;
        $('#data_table tbody').html(allFields);
    }

    sortTableData(tableData,"id",gWay);
    renderTable();


    $('#add').click(function () {
        debugger;
        var newTitle = $('#item').val();
        if (newTitle == "" || newTitle == undefined) {
            $('#myModal').modal('show');
        } else {
            debugger;
            if (gWay == 'desc') {
            tableData.unshift({ id: maxID()+1, title: newTitle, action: 'del'});            
            } else if (gWay == 'asc') {
                tableData.push({ id: maxID()+1, title: newTitle, action: 'del'});
            }
            $('#item').val('');
            renderTable();
        }
        
    
      });

      function sortTableData(data,field,way) {
        debugger;
        if (way == 'asc') {
          return data.sort((a,b) => (a[field] > b[field]) ? 1 : -1);
        } else if (way == 'desc') {
          return data.sort((a,b) => (a[field] < b[field]) ? 1 : -1);
        }
    };

      $('#data_table th').click(function(){
        var fieldID = $(this).attr('id');
        // if (gWay == '') {
        //     gWay = 'asc';
        // } else if (gWay == 'asc') {
        //     gWay = 'desc';
        // } else if ( gWay == 'desc') {
        //     gWay = 'asc';
        // }
        debugger;

        if (gWay == '' || gWay == 'desc') {
            gWay = 'asc';
        } else {
            gWay = 'desc';
        }
        
        sortTableData(tableData,fieldID,gWay);
        renderTable();
      });
     
      
});

