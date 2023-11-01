import { Admin, ListGuesser, Resource } from 'react-admin'

import { PostList } from '@/features/posts'
import { UserList } from '@/features/users'

import { dataProvider } from '@/dataProvider'

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource name="users" list={UserList} recordRepresentation="name" />
  </Admin>
)
