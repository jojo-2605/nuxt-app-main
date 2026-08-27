export default defineEventHandler(async(event) => {
    try {
      const [rows] = await db.query('SELECT * FROM moto')
      return rows
    }catch(error) {
      throw createError({
        statusCode: 500,
        statusMessage: `Erreur MySQL: ${error.message}`
      })
    }
})