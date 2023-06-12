export const getUrls = async () => {
  return await fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = async (postOb) => {
  console.log(postOb)
  let url = 'http://localhost:3001/api/v1/urls'
  return await fetch(url, {method: "POST", headers: {'Content-Type': "application/json"}, body: JSON.stringify(postOb),})
  .then(response=> response.json())
}