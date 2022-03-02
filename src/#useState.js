import { useState } from "react";

export default function Hello() {
    // let name = "Mike";
    // ㄴname은 state가 아니고 단순히 변수일 뿐
    // 이 컴포넌트가 관리하고 있는 상태값이 아니라서
    // 바뀌어도 리액트가 그것을 인지하지 못하고 ui를 업데이트해주지 못함 
    //                                ↓초기값
    const [name, setName] = useState('Mike');
    //    ㄴsate  ㄴstate를 변경해주는 함수    
    // setName함수를 호출하여 name이 바뀌면 리액트는 이 컴포넌트를 다시 렌더링해줌 
    function changeName() {
        const newName = name === "Mike" ? "Jane" : "Mike";
        console.log(name);
        // document.getElementById("name").inerText = name;
        setName(newName)
        //setName(name === "Mike" ? "Jane" : : "Mike")
    }

    return (
      <div>
        <h1>state</h1>
        <h2 id="name">{name}</h2>
        <button onclick={changeName}>Change</button>
      </div>
    );

}


