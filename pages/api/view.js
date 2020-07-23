import Db from '../../lib/database'

export default async function view (req, res) {
  if (!req.query.id) {
    return res.status(400).json({
      error: 'Missing "id" query parameter'
    })
  }

  const ref = Db().ref('views').child(req.query.id)
  const { snapshot } = await ref.transaction(currentViews => {
    // if it has never been set it returns null
    if (currentViews === null) currentViews = 0
    return currentViews + 1
  })

  res.status(200).json({
    total: snapshot.val()
  })
}
