import styled from 'styled-components'
import { Button } from '../styled/Button';

function StartGame(props) {
  return (
    <Container>
        <img src='./images/dices.png' alt='dices'/>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={props.toggleGamePlay}>Play Now</Button>
        </div>
       
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    
    .content {
        display: flex;
        flex-direction: column;
        align-items: end;
        h1{
        font-size: 96px;
    }
    }
`;

