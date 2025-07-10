import React, { useEffect } from "react";
import { Layout, Button } from "antd";
import styled from "styled-components";
import LogoSvg from "../../../public/logo.svg";

const { Header, Content, Footer } = Layout;

type MainLayoutProps = {
  children: React.ReactNode;
};

const StyledLayout = styled(Layout)`
  width: 100%;
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0e1013;
`;

const SignUpBtn = styled(Button)`
  background-color: #4e607b;

  &&:hover,
  &&:focus {
    background-color: #667da0 !important;
  }
`;

const SignInBtn = styled(Button)`
  color: #8fa1bb !important;

  &&:hover,
  &&:focus {
    color: #98b6e4 !important;
  }
`;

const Logo = styled.div`
  border-radius: 8px;
  background-color: #4e607b !important;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
`;

const MainLayout: React.FC<MainLayoutProps & Record<string, unknown>> = ({
  children,
  ...props
}) => {
  useEffect(() => {
    console.log(props, "layout props");
  }, []);

  return (
    <StyledLayout>
      <StyledHeader>
        <Logo>
          <LogoSvg width={50} height={50} />
        </Logo>
        <div>
          <SignUpBtn type={"primary"}>Sign Up</SignUpBtn>
          <SignInBtn type={"link"}>Sign In</SignInBtn>
        </div>
      </StyledHeader>
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
  );
};

export default MainLayout;
