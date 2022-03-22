import { useRecoilState } from "recoil";
import styled from "styled-components";
import { chooseTheme } from "./atoms";
import { pastelEarthTheme, retroTealTheme, vintageBeigeTheme } from "./theme";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Select = styled.select`
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.buttonColor};
  color: ${(props) => props.theme.textColor};
`;

function SelectTheme() {
  const [Theme, setTheme] = useRecoilState(chooseTheme);

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const choose = event.currentTarget.value;

    choose === "vintageBeigeTheme" && setTheme(vintageBeigeTheme);
    choose === "retroTealTheme" && setTheme(retroTealTheme);
    choose === "pastelEarthTheme" && setTheme(pastelEarthTheme);
  };
  console.log(Theme);

  return (
    <Container>
      <Select onChange={onChange}>
        <option value="pastelEarthTheme">pastelEarthTheme</option>
        <option value="vintageBeigeTheme">vintageBeigeTheme</option>
        <option value="retroTealTheme">retroTealTheme</option>
      </Select>
    </Container>
  );
}

export default SelectTheme;
