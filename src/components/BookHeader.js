import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const BookHeader = () => (
  <div>
    <Header as='h1' icon>
        <Icon name='address book' />
        Address Book
        <Header.Subheader>
          Check your list of contacts
        </Header.Subheader>
    </Header>
  </div>
)

export default BookHeader