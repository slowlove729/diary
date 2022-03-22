import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 3em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border: 2px solid ${(props) => props.theme.buttonColor};
  border-radius: 15px;
`;

const Month = styled.div`
  font-size: 1.5em;
  padding: 1em;
`;

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Oug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function Main() {
  return (
    <Container>
      {months.map((month) => (
        <Link key={month} to={`/calender/${month}/`} state={{ month: month }}>
          <Month>{month}</Month>
        </Link>
      ))}
    </Container>
  );
}

export default Main;
