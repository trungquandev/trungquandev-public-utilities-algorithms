/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import { ObjectId } from 'mongodb'

import { col } from '~/config/db'
import { User } from '~/modules/users/user.types'
import { objectIdToString } from '~/utils/objectIdToString'

export const UserRepo = {
  async findByEmail(email: string) {
    return col.users().findOne({ email })
  },

  async create(data: Omit<User, '_id'>) {
    const now = new Date()
    const doc = { ...data, createdAt: now, updatedAt: now }
    const res = await col.users().insertOne(doc)
    return { ...doc, _id: objectIdToString(res.insertedId) }
  },

  async list() {
    return col.users().find().toArray()
  },

  async findById(id: string) {
    return col.users().findOne({ _id: new ObjectId(id) })
  },
}
