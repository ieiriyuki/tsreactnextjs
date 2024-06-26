import { fetcher } from '../../utils'
import type { ApiContext, User } from 'types'

export type GetUserParams = {
  id: number
}

/**
 * ユーザー情報を取得する
 * @param context APIコンテキスト
 * @param params リクエストパラメータ
 * @returns ユーザー情報
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  /** sample response
  {
    "id": "1",
    "username": "taketo",
    "displayName": "Taketo Yoshida",
    "email": "taketo@example.com",
    "profileImageUrl": "/users/1.png",
    "description": "Hello, I'm taketo. Nice to meet you!",
  }
  */
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getUser
