import { Admin, Resource } from 'react-admin'

import PostIcon from '@mui/icons-material/Book'
import UserIcon from '@mui/icons-material/Group'

import { Dashboard } from '@/features/dashboard'
import { PostCreate, PostEdit, PostList } from '@/features/posts'
import { UserList, UserShow } from '@/features/users'

import { dataProvider } from '@/dataProvider'

export const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="posts"
      create={PostCreate}
      edit={PostEdit}
      list={PostList}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      show={UserShow}
      recordRepresentation="name"
      icon={UserIcon}
    />
  </Admin>
)
