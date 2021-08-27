import styled from 'styled-components';
export 
const ShowStyle = styled.div`


max-width: 1200px;
align-items: center;
max-height: fit-content;
display: grid;
grid-template-columns:  100px;
grid-template-rows:     100px;


.title{
    grid-column-start: 2;
    grid-row-start: 2;
}

img{
    grid-row-start: 6;
    grid-column-start: 6;
}

.block{
    padding-left: 3rem;
    grid-row-start: 6;
    grid-column-start: 14;
    grid-column-end: 20;

}

.adress{
    display: flexbox;
    align-items: flex-end;
    padding-left: 2rem;
    align-self: auto;
    grid-row-start: 2;
    grid-column-start: 6;
}

`