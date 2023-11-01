import {
  Admin,
  Resource,
  // ListGuesser,
  // EditGuesser,
  // ShowGuesser,
} from 'react-admin'
import { dataProvider } from '@/dataProvider'
import { UserList } from '@/features/users'

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
)
