import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CapsuleSVG1 from "./svg/1.svg";
import CapsuleSVG2 from "./svg/2.svg";
import CapsuleSVG3 from "./svg/3.svg";
import CapsuleSVG4 from "./svg/4.svg";
import Logo from "./svg/logo.svg";
import { ReactComponent as Syringe } from "./svg/syringe.svg";

const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-auto-flow: column;
    justify-content: center;
    @media screen and (max-width: 425px) {
        grid-template-columns: ${({ theme }) => (theme.isMenuBar ? "1fr 1fr 1fr 1fr" : "1fr 1fr")};
        grid-template-rows: ${({ theme }) => (theme.isMenuBar ? "" : "1fr 1fr")};
    }
`;

const ItemContainer = styled.div`
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    padding: 15px;
    margin: 10px 5px 10px 5px;
    border-radius: 10px;
    background-color: ${({ theme }) => (theme.isMenuBar ? "#ffffffaa" : "#ffffffcc")};
    :hover {
        background-color: ${({ theme }) => (theme.isMenuBar ? "#ffffff44" : "#ffffff99")};
    }
    img {
        width: ${({ theme }) => (theme.isMenuBar ? "30px" : "50px")};
        @media screen and (max-width: 768px) {
            width: ${({ theme }) => (theme.isMenuBar ? "30px" : "50px")};
        }
        @media screen and (max-width: 425px) {
            width: ${({ theme }) => (theme.isMenuBar ? "30px" : "40px")};
        }
    }
    @media screen and (max-width: 425px) {
        margin: ${({ theme }) => (theme.isMenuBar ? "0 5px 0 5px" : "10px 5px 10px 5px")};
        padding: ${({ theme }) => (theme.isMenuBar ? "5px" : "15px")};
    }
    @media screen and (max-width: 350px) {
        padding: ${({ theme }) => (theme.isMenuBar ? "5px" : "15px")};
    }
`;
const Menu = styled.div`
    display: flex;
    flex-direction: ${({ theme }) => (theme.isMenuBar ? "row" : "column")};
    align-items: center;
    justify-content: ${({ theme }) => (theme.isMenuBar ? "space-evenly" : "center")};
    padding: ${({ theme }) => (theme.isMenuBar ? "0px" : "20px")};
    width: ${({ theme }) => (theme.isMenuBar ? "100%" : "auto")};
    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
    @media screen and (max-width: 425px) {
        padding: 5px;
    }
`;

const LogoArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin: 25px;
    padding: 0 5px 0 5px;
    width: ${({ theme }) => (theme.isMenuBar ? "auto" : "auto")};
    flex-wrap: wrap;
    border-radius: 10px;
    :hover {
        background-color: ${({ theme }) => (theme.isMenuBar ? "#ffffffbb" : "")};
    }
    @media screen and (max-width: 768px) {
        margin: ${({ theme }) => (theme.isMenuBar ? "0px" : "25px")};
        width: auto;
        h1 {
            font-size: ${({ theme }) => (theme.isMenuBar ? "24px" : "")};
        }
    }
    @media screen and (max-width: 425px) {
        margin: ${({ theme }) => (theme.isMenuBar ? "0px" : "10px")};
    }
    img {
        width: ${({ theme }) => (theme.isMenuBar ? "50px" : "90px")};
        @media screen and (max-width: 768px) {
            width: ${({ theme }) => (theme.isMenuBar ? "40px" : "70px")};
        }
        @media screen and (max-width: 425px) {
            width: ${({ theme }) => (theme.isMenuBar ? "30px" : "60px")};
        }
    }
    p {
        display: ${({ theme }) => (theme.isMenuBar ? "none" : "block")};
    }
`;
const Banner = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: #e3f4fc;
    align-self: ${({ theme }) => (theme.isMenuBar ? "auto" : "stretch")};
    margin: 20px 5px 10px 5px;
    border-radius: 10px;
    justify-content: flex-end;
    align-items: center;
    color: #0f87bf;
    @media screen and (max-width: 425px) {
        margin: 0px 0px 10px 0px;
        align-self: auto;
        #bannerblank {
            display: none;
        }
    }
    @media screen and (max-width: 375px) {
        align-self: auto;
    }
    g {
        fill: #0f87bf;
    }
    #bannerdetail {
        @media screen and (max-width: 1024px) {
            display: ${({ theme }) => (theme.isMenuBar ? "none" : "block")};
        }
        @media screen and (max-width: 375px) {
            display: ${({ theme }) => (theme.isMenuBar ? "none" : "none")};
        }
    }
`;

const SubmitButton = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 15px 10px 20px;
    border-radius: 10px;
    :hover {
        background-color: #ccedfc;
    }
`;

const Item = ({ title, image, index, setTab }) => {
    return (
        <ItemContainer onClick={() => setTab(index)}>
            {title}
            <img src={image} alt="menu" />
        </ItemContainer>
    );
};

const Container = styled.div`
    position: ${({ theme }) => (theme.isMenuBar ? "fixed" : "relative")};
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => (theme.isMenuBar ? "#ffffffee" : "#ffffffaa")};
    border-top: 4px solid #b60005;
`;

const MenuList = ({ setTab }) => {
    return (
        <Container>
            <Menu>
                <LogoArea onClick={() => setTab(0)}>
                    <img src={Logo} alt="로고" />
                    <div style={{ margin: "10px", lineHeight: "12px" }}>
                        <p style={{ fontSize: "24px" }}>여러분을 위한 백신,</p>
                        <h1 style={{ color: "#B60005" }}>비아제로</h1>
                    </div>
                </LogoArea>
                <Banner>
                    <div style={{ display: "flex", alignItems: "center", margin: "10px 0 10px 15px" }}>
                        <Syringe width="30px" />
                        <span id="bannerdetail">&nbsp;&nbsp;비아제로, 지금 접종하러 가기!</span>
                    </div>
                    <div id="bannerblank" style={{ flexGrow: 1 }} />
                    <SubmitButton>
                        <strong>신청</strong>&nbsp;
                        <ArrowForwardIosIcon />
                    </SubmitButton>
                </Banner>
                <MenuContainer>
                    <Item title="타임캡슐" image={CapsuleSVG1} setTab={setTab} index="1" />
                    <Item title="가이드" image={CapsuleSVG2} setTab={setTab} index="2" />
                    <Item title="공지/안내" image={CapsuleSVG3} setTab={setTab} index="3" />
                    <Item title="소개" image={CapsuleSVG4} setTab={setTab} index="4" />
                </MenuContainer>
            </Menu>
        </Container>
    );
};

export default MenuList;
