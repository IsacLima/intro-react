import React from "react";
import { Background } from "./assets/css/styles";
import { Logo } from "./components/Pomodoro/Logo";
import { NumberBox } from "./components/Pomodoro/NumberBox";



function App() {
    return ( 
    <Background> 
        <Logo/>
        <NumberBox/>
    </Background>
    );
}

export default App;