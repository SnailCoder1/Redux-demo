import React from 'react';
import { connect } from 'react-redux';
import {Container, Header, Button, Input } from 'semantic-ui-react';


const App = (props) => {
  return (
    <>
      <Container>
        <Header as='h1'>{props.state.greeting}</Header>
        <Input
          placeholder='New greeting...'
          onBlur={(event) => props.dispactch({type: 'PORPOSE_GREETING',
        greeting: event.target.value })}
        />

        <Button
          primary
          onClick={() => props.dispactch({ type: 'CHANGE_GREETING',
          greeting: 'Hello Venus' })}
        >
        </Button>
      </Container>
    </>
  );
}

  const mapStateToProps = (state) => {
    return {
      state: state 
    }
  }

export default connect(mapStateToProps) (App)
