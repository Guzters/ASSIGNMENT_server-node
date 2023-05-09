/* eslint-disable prettier/prettier */
import db from '../utils/db'

export const getDnDChars = async () => db.DnDCharacters.findMany()

export const getDnDChar = async (id) => 
db.DnDCharacters.findUnique({
    where: { characterId: id },
  })

export const addCharacter = async (name) => db.DnDCharacters.create({ data: { name } })