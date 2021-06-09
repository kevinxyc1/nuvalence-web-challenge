import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Detail from './Detail'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PersonCard = (props) => (
    <Card>
        <Image src={props.picture} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{props.firstname}</Card.Header>

            <Card.Description>
                <a href={'tel:' + props.phone} style={{ color: 'black' }}>{props.phone}</a>
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Popup trigger={<a>
            <Icon name='user' />
                Detail
        </a>} position="right center"
        contentStyle={{ padding: '0px', border: 'none', width: '300px' }}>
            <div style={{padding: "30px"}}>
                <Detail firstname={props.firstname} lastname={props.lastname}
                    city={props.city} country={props.country} email={props.email} 
                    dob={props.dob} phone={props.phone}/>
            </div>
        </Popup>
        </Card.Content>
    </Card>
)

export default PersonCard
