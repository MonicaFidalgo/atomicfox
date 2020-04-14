export function uspData() {
  var http = new XMLHttpRequest();
  var url = "https://dev.to/api/articles?username=monicafidalgo";
  var method = "GET";

  http.open(method, url);
  http.onreadystatechange = function () {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText);

      var myDiv = document.getElementById("mydiv");

      console.log(data.length);
      console.log(data);

      var shuffled = data.shuffle();

      var selected = shuffled.slice(0, 3);

      Object.keys(selected).forEach(function (item) {
        var myUSP = `
        <div class="usp">
          <div class="usp__content" id="myContent">
          <span class="usp__icon">
                <img src= ${data[item].social_image}  />
            </span>
            <span class="usp__title">
                <p> ${data[item].title} </p>
            </span>
            <span class="usp__text"> ${data[item].description}</span>
          </div>
        </div>`;

        myDiv.innerHTML += myUSP;
      });
    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
      console.log("Error!");
    }
  };

  http.send();
}
