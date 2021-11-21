import Heading from "./Heading";
import List from "./ListMaker";
function Card() {
    return ( 
        <>
        <Heading name={"Mobile Operating System"}/>
        
        <ul>
            <List type="deafault" name="Android"/>
            <List type="deafault" name="Blackberry"/>
            <List type="deafault" name="Apple"/>
            <List type="deafault" name="Windows Phone"/>
        </ul>
            
        <Heading name={"Mobile Menufacturar"}/>
        <ul>
            <List type="square" name="Sumsung"/>
            <List type="square" name="HTC"/>
            <List type="deafault" name="Micromax"/>
            <List type="circle" name="Apple"/>
            
            
        </ul>
        </>
        
     );
}

export default Card;