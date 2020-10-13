import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ReactComponent as Syringe } from "../svg/syringe.svg";

const Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Banner = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e3f4fc;
    border-radius: 30px;
    padding: 30px;
    align-items: center;
    color: #0f87bf;
    g {
        fill: #0f87bf;
    }
`;

const SubmitButton = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px 10px 20px;
    border-radius: 10px;
    background-color: #ccedfc;
    :hover {
        background-color: #f5fcff;
    }
`;
const TimeCapsule = () => {
    return (
        <Container>
            <br />
            <h1 style={{ color: "#B60005" }}>아직 서비스가 공개되지 않았습니다!</h1>
            <br />
            <Banner>
                <Syringe width="80px" />
                <br />
                <h2>비아제로, 지금 접종하러 가기!</h2>
                <br />
                <SubmitButton>
                    <strong>신청</strong>&nbsp;
                    <ArrowForwardIosIcon />
                </SubmitButton>
            </Banner>
        </Container>
    );
};

export default TimeCapsule;
