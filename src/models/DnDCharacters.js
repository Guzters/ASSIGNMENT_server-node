/* eslint-disable prettier/prettier */
import db from '../utils/db'

export const getDnDChars = async () => db.dnDCharacters.findMany()

export const getDnDChar = async (id) => 
db.dnDCharacters.findUnique({
    where: { characterId: id },
  })

export const addCharacter = async (name) => db.dnDCharacters.create({ data: { name } })