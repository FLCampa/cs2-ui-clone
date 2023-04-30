import React from "react";
import ReactCompareImage from "react-compare-image";

import { Container, Header, CompareImageWrapper, ImageLabel } from "./styles";

interface CompareSliderProps {
  headerText: string;
  bodyText: string;
  exampleMap: string;
  leftImageName: string;
  rightImageName: string;
}

const CompareSlider: React.FC<CompareSliderProps> = ({
  headerText,
  bodyText,
  exampleMap,
  leftImageName,
  rightImageName,
}) => {
  return (
    <Container>
      <Header>{headerText}</Header>

      <h4>{bodyText}</h4>

      <p>
        Mapa de exemplo: <b>{exampleMap}</b>
      </p>

      <CompareImageWrapper>
        <ReactCompareImage
          leftImage={`/src/assets/images/${leftImageName}.jpg`}
          rightImage={`/src/assets/images/${rightImageName}.jpg`}
        />

        <ImageLabel left>CS2</ImageLabel>
        <ImageLabel>CS:GO</ImageLabel>
      </CompareImageWrapper>
    </Container>
  );
};

export default CompareSlider;