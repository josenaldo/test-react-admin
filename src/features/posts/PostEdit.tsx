import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from 'react-admin'

export default function PostEdit(props) {
  return (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" link="show" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  )
}

function PostTitle() {
  const record = useRecordContext()

  return <span>{record ? `Post #${record.id} - ${record.title}` : ''}</span>
}
