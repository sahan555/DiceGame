import styled from "styled-components";

const Rules = () => {
  return (
    <Container>
      <h2>How to play dice game</h2>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice{" "}
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </Container>
  );
};

export default Rules;
const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  background: #fbf1f1;
  padding: 20px;

  h2 {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
