import { EmailField, Show, SimpleShowLayout, TextField } from 'react-admin'

export default function UserShow(props) {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="id" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="address.street" />
        <TextField source="phone" />
        <TextField source="website" />
        <TextField source="company.name" />
      </SimpleShowLayout>
    </Show>
  )
}
