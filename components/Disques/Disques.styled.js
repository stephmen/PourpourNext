import styled from 'styled-components';

export const StyledDisques = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2rem;
  top: 10 rem;
  align-items: center;
`
  export const SyledTitle = styled.h1`
  display: flexbox;
  padding-top: 8rem;
  padding-left: 4rem;
  `


  export const BuyingCD = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    padding:3rem;
    
    .Dame{
      max-width: 250px;
      padding: 10px 10px;
      border-radius: 20px;
      background:#CC6009;
      cursor: pointer;
    }
    .Apple{
      padding-top: 3rem;
      max-width: 75px;
      cursor: pointer;
    }
  `


  export const AppleMusic = styled.div`
    display:none;
    position: fixed;
    bottom: 0;
    height:40rem;
    width: 40rem;
    background-color:white;
    margin-bottom: 25rem;
  `