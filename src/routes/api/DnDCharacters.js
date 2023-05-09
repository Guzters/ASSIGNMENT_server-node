/* eslint-disable prettier/prettier */
import { Router } from 'express'

import { getDnDChars, getDnDChar, addCharacter } from '../../models/DnDCharacters'

const router = Router()

router.get('/', async (req, res) => {
    const DnDChars = await getDnDChars()
    res.send(DnDChars)
})

router.get('/:id', async (req, res) => {
    const DnDChar = await getDnDChar(req.params.id)
    if(DnDChar) {
        res.send(DnDChar)
    } else {
        res.status(404).send({ msg: 'Character not found' })
    }
})

// router.post('/', async (req, res) => {
//     const companyName = req.body.name
//     if (companyName) {
//         const company = await addCompany(companyName)
//         res.send(company)
//     } else {
//         res.status(404).send({ msg: 'Company name is required' })
//     }
// })

// router.post('/:id', async (req, res) => {
//     const companyId = req.params.id
//     const company = await getCompany(companyId)
//     if (company) {
//         const departmentName = req.body.name
//         if (departmentName) {
//             const department = await addDepartment(departmentName, companyId)
//             res.send(department)
//         } else {
//             res.status(404).send({ msg: 'Department name is required' })
//         }
//     } else {
//         res.status(404).send({ msg: 'Company does not exist' })
//     }
// })

export default router