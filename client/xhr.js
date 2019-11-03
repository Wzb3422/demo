const xhr = new XMLHttpRequest()
function getTodayInfoByXHR() {
  xhr.open('GET', 'http://127.0.0.1:5000/')
  xhr.send()
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const res = JSON.parse(xhr.responseText)
        document.getElementsByTagName('span')[0].innerText = `${res.date} ${res.day}`
      }
    }
  }
}

document.getElementById('btn').onclick = getTodayInfoByXHR
