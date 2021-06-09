import React from 'react'
import { List } from 'semantic-ui-react'

const Detail = (props) => (
    <List>
        <List.Item>
            <List.Icon name='user' />
            <List.Content>{props.firstname} {props.lastname}</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='marker' />
            <List.Content>{props.city}, {props.country}</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='mail' />
            <List.Content>
                <a href={'mailto:' + props.email}>{props.email}</a>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='phone' />
            <List.Content>
                <a href={'tel:' + props.phone}>{props.phone}</a>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='birthday' />
            <List.Content> {props.dob} </List.Content>
        </List.Item>
    </List>
)

export default Detail
