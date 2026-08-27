// 1. récupération du paramètre "id" depuis l'url
export default defineEventHandler((event) => {
  const ID = getRouterParam(event, 'id')
  
  //const index = fruitsState.findIndex(item => item.id == ID)

  const fruit = fruitsState.findIndex(item => item.id === Number(ID))
  
  //2. gestion du cas où la ressource n'existe pas
  if(!fruit) {
    throw createError({
      statusCode: 404,
      statusMessage:`Le fruit avec l'ID ${ID} n'as pas été trouvé.`
    })
  }
  console.log(ID);
  
  //3. Renvoie de l'objet trouvé 
  return fruit
})