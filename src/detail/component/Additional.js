import styled from "styled-components";
import toKorean from "../../common/toKorean";
import { Chip, Divider } from "@material-ui/core";
import device from "../../common/device";

const AdditionalContainer = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
const AdditionalHeader = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;
  @media ${device.mobileL} {
    font-size: 1.2rem;
  }
`;
const AdditionalWrap = styled.div`
  min-height: 22px;
  padding: 6px 0;
  width: 50%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.mobileL} {
    width: 100%;
    padding: 0 30px;
  }
`;
const AdditionalInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const AdditionalLeft = styled.div`
  display: inline;
  width: 50%;
  font-weight: bold;
  @media ${device.mobileL} {
    text-align: center;
    font-size: 0.7rem;
  }
`;
const AdditionalRight = styled.div`
  width: 50%;
  font-weight: bold;
  color: ${(props) =>
    props.color === "red" ? "red" : props.color === "blue" ? "blue" : ""};
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }
`;
const StyledChip = styled(Chip)`
  & .MuiChip-label {
    padding: 20px;
    @media ${device.mobileL} {
      padding: 10px;
      font-size: 0.7rem;
    }
  }
  @media ${device.mobileL} {
    height: 20px !important;
  }
`;
const ShorterDivider = styled(Divider)`
  width: 100%;
  margin: 30px 0 0 10px !important;
`;

export default function AdditionalInfos({ additional }) {
  return (
    <AdditionalContainer>
      <AdditionalHeader>
        상세정보
        <ShorterDivider />
      </AdditionalHeader>
      {additional.map((info, i) => {
        const key = toKorean(info[0]);
        if (key && info[1]) {
          return (
            <AdditionalWrap key={i}>
              <AdditionalInfo>
                <AdditionalLeft>
                  <StyledChip variant="outlined" label={key} />
                </AdditionalLeft>
                <AdditionalRight
                  color={
                    info[1] === "없음" || info[1] === "불가"
                      ? "red"
                      : info[1] === "있음" ||
                        info[1] === "가능" ||
                        info[1] === "무료"
                      ? "blue"
                      : ""
                  }
                  dangerouslySetInnerHTML={{ __html: info[1] }}
                />
              </AdditionalInfo>
            </AdditionalWrap>
          );
        }
        return null;
      })}
    </AdditionalContainer>
  );
}
