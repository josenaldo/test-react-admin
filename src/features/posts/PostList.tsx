import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
} from 'react-admin'

const postFilters = [
  <TextInput key="q" source="q" label="Search" alwaysOn />,
  <ReferenceInput key="user" source="userId" reference="users" label="User" />,
]

export default function PostList(props) {
  return (
    <List filters={postFilters}>
      <Datagrid rowClick="edit">
        <TextField source="id" sx={{ fontWeight: 'bold' }} />
        <ReferenceField source="userId" reference="users" link="show" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  )
}
