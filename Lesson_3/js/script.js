var products = {

     productName: "Ավել",

      productArrays:[
          ["Խնձոր", "Նարինջ", "Բանան", "Kiwi"],
          ["Գիրք", "Տետր", "Մատիտ", "Գրիչ"],
          ["Ավել", "Աղբ թափելու հարմարանք", "Դույլ", "Ջնջոց"]
      ],

        productPrice: 150,

        count: 120,

      getProductName: function () {
          for (var i in  this.productArrays) {
              for (var j in this.productArrays[i]) {
                  if (this.productName == this.productArrays[0][j]){
                      return(this.productArrays[0][j]);
                  } else if (this.productName == this.productArrays[1][j]){
                      return(this.productArrays[1][j]);
                  } else if (this.productName == this.productArrays[2][j]){
                      return(this.productArrays[2][j]);
                  }
              }
          }
      },

      getProductCategories: function () {

          for (var i in  this.productArrays) {
              for (var j in this.productArrays[i]) {
                  if (this.productName == this.productArrays[0][j]){
                      return("Միրգ");
                  } else if (this.productName == this.productArrays[1][j]){
                      return("Գրենական պիտույքներ");
                  } else if (this.productName == this.productArrays[2][j]){
                      return("Տնտեսական ապրանքներ");
                  }
              }
          }
      },

    discount: function (){
        if (this.productPrice > 200) {
            var disCount = (this.productPrice * 5)/100;
            return disCount + "դրամ զեղչ";
        } else {
            return disCount = "0%";
        }
    },


    info: function () {
        return  (this.getProductName() + " " + this.productPrice + "դրամ ինքնարժեք " + this.count + " " + this.discount()
            + " " + this.getProductCategories());
    }
}


//document.body.innerHTML = (products.info());


function productsInfo() {
    document.write("<table style='border: 1px solid; width: 500px; height: 50px;'>");
    for (var i = 0; i < products.productArrays.length; i++) {
        document.write("<tr style='border: 1px solid; width: 500px; height: 50px'>");
        for (var j = 0; j < products.productArrays[i].length; j++) {
            document.write("<td class='table' style='border: 1px solid; width: 500px; height: 50px; text-align: center' onclick='f()'>" + products.productArrays[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

productsInfo()

function whichOne() {

    products.productName = products.productArrays[0][0];
    document.getElementById("header").innerText = products.productName;
    //document.body.innerHTML = (products.info());
}

function whichTwo() {

    products.productName = products.productArrays[0][1];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichThree() {

    products.productName = products.productArrays[0][2];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichFour() {

    products.productName = products.productArrays[0][3];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichFive() {

    products.productName = products.productArrays[1][0];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichSix() {

    products.productName = products.productArrays[1][1];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichSeven() {

    products.productName = products.productArrays[1][2];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}


function whichEight() {

    products.productName = products.productArrays[1][3];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichNine() {

    products.productName = products.productArrays[2][0];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichTen() {

    products.productName = products.productArrays[2][1];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichEleven() {

    products.productName = products.productArrays[2][2];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function whichTwelve() {

    products.productName = products.productArrays[2][3];
    console.log(products.productName);
    document.body.innerHTML = (products.info());
}

function f() {
    var td = document.getElementsByClassName("table");
    for (var i = 0; i < td.length; i++){
        td[0].onclick = whichOne;
        td[1].onclick = whichTwo;
        td[2].onclick = whichThree;
        td[3].onclick = whichFour;
        td[4].onclick = whichFive;
        td[5].onclick = whichSix;
        td[6].onclick = whichSeven;
        td[7].onclick = whichEight;
        td[8].onclick = whichNine;
        td[9].onclick = whichTen;
        td[10].onclick = whichEleven;
        td[11].onclick = whichTwelve;
    }
}



