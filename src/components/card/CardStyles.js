import styled from 'styled-components/native';

export const Face = styled.View`
  flex: 1;
  justify-content: space-between;
  color: #444;
  border-radius: 5px;
  background: #ccc;
`;

export const Back = styled(Face)`
  background-color: #444;
  color: #ccc;
`;

export const Result = styled(Face)`
  background-color: rgba(0, 0, 0, 0);
`;

export const QuestionTxt = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 10px 20px;
`;

export const AnswerTxt = styled(QuestionTxt)`
  color: white;
`;

export const ResultTxt = styled(QuestionTxt)`
  color: white;
`;

export const ScoreTxt = styled(AnswerTxt)`
  font-size: 16px;
`;
