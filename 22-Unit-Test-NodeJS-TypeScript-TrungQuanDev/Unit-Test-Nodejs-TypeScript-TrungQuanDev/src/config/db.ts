/** Author: @trungquandev (TrungQuanDev - Một Lập Trình Viên) - https://youtube.com/@trungquandev */

import { MongoClient, Db, Collection, OptionalId } from 'mongodb'

import { logger } from './logger'

import type { User} from '~/modules/users/user.types'

let client: MongoClient
let db: Db

export async function connectMongo(uri: string) {
  if (db) return db // already connected

  client = new MongoClient(uri)
  await client.connect()
  db = client.db() // default DB name from URI

  logger.info('Connected to MongoDB')
}

export function getDb(): Db {
  if (!db) throw new Error('MongoDB not initialized')
  return db
}

export const col = {
  users: (): Collection<OptionalId<User>> => getDb().collection('users'),

  /** Tương lai sau này làm tiếp với các collection khác, đón chờ khóa học siêu phẩm trong năm 2026 nhé =)) */
  // sessions: (): Collection<OptionalId<UserSession>> => getDb().collection('user_sessions'),
  // loginHistory: (): Collection<OptionalId<LoginHistory>> => getDb().collection('login_history'),
  // loginAttempts: (): Collection<OptionalId<LoginAttempt>> => getDb().collection('login_attempts'),
  // userFirstLoginToken: (): Collection<OptionalId<UserFirstLoginToken>> => getDb().collection('user_first_login_tokens'),
}

// Graceful shutdown
process.on('SIGINT', async () => {
  if (client) await client.close()
  process.exit(0)
})
