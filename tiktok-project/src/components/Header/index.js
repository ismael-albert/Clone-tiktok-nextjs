import {
    Container,
    Content,
    LogoContainer,
    LogoIcon,
    Logo,
    OptionsContainer,
    Icon,
    Avatar,
  } from './styles';
  
  function Header() {
    return (
      <Container>
        <Content>
          <LogoContainer>

            <LogoIcon src='/images/logoIcon.svg'></LogoIcon>
            <Logo src='/images/logo.svg'></Logo>
            
          </LogoContainer>
          <OptionsContainer>
            <Icon src='/images/uploadIcon.svg'></Icon>
            <Avatar>
              <img src='https://yt3.ggpht.com/yti/APfAmoHwPDTMHZf3KtCojrmH_LniOnvBBV3xsfEiriGCGQ=s88-c-k-c0x00ffffff-no-rj-mo' />
            </Avatar>
          </OptionsContainer>
        </Content>
      </Container>
    );
  }
  
  export default Header;