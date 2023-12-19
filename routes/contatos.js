import express from "express"
import { getContatos, addContato, editContato, elimContato } from "../controllers/contato.js"

const router = express.Router()

router.get("/", getContatos)

router.post("/", addContato)

router.put("/:id", editContato)

router.delete("/:id", elimContato)

export default router