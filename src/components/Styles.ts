import styled from "styled-components";
import { Input, Segment } from "semantic-ui-react";
import BGImage from "../images/background_2.jpg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px 0;
  justify-content: center;
  background-image: url(${BGImage});
  background-size: cover;
`;

export const GlassPanel = styled(Segment)`
  background: rgba(255, 255, 255, 0.25) !important;
  box-shadow: 0 8px 16px 0 rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;

export const Wrapper = styled(GlassPanel)`
  display: flex;
  flex-direction: column;
  max-width: 512px;
  width: 100%;
`;

export const ViewModeToggler = styled(GlassPanel)`
  display: block;
  position: fixed !important;
  right: 32px;
  bottom: 32px;
  height: 52px;
`;

export const CustomIcon = styled.span`
  font-size: 48px;
  margin-right: 8px;
  margin-left: -8px;
`;

export const TodoListWrapper = styled.div`
  flex-grow: 1;
`;

export const TodoContent = styled.span`
  font-size: 18px;
  text-decoration: ${(props: { completed: boolean }) =>
    props.completed ? "line-through" : "normal"};
  margin-left: 8px;
`;

export const TodoItemWrapper = styled(Segment)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  button {
    opacity: 0;
    transition: all 1s;
    transform: scale(0);
  }

  &:hover {
    font-weight: bold;

    button {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const OvalInput = styled(Input)`
  input {
    border-top-left-radius: 32px !important;
    border-bottom-left-radius: 32px !important;
  }
  button {
    border-top-right-radius: 32px !important;
    border-bottom-right-radius: 32px !important;
  }
`;
