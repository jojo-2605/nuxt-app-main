import Database from 'better-sqlite3'

const db = new Database('database.db')

export default defineEventHandler(async(e) => {
const body = await readBody(e)

//validation minimal
if(!body || !body.title || !body.duration) {
  throw createError ({
    statusCode: 400,
    statusMessage: 'Les champs title et duration sont requis'
  })
}

//2. insérer l'activité dans SQLite
const rq = db.prepare('INSERT INTO activities (title, duration) VALUES (?, ?)')
const info = rq.run(body.title, body.duration)

//3. renvoyer l'éléement créé avec son nouvel ID
return {
  id: info.lastInsertRowid,
  title: body.title,
  duration: body.duration,
}
})