// 1. récupération du paramètre "id" depuis l'url
export default defineEventHandler((event) => {
  const ID = getRouterParam(event, 'id')
  
  const index = fruitsState.findIndex(item => item.id == ID)
  
  //2. gestion du cas où la ressource n'existe pas
  if(index == -1) {
    throw createError({
      statusCode: 404,
      statusMessage:`Le fruit avec l'ID ${ID} n'as pas été trouvé.`
    })
  }
  
  //3. Renvoie de l'objet trouvé 
  fruitsState.splice(index, 1)
  setHeader(e, "Content-Type", "application/json")
  setResponseStatus(e, 201)
  return fruitsState
})