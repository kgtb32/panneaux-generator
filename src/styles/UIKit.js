import styled from "styled-components";

export default {
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
      width: ${(props) => props.width}px;
      -webkit-box-shadow: 5px 7px 37px -3px #d3d3d3;
      box-shadow: 5px 7px 37px -3px #d3d3d3;
      border: 1px solid white;
      border-radius: 0px 0px 0.5em 0.5em;
    `,
  },
};
