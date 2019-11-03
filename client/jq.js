function getTodayInfoByJq() {
  $.ajax({
    method: "GET",
    url: "http://127.0.0.1:5000/"
  })
    .done(function(data) {
      console.log(data)
    })
}

document.getElementById('btn').onclick = getTodayInfoByJq
  