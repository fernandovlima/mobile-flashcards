import React from 'react';
import styled from 'styled-components/native';

const ProgressBar = ({ progress, total, current }) => {
  return (
    <ProgressBarContainer>
      <ContainerFlex>
        <Bar style={{ flex: 1 }}>
          <Fill progress={progress} />
        </Bar>
        <NumQuestions>{`${current}/${total}`}</NumQuestions>
      </ContainerFlex>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 80%;
  margin: 5px;
`;

const ContainerFlex = styled.View`
  align-self: flex-end;
  flex-direction: row;
`;

const NumQuestions = styled.Text`
  color: white;
  margin-left: 5px;
`;

const Bar = styled.View`
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 5px;
  overflow: hidden;
`;

const Fill = styled(Bar)`
  flex: 1;
  width: ${props => props.progress}%;
  background-color: green;
  border: 0;
`;

export default ProgressBar;
