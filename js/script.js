var product  =   {};

function validation() {
    var productName = document.getElementById("product_name").value;
    var productPrice = document.getElementById("product_price").value;
    var producted = document.getElementById("producted").value;
    var productExpirationDate = document.getElementById("expiration_date").value;

    /**
     *  If fields aren't empty
     * */
    if(productName != "" && productPrice != "" && producted != "" && productExpirationDate != "") {

        /**
         *  Validation of product name
         * */
        var regPname = /[^A-Za-z]/;
        if (productName.match(regPname)) {
            document.getElementById("product_name").className = "form-control border-danger";
            document.getElementById("product_name").value = "";
            document.getElementById("product_name").placeholder = "The name is not a valid";
            return false;
        }

        /**
         *  Validation of product price
         * */
        var regPrice = /^\d+$/;
        if (!productPrice.match(regPrice)) {
            document.getElementById("product_price").className = "form-control border-danger";
            document.getElementById("product_price").value = "";
            document.getElementById("product_price").placeholder = "The price is not a valid";
            return false;
        }


        /**
         *  Validation of experation date, if the product can be used
         * */
        var dateProducted = new Date(producted);
        var dayProducted = dateProducted.getDate();
        var monthProducted = dateProducted.getMonth();
        var yearProducted = dateProducted.getFullYear();

        var dateProductExpiration = new Date(productExpirationDate);
        var dayProductedExpiration = dateProductExpiration.getDate();
        var monthProductedExpiration = dateProductExpiration.getMonth();
        var yearProductedExpiration = dateProductExpiration.getFullYear();

        if ((dayProductedExpiration - dayProducted > 20) || (monthProductedExpiration - monthProducted > 1) || (yearProductedExpiration != yearProducted)) {
            alert("The product is not experation");
            return false;
        }


        /**
         *  Create product object
         * */

        product.name = productName;
        product.price = productPrice;
        product.producted = producted;
        product.expiration = productExpirationDate;


        /**
         *  If submit button <<Save>>, must be to disappear first-child of div.col-md-6
         *  And must be to appear table
         * */
        var obj = document.getElementsByClassName("col-md-6");
        for (var i = 0; i < obj.length; i++) {
            obj[0].style.border = "none";
            document.getElementById("p").style.display = "none";
            document.getElementById("btn").style.display = "none";
            document.getElementById("table").style.display = "block";
        }


        /**
         *  Create the table
         * */
        function createTable() {
            var th = document.getElementsByTagName("th")
            var tr = document.createElement('tr');
            tr.className = "tableTr";
            var rowCount = $('#table tr:last').index() + 1;
            tr.id="N_" + rowCount;
            var index = tr.id.indexOf("_");
            if (index != -1) {
                var res = tr.id.substr(index+1);
            }

          tr.id = res;

            for (var i = 0; i <th.length ; i++) {
                var td = tr.appendChild(document.createElement('td'));

                /**
                 *  Create ID of tr
                 * */


                if (th[i].innerText == "Id") {

                        td.innerText = tr.id;

                } else if(th[i].innerText == "Product name") {
                    td.innerHTML = product.name;
                } else if (th[i].innerText == "Price") {
                    td.innerHTML = product.price + " dram";
                } else if (th[i].innerText == "Producted") {
                    td.innerHTML = product.producted;
                } else if (th[i].innerText == "Expiration Date") {
                    td.innerHTML = product.expiration;
                } else if (th[i].innerText == "Actions") {

                    /**
                     *  Create edit button
                     * */
                    var edit = document.createElement("BUTTON");
                    edit.innerText = "Edit";
                    edit.style.backgroundColor = "green";
                    edit.className = "edit";
                    td.appendChild(edit);


                    /**
                     *  Click Edit
                     * */

                    $(".edit").click(function(){
                        var editTr =  $(this).closest('tr');
                        var child = $(editTr).children();


                       $(child[5]).html('<input type="button" value="Change" id="btn" class="bg-success btn btn-primary"' +
                            ' data-toggle="modal" data-target="#myModalForm">');

                    
                            //  Update id of button save
                        $("#btn-danger").attr('id', 'update');
                            //  Update id of button save
                        document.getElementById("update").value = "Edit";

                        /**
                         *  Update datas
                         * */

                          $( "#update" ).click(function() {

                            function changeText() {
                                if (editTr){

                                    $(child[1]).replaceWith( "<td>" + product.name + "</td>" );
                                    $(child[2]).replaceWith( "<td>" + product.price + " dram" + "</td>" );
                                    $(child[3]).replaceWith( "<td>" + product.producted + "</td>" );
                                    $(child[4]).replaceWith( "<td>" + product.expiration + "</td>" );
                                    return;
                                }
                            } changeText();

                        });


                    });


                    /**
                     *  Create delete button
                     * */

                    var del = document.createElement("BUTTON");
                    del.innerText = "Delete";
                    del.style.backgroundColor = "red";
                    del.className = "delete";

                    td.appendChild(del);


                    /**
                     *  Delete the tr
                     * */
                    $(".delete").click(function(){
                        $(this).closest('tr').remove();
                    });

                    td.style.display = "flex";

                }

                document.getElementById("table").appendChild(tr);
            }

        } createTable();

    } else {
        alert("Please fill all fields");
        return false;
    }

}

/**
 *  If submit button <<Reset>>, must be to disappear values of inputs
 * */
function emptyValues() {
    var input = document.getElementsByClassName("form-control");
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";
    }
}