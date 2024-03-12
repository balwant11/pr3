import styled from "styled-components"

function TotalScore({score}) {
  return (
    <div>
        <ScoreContainer>
            <h1>{score}</h1>
            <p>Total Score</p>
        </ScoreContainer>
    </div>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;