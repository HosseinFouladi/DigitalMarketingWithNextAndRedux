import Head from "next/head";
import { Container, ContentSection } from "../../styles/layout/Layout.style";
import Header from "./Header";

const Layout=({children})=>{

    return(
        <div>
            <Head>
                <title>فروشگاه اینترنتی</title>
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Merriweather:ital,wght@1,300&family=Ubuntu:ital@1&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Lateef&family=Lemonada:wght@300&family=Merriweather:ital,wght@1,300&family=Ubuntu:ital@1&display=swap" rel="stylesheet"/>
                <link rel="icon" href="/Shop.ico" />
            </Head>
            <Container>
                 <Header/>
                <ContentSection>
                    {children}
                </ContentSection>
            </Container>
        </div>
    )
}

export default Layout;