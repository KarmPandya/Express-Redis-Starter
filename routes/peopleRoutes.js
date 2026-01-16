import express from 'express'
import { getAllPeople, createPerson } from '../controllers/peopleController.js'

const router = express.Router()

router.get('/', getAllPeople)
router.post('/', createPerson)

export default router;