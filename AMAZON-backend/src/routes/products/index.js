const express = require("express")
const db = require("../../db")
const multer = require("multer");
const fs = require("fs-extra");
const router = express.Router();


const path = require("path")
const downloadPath = path.join(__dirname, "../../../public/products/img")
const upload = multer()


router.get("/", async (req, res) => {

  const response = await db.query('SELECT * FROM "products"')
  res.send(response.rows)
})

router.get("/:id", async (req, res) => {
  const response = await db.query('SELECT * FROM "products" WHERE _id= $1',
    [req.params.id])

  if (response.rowCount === 0)
    return res.status(404).send("Not found")

  res.send(response.rows[0])
})

router.post("/", async (req, res) => {
  const response = await db.query(`INSERT INTO "products" ( productname, description, brand, imageurl, price, category, createdat, updatedat ) 
                                     Values ($1, $2, $3, $4, $5, $6, $7, $8)
                                     RETURNING *`,
    [req.body.productname, req.body.description, req.body.brand, req.body.imageurl, req.body.price, req.body.category, req.body.createdat, req.body.updatedat])

  console.log(response)
  res.send(response.rows[0])
})


router.put("/:id", async (req, res) => {
  try {
    let params = []
    let query = 'UPDATE "products" SET '
    for (bodyParamName in req.body) {
      query += // for each element in the body I'll add something like parameterName = $Position
        (params.length > 0 ? ", " : '') + //I'll add a coma before the parameterName for every parameter but the first
        bodyParamName + " = $" + (params.length + 1) // += Category = $1 

      params.push(req.body[bodyParamName]) //save the current body parameter into the params array
    }

    params.push(req.params.id) //push the asin into the array
    query += " WHERE _id = $" + (params.length) + " RETURNING *" //adding filtering for ASIN + returning
    console.log(query)

    const result = await db.query(query, params) //querying the DB for updating the row


    if (result.rowCount === 0) //if no element match the specified ASIN => 404
      return res.status(404).send("Not Found")

    res.send(result.rows[0]) //else, return the updated version
  }
  catch (ex) {
    console.log(ex)
    res.status(500).send(ex)
  }
})


router.delete("/:id", async (req, res) => {
  const response = await db.query(`DELETE FROM "products" WHERE _id= $1`, [req.params.id])

  if (response.rowCount === 0)
    return res.status(404).send("Not Found")

  res.send("OK")
})

router.post("/upload", upload.array("file"), (req, res)=> {
  const arrayImg = req.files.map(img =>
      fs.writeFileSync(path.join(downloadPath, img.originalname), img.buffer)
      )
      Promise.all(arrayImg)
      res.send("imgs was uploaded")
})


module.exports = router