export default defineEventHandler(async(e) => {
  const body = await readBody(e)
  
  try {
    const [result] = await db.query(
      'INSERT INTO motos (marque, model, couleur) VALUES (?, ?, ?)', 
      [body.marque, body.model, body.couleur]
    )
    return {
      id: result.insertId,
      model: body.model,
      marque: body.marque,
      couleur: body.couleur
    }
  } catch(error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Erreur MySQL: ${error.message}`
    })
  }
})