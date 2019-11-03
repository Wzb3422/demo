function createLiNode(text) {
  const liNode = document.createElement('li')
  liNode.innerText = text
  return liNode
}

function renderItems(arr) {
  const ul = document.getElementsByTagName('ul')[0]
  arr.forEach(item => {
    let li = createLiNode(item)
    ul.appendChild(li)
  });
}

function getTodayInfoByAxios() {
  axios
    .get('http://127.0.0.1:5000/')
    .then(res => {
      console.log(res.data)
      document.getElementsByTagName('span')[0].innerText = `${res.data.date} ${res.data.day}`
      renderItems(res.data.recommend)
    })
    .catch(err => {
      throw new Error(err)
    })
}

document.getElementById('btn').onclick = getTodayInfoByAxios
