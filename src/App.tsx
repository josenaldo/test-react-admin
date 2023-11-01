import { Admin, Resource } from 'react-admin'

import { PostCreate, PostEdit, PostList } from '@/features/posts'
import { UserList, UserShow } from '@/features/users'

import { dataProvider } from '@/dataProvider'

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      create={PostCreate}
      edit={PostEdit}
      list={PostList}
    />
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      recordRepresentation="name"
    />
  </Admin>
)
