import Styled from 'styled-components';
import { Card, Typography } from '@material-ui/core';

export const homeContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`
export const EventsList = Styled.div`
    flex: 1;
`
export const CalendarContainer = Styled.div`
    flex: 5;
`

export const StyledCard = Styled(Card)`
whiteSpace: 'nowrap';
overflow: 'hidden';
text-align: center;
padding: 0 20px;
box-shadow: 0px 0px 5px 0px rgba(209,205,209,1);
padding:5px;
` 
export const StyledDates = Styled(Typography)`
background-color: blanchedalmond;

`
export const heading = Styled.div`
    width:50%;
    color: blanchedalmond;
    font-size: 20px;
    font-weight: 600;
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 1px;
    text-align:center
`

export const header = Styled.div`
    width: 100%;
    height: 8%;
    background-color: rgb(171, 202, 180);
    align-items: center;
    justify-content: space-evenly;
`
export const home = Styled.div`
   
`
export const body = Styled.div`
    height: 92%;
    display:flex;
    grid-template-columns: 0.5fr 0.5fr;
    justify-content: space-evenly;
    background-color: rgb(240, 243, 241);
`
export const imageContainer = Styled.div`
    height:100%;
`
export const signupContainer = Styled.div`
    margin-top: 3%;
    height:100%;
    grid-row-gap: 10px;
    grid-template-columns: 1fr;
    border-radious: 15px;
    justify-content: space-evenly;
    display: grid;
`
export const tileClassName = Styled.div`
    background-color: blanchedalmond,
    // 'box-shadow': '0 0 10px rgba(0, 0, 0, 0.3) !important'
`