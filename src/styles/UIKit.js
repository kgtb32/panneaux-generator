import styled from "styled-components";

export default {
  Line: {
    BaseLine: styled.div`
      border-bottom: 1px solid lightgray;
      width: 100%;
      padding-top: 0.5em;
    `,
  },
  ComboBox: {
    FakeButton: styled.button`
      background: none;
      border: none;
      padding: 0px;
    `,
    ComboBoxSubItem: styled.div`
      margin-top: 2px;
      overflow: hidden;
      position: absolute;
      background: white;
      width: ${(props) => props.width}px;
      -webkit-box-shadow: 5px 7px 37px -3px #d3d3d3;
      box-shadow: 5px 7px 37px -3px #d3d3d3;
      border: 1px solid white;
      max-height: 250px;
      overflow: auto;
      border-radius: 0px 0px 0.5em 0.5em;
    `,
  },
  Switch: {
    SwitchBase: styled.div`
      border: 1px solid #d3d3d3;
      width: fit-content;
      border-radius: 0.5em;
      overflow: hidden;
    `,
    SwitchItem: styled.button`
      background: ${(props) => (props.selected ? "#3498db" : "white")};
      color: ${(props) => (props.selected ? "white" : "black")};
      font-weight: bold;
      border: none;
      border-left: 1px solid #d3d3d3;
      padding: 1em;
    `,
  },
  Dialog: {
    DialogBase: styled.div`
      opacity ${(props) => (props.withOpacity ? "0.5" : "1")};
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: ${(props) => (props.withOpacity ? "lightgray" : "none")};
      ${(props) => (props.withOpacity ? "z-index: 2;" : "z-index: 1;")}
    `,
    DialogWindow: styled.div`
      width: 50%;
      background: white;
      border: 0px solid #d3d3d3;
      border-radius: 1em;
      height: 70%;
      min-height: 350px;
      min-width: 500px;
      z-index: 3;
      position: relative;
      margin: auto;
      flex-flow: wrap;
      display: flex;
      flex-direction: row;
      flex-flow: column;
      padding: 1em;
      -webkit-box-shadow: 5px 7px 37px -3px #d3d3d3;
      box-shadow: 5px 7px 37px -3px #d3d3d3;
    `,
    DialogTitle: styled.div`
      padding: 0.5em;
      display: flex;
      justify-content: space-between;
      font-size: 1.25em;
      vertical-align: middle;
      align-items: center;
      border-bottom: 1px solid lightgray;
    `,
    DialogWindowBase: styled.div`
      padding: 0.5em;
      overflow: auto;
      flex: 1;
      height: 100%;
    `,
  },
};
