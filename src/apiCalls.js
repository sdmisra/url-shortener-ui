export const getUrls = async () => {
  return await fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .catch(error=> console.log(error))
}

export const postUrl = async (postOb) => {
  let url = 'http://localhost:3001/api/v1/urls'
  return await fetch(url, {method: "POST", headers: {'Content-Type': "application/json"}, body: JSON.stringify(postOb),})
  .then(response=> response.json())
  .catch(error=> console.log(error))
}

// export const deleteUrl = async (deleteOb) => {
//   console.log('trying to delete this:', deleteOb)
//   let url = `http://localhost:3001/api/v1/urls/${deleteOb.id}`
//   return await fetch(url, {method: "DELETE", headers: {'Content-Type': "application/json"}, body: JSON.stringify(deleteOb),})
//   .then(response=> response.json())
//   .catch(error=> console.log(error))
// }