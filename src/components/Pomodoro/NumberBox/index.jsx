import { Box, Flexbox } from "../../../assets/css/styles";

export function NumberBox() {
    return(
        <Box>
            <Flexbox
            width="80px"
            >
                <h2></h2>
                <h2>:</h2>
                <h2></h2>
                <h2>:</h2>
                <h2></h2>
            </Flexbox>
            
            <Flexbox
            width="100px"
            >
                <button><img src="" alt="play"/></button>
                <button><img src="" alt="pause"/></button>
                <button><img src="" alt="reset"/></button>
            </Flexbox>

        </Box>
    )
    
}