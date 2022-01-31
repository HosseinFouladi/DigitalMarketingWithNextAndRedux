import styled from "styled-components"
export default function Custom404() {
    return <PageNotFoundContainer>
        <h1>404 - Page Not Found</h1>
        <h3>صفحه مورد نظر یافت نشد</h3>
    </PageNotFoundContainer>
  }

  export const PageNotFoundContainer=styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100vw;
   height: 100vh;
  `