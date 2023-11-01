import { Admin, ListGuesser, Resource, ShowGuesser } from 'react-admin'

import { PostList } from '@/features/posts'
import { UserList, UserShow } from '@/features/users'

import { dataProvider } from '@/dataProvider'

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} />
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      recordRepresentation="name"
    />
  </Admin>
)
