import {
  Admin,
  Resource, // ListGuesser,
  // EditGuesser,
  // ShowGuesser,
} from 'react-admin'

import { UserList } from '@/features/users'

import { dataProvider } from '@/dataProvider'

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
)
