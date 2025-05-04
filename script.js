

db.Usercollection.find(
    {
        "status":"active"
    },
    {
        "age":1
    }
)
db.Usercollection.find({
    email: { $exists: false }
  })
  db.Usercollection.find({
    email: null
  })
  db.Usercollection.find({
    email: { $type: "undefined" }
  })
  