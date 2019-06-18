const endpoint = "https://yamabiko-be.yiio.now.sh/api/echo?call=";

function apply() {
  const call = document.getElementById("in").value;
  fetch(endpoint + call)
    .then(response => {
      if(response.ok) {
        response.json().then(resJson => {
          document.getElementById("out").innerHTML = resJson.message;
        });
      }
    });
}
