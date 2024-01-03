import { styled } from "styled-components";

import { Button } from 'primereact/button';

const PageProductsContainer = styled.div`
    padding: 100px;
`;//vscode styled-components

const PageProducts = () => {
    return(
    <>
        <PageProductsContainer>
            <h1>Page products</h1>
            <Button label="Submit" />
        </PageProductsContainer>
    </>
    );
}
export default PageProducts;