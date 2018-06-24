var products = {

      productName: "Տետր",

      productArrays:[
          ["Խնձոր", "Նարինջ", "Բանան", "Կիվի"],
          ["Գիրք", "Տետր", "Մատիտ", "Գրիչ"],
          ["Ավել", "Աղբ թափելու հարմարանք", "Դույլ", "Ջնջոց"]
      ],
      categories: [
            {
                name: "Միրգ"
            },
            {
                name: "Գրենական պիտույքներ"
            },
            {
                name: "Տնտեսական ապրանքներ"
            }
        ],
       productPrice: 150,
    
       count: 12,

       getProductName: function () {
          for (var i in  this.productArrays) {
              for (var j in this.productArrays[i]) {
                  if (this.productName == this.productArrays[i][j]){
                      return(this.productName);
                  }
              }
          }
      },
      getProductCategories: function () {

          for (var i in  this.productArrays) {
              for (var j in this.productArrays[i]) {
                  if (this.productName == this.productArrays[i][j]){
                      this.count += "կգ";
                      return(this.categories[i].name);
                  }
              }
          }
      },
      discount: function (){
        if (this.productPrice > 200) {
            var disCount = (this.productPrice * 5)/100;
            return disCount + "դրամ";
        } else {
            return disCount = "0%";
        }
      },
      getCount: function(){
        for (var i in  this.productArrays) {
            for (var j in this.productArrays[i]) {
                if (this.productName == this.productArrays[i][j]){
                    return  this.count += "կգ";
                }
                else if (this.productName == this.productArrays[1][j]){
                    return  this.count += "հատ";
                } else if (this.productName == this.productArrays[2][j]){
                    return  this.count += "հատ";
                }
            }
        }
       },

      info: function () {
        return  ("Անվանում՝ " + this.getProductName() + "<br> Գին՝ " + this.productPrice + "դրամ<br> Քանակ՝ " + this.getCount() + "<br> Զեղչված՝ " +
            this.discount() + "<br> Կատեգորիա՝ " + this.getProductCategories());
      },

}

function productsInfo() {
    document.write("<table style='border: 1px solid; width: 700px; height: 50px;'>");
    for (var i = 0; i < products.productArrays.length; i++) {
        document.write("<tr style='border: 1px solid; width: 700px; height: 50px'>");
        for (var j = 0; j < products.productArrays[i].length; j++) {
            document.write("<td class='table' style='border: 1px solid; width: 700px; height: 50px; text-align: center' onclick='f()'>" +
                products.productArrays[i][j] + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

productsInfo()


function information() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[0][0];
    document.body.innerHTML = (products.info());
}

function information_1() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[0][1];
    document.body.innerHTML = (products.info());
}

function information_2() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[0][2];
    document.body.innerHTML = (products.info());
}

function information_3() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[0][3];
    document.body.innerHTML = (products.info());
}

function information_4() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[1][0];
    document.body.innerHTML = (products.info());
}

function information_5() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[1][1];
    document.body.innerHTML = (products.info());
}

function information_6() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[1][2];
    document.body.innerHTML = (products.info());
}

function information_7() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[1][3];
    document.body.innerHTML = (products.info());
}

function information_8() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[2][0];
    document.body.innerHTML = (products.info());
}

function information_9() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[2][1];
    document.body.innerHTML = (products.info());
}

function information_10() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[2][2];
    document.body.innerHTML = (products.info());
}

function information_11() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[2][3];
    document.body.innerHTML = (products.info());
}

function f() {
    var td = document.getElementsByClassName("table");
            td[0].onclick = information;
            td[1].onclick = information_1;
            td[2].onclick = information_2;
            td[3].onclick = information_3;
            td[4].onclick = information_4;
            td[5].onclick = information_5;
            td[6].onclick = information_6;
            td[7].onclick = information_7;
            td[8].onclick = information_8;
            td[9].onclick = information_9;
            td[10].onclick = information_10;
            td[11].onclick = information_11;
}