import styled from "styled-components";
const NumberSelector = ({error,SetError,selectedNumber, SetSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  
  const numberSelectorHandler = (value) =>{
    SetSelectedNumber(value);
    SetError("");
  }
  return (
    <>
      <Number>
      <p className="error">{error}</p>
        {arrNumber.map((value, i) => (
          <Box
            isselected={value === selectedNumber}
            key={i}
            onClick={() => {
              numberSelectorHandler(value);
            }}
          >
            {value}
          </Box>
        ))}
      </Number>
      <Text>Select Number</Text>
    </>
  );
};

export default NumberSelector;
const Box = styled.div`
  width: 50px;
  height: 50px;
  padding: 10px 25px 18px 20px;
  border: 1px solid #000;
  box-sizing: border-box;
  font-size: 20px;
  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "Black")};
`;
const Number = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  flex-wrap: wrap;
  .error{
    color: red;
    font-weight: 600;
    /* position: absolute; */
    /* left: 0; */
    /* right: 0; */
    text-align: right;
    z-index: -1;
    flex: 100%;
  }
`;
const Text = styled.p`
  text-align: right;
`;
