import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface RouteState {
  state: {
    month: string;
  };
}

const Calender = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.div``;

function Month() {
  const month = useLocation() as RouteState;
  return (
    <>
      <span>{month.state.month}</span>
      <Calender>
        <Day>1</Day>
        <Day>2</Day>
        <Day>3</Day>
        <Day>4</Day>
        <Day>5</Day>
        <Day>6</Day>
        <Day>7</Day>
        <Day>8</Day>
        <Day>9</Day>
        <Day>10</Day>
      </Calender>
    </>
  );
}

export default Month;
