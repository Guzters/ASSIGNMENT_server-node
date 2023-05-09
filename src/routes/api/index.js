/* eslint-disable prettier/prettier */
import { Router } from 'express'
import basicAuth from 'express-basic-auth'

import persons from './persons'
import companies from './companies'
import departments from './departments'
import employees from './employees'
import dndcharacters from './DnDCharacters'

const router = Router()

router.use(
    basicAuth({
      users: { [process.env.ADMIN_USER]: process.env.ADMIN_PASSWORD },
    }),
  )

router.get('/', (req, res) => {
    res.send({ msg: 'Inside API Endpoints' })
})

router.use('/persons', persons)
router.use('/companies', companies)
router.use('/departments', departments)
router.use('/employees', employees)
router.use('/dndcharacters', dndcharacters)

export default router