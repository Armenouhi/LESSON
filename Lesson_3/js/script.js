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
       date: new Date(),

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
                if (this.productName == this.productArrays[0][j]){
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
       getDate: function() {
           return  this.date.getDate() + " " +  (this.date.getMonth() + 1) + " " + this.date.getFullYear();
       },
       getTerm: function (){
           return  this.date.getDate() + " " +  (this.date.getMonth() + 1) + " " + (this.date.getFullYear() + 1);
       },


       info: function () {
        return  ("Անվանում՝ " + this.getProductName() + "<br> Գին՝ " + this.productPrice + "դրամ<br> Քանակ՝ " + this.getCount() + "<br> Զեղչված՝ " +
            this.discount() + "<br> Կատեգորիա՝ " + this.getProductCategories() + "<br> Արտադրված է՝ " + this.getDate() +
            "<br> Օգտագործման ժամանակը, մինչև՝ " + this.getTerm());
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
    for (let i = 0; i < products.productArrays.length; i++) {
        for (let j = 0; j < products.productArrays[i].length; j++) {
            console.log(products.productName = products.productArrays[i][j]);
        }
    }

    document.body.innerHTML = (products.info());
}

function information_1() {
    alert("Շնորհակալություն գնումների համար")
    products.productName = products.productArrays[0][1];
    document.body.innerHTML = (products.info());
}

function f() {
    var td = document.getElementsByClassName("table");
    for (let i = 0; i <td.length ; i++) {
        td[i].onclick = information;
    }
            td[1].onclick = information_1;
}