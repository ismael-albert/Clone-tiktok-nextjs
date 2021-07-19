import Header from "../Header";
import Sidebar from "../Sidebar";
import {Container, SidebarContainer, ContentContainer} from './styles'
function Layout({children}){
    return <div>
        <>
        <Header></Header>
       
    <Container>
        <SidebarContainer>
            <Sidebar></Sidebar>
        </SidebarContainer>

            <ContentContainer>
            {children}
            </ContentContainer>
        
        </Container>

        </>
    </div>
}

export default Layout;