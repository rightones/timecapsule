import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import MenuList from "./menu";
import "./App.css";
import UnivSig from "./svg/univsig.svg";
import TimeCapsule from "./page/TimeCapsule";

const MainPageContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    justify-items: stretch;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f9f9f9;
    @media screen and (max-width: 425px) {
        grid-template-rows: 1fr auto auto;
    }
`;

const PageContainer = styled.div`
    display: flex;
    justify-items: stretch;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
`;

const MobileBlank = styled.div`
    display: none;
    @media screen and (max-width: 425px) {
        display: block;
    }
`;

const PCBlank = styled.div`
    display: block;
    @media screen and (max-width: 425px) {
        display: none;
    }
`;

function App() {
    const [tab, setTab] = useState(0);
    const pageChange = () => {
        switch (tab) {
            case 1:
                return <TimeCapsule />;
            case 2:
                return <TimeCapsule />;
            case 3:
                return <TimeCapsule />;
            case 4:
                return <TimeCapsule />;
            default:
                return <TimeCapsule />;
        }
    };
    const isMenuBar = () => {
        if (tab === 0) {
            return { isMenuBar: false };
        }
        return { isMenuBar: true };
    };
    const mainPageChange = () => {
        if (tab === 0) {
            return (
                <MainPageContainer>
                    <PCBlank />
                    <MenuList setTab={setTab} isMenuBar={isMenuBar()} />
                    <MobileBlank />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                        <img src={UnivSig} width="300px" alt="서강대학교 로고" style={{ margin: "20px" }} />
                    </div>
                </MainPageContainer>
            );
        }
        return (
            <PageContainer>
                <MenuList setTab={setTab} />
                {pageChange()}
                <br />
                <br />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        border: "2px solid #eee",
                        backgroundColor: "#eee",
                    }}
                >
                    <img src={UnivSig} width="300px" alt="서강대학교 로고" style={{ margin: "20px" }} />
                </div>
            </PageContainer>
        );
    };
    return <ThemeProvider theme={isMenuBar()}>{mainPageChange()}</ThemeProvider>;
}

export default App;
