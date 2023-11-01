import { Theme, useMediaQuery } from '@mui/material'
import {
  Datagrid,
  EmailField,
  List,
  SimpleList,
  TextField,
  UrlField,
} from 'react-admin'

export default function UserList() {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <UrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  )
}
