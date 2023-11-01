import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from 'react-admin'

export default function PostList(props) {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" sx={{ fontWeight: 'bold' }} />
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  )
}
