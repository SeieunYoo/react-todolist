import styled from "styled-components";


const StyledButton = styled.h1
   `text-align: center`
   ;
   
   function Clock() {
    const date = new Date();
   
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
   
    
   return <StyledButton>{`${hours}:${minutes}:${seconds}`}</StyledButton>;
     
}
 
setInterval(Clock, 1000);
export default Clock;