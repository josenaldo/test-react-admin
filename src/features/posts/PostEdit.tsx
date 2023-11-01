import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin'

export default function PostEdit(props) {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" link="show" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  )
}
