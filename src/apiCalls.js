const url = 'http://localhost:3001/api/v1/urls'

export const getUrls = async () => {
  return await fetch(url)
    .then(response =>{
        if (!response.ok) {throw new Error(response.status)}
        return response.json()})
    .catch(error=> console.log(error))
}

export const postUrl = async (postOb) => {
  return await fetch(url, 
    {
    method: "POST", 
    headers: {'Content-Type': "application/json"}, 
    body: JSON.stringify(postOb),
    })
  .then(response =>{
    if (!response.ok) {throw new Error(response.status)}
    return response.json()})
  .catch(error=> console.log(error))
}

// export const deleteUrl = async (deleteOb) => {
//   console.log('trying to delete this:', deleteOb)
//   let url = `http://localhost:3001/api/v1/urls/${deleteOb.id}`
//   return await fetch(url, {method: "DELETE", headers: {'Content-Type': "application/json"}, body: JSON.stringify(deleteOb),})
//   .then(response=> response.json())
//   .catch(error=> console.log(error))
// }