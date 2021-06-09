import React, { useState } from 'react';
import axios from 'axios';
import PersonCard from './components/Card'
import BookHeader from './components/BookHeader'
import { Container, Card, Button, Input, Message, Form } from 'semantic-ui-react'
import './App.css';

function App() {
  const [people, setPeople] = useState(null);
  const [numberContact, setNumberContact] = useState(0);
  const [buttontext, setButtonText] = useState("Click to see");
  const [validated, setValidated] = useState(true);

  // Change number of contacts based on input value
  const onChange = (event) => {
    setNumberContact(event.target.value);
    console.log(numberContact);
  }

  // Fetch data from API if input is valid
  const fetchData = () => {
    if (numberContact <= 0 || isNaN(numberContact)) {
      setValidated(false);
    } else {
      setValidated(true);
      setButtonText("Resubmit");
      axios({
        method: "get",
        url: 'https://randomuser.me/api/?results=' + numberContact
      }).then((response) => {
        setPeople(response.data.results);
        console.log(response.data.results);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <div className="App">

      {/* Header */}
      <div className="header">
        <BookHeader />
      </div>
      <br />

      {/* input form to collect number of contacts to display and call API */}
        <Form onSubmit={fetchData}>
        <Input size="large" onChange={onChange} placeholder='# of contacts to display...' />
        <Input type="hidden" value={numberContact} />
        <Button type="submit" >{buttontext}</Button>
        <br />
        </Form>

      {/* display error message if input is invalid */}
      { validated ? (
        <></>
      ) : (
        <div className="msg" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          marginTop: '20px'
        }}>
          <Message
            error
            header='Invalid input'
            content='You can only enter a positive integer'
          />
        </div>
      )}

      {/* Display data from API inside a container of cards*/}
      <Container style={{ marginTop: "35px" }}>
        <Card.Group itemsPerRow={5} stackable style={{ marginTop: "20px" }}>
          {people &&
            people.map((person, index) => {
              return (
                <div className="card" key={index + 1}>
                  <PersonCard firstname={person.name.first} lastname={person.name.last} picture={person.picture.large}
                    city={person.location.city} country={person.location.country} email={person.email} dob={person.dob.date.substring(0, 10)}
                    phone={person.phone} />
                </div>
              );
            })}
        </Card.Group>
      </Container>

      <br />
      <br />
    </div>
  );
}

export default App;
