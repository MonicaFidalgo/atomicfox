export function uspData() {
  var http = new XMLHttpRequest();
  var url = "https://dev.to/api/articles?username=monicafidalgo";
  var method = "GET";

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText);
      // var divImage = document.getElementById("usp-icon");
      // var divTitle = document.getElementById("usp-title");
      var myDiv = document.getElementById("mydiv");
      console.log(data.length);
      console.log(data);

      Object.keys(data).forEach(function (item) {
        var myUSP = `
        <div class="c-usp">
          <div class="c-usp__content" id="myContent">
          <span class="c-usp__icon">
                <img src= ${data[item].social_image}  />
            </span>
            <span class="c-usp__title">
                <p> ${data[item].title} </p>
            </span>
            <span class="c-usp__text"> ${data[item].description}</span>
          </div>
        </div>`;
        //   var myTitle =
        //     '<span class="c-usp__title"><p>My title is:' +
        //     data[item].title +
        //     "</p></span>";
        //   var myImage =
        //     '<span class="c-usp__icon"><img src="' +
        //     data[item].social_image +
        //     '" /></span>';

        myDiv.innerHTML += myUSP;
      });
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
      console.log("Error!");
    }
  };

  http.send();
}
