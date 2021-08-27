import styled from 'styled-components';
export const CalendarStyle = styled.div`

padding: 10px 200px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
border-style: dashed;
white-space: 430px;
align-items: center;

.titre {
    grid-column-start: 1;
    grid-column-end: -1;
}

.spectacle {
    grid-column-start: 2;
    font-size: larger;
    font-weight: bold;
}

li {
    padding: 20px;
}

  

`


