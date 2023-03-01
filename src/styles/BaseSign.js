import styled from "styled-components";

const styles = {
  roadSignText: {
    TextSign: styled.div`
      margin-bottom: 0.5em;
      margin-top: 0.5em;
      max-height: ${(props) => props.maxHeight};
    `,
    Pictogram: styled.img`
      height: ${(props) => props.height};
      border-radius: 0.25em;
    `,
    TextPart: styled.p`
      font-size: ${(props) => props.fontSize};
      font-family: system-ui;
      margin-left: 0.25em;
    `
  },
  roadSignPart: {
    Sign: styled.div`
            background: ${(props) => props.bg ?? "transparent"};
            color: ${(props) => props.fg ?? "black"};
            border: 2px solid ${(props) => props.border ?? "transparent"};
            border-radius: 0.5em;
            padding: 0.5em;
        `,
  },
  roadSignDescription: {
    RoadSignDescription: styled.div`
      background: ${(props) => props.background};
      color: ${(props) => props.color};
      border-color: ${(props) => props.border};
      border: 2px solid;
      border-radius: 0.5em;
      padding: 0.25em 0.5em;
      font-size: 1em;
      font-family: system-ui;
    `,
    PayingSign: styled.span`
      color: orange;
      font-size: 1.5em;
      font-weight: bolder;
    `
  }
};

export default styles;
