import styled from "styled-components";
export let CartTitle = styled.h1`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 5rem;
  font-weight:700;
  padding-bottom:3.688rem;
  font-size: 2rem;
  line-height: 2.5rem;
`;
export let ProductContainer = styled.div`
  display: table;
  width: 100%;
 
`;
export let Column = styled.article`
  display: table-cell;
  .activeButton {
  background-color: var(--clr-black);
  color: var(--clr-white);
}
.activeSwatchButton {
  border: 2px solid var(--clr-primary) !important;
}
  /* padding:1vw 0;
  width:40%; */
`;
export let ItemContainer = styled.div`
  display: flex;
  flex-direction: ${props=>props.direction==="row"?"row":"column"};
  align-items: ${props => props.position ==="left" ? "flex-start" : "flex-end"};
 justify-content:center;
  .trash img{
    width:11vw;
   height:7vw;
   }
 .trash{
   width:fit-content;
   height:18vw;
   cursor: pointer;
   display:flex;
   justify-content:center;
   align-items:center;
 }
`;
export let CartItemBrand = styled.div`
 font-weight:600;
 font-size:var(--fs-30);
 line-height:1.688rem;
`;
export let CartItemName = styled.div`
font-weight:400;
 font-size:var(--fs-30);
 margin-top:1rem;
 margin-bottom:0.75rem;
 line-height:1.688rem;
`
export let CartItemPrice = styled.div`
font-weight:700;
font-size:var(--fs-24);
line-height:1.125rem;
height:2.875rem;
display:flex;
align-items:center;
`
export let Counter = styled.div`
display:flex;
flex-direction:column;
 justify-content:center;
 .square{
   height:2.813rem;
   width:2.813rem;
   display:flex;
   align-items:center;
   justify-content:center;
   border:1px solid black;
   cursor: pointer;
   
 }
 .count-value{
   display:flex;
   justify-content:center;
   align-items:center;
   padding:3vw 0;
 }
`
export let CartSliderContainer = styled.div`
 width:19.58vw;
 height:20vw;
 display:flex;
 justify-content:center;
 align-items:center;
 margin-left:1vw;
 position:relative;
 .next , .prev{
   position:absolute;
   display:flex;
   justify-content:center;
   align-items:center;
   width:10%;
   height:100%;
   
   cursor: pointer; }
 .next{
   left:25%;
 }
 .prev{
   right:25%;
 }
`

