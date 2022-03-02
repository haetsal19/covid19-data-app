import { useEffect } from "react";
import Word from "./Word";

useEffect 어떤 상태값이 바뀌었을 때 동작하는 함수 작성 

export default function DayList() {
    const [ days, setDays] = useEffect([]);
    const [ count, setCount] = useEffect([]);

    onClick() {
        setCount(count + 1);
    }

    onClick2() {
        setDays([
            ...days,
            {
                id: Math.random(),
                day: 1,
            }
        ])
    }
    
    useEffect(() => {
        console.log("count change");
        //렌더링 결과가 실제 돔에 반영된 직후 호출됨 
        //class형 컴포넌트의 componentDidMount와 유사
        //컴포넌트가 사라지기 직전에도 마지막으로 호출됨  
    },[count]); 
    //useEffect의 두번째 매개변수로 배열형태로 [count]라 놓으면(=>의존성배열) 
    //의존성 배열의 값(count)이 변경되었을 때만 이 함수를 실행함 
    //불필요한 함수실행 방지 
    //useEffect()로 api호출 시 렌더링 완료되고 최초의 1번만 api호출하면 되므로 
    //의존성배열에 빈배열[]을 입력한다   
    //상태값과 무관하게 렌더링 직후 딱 한번만 실행됨
    return (
     <>
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
        <button onClick={onClick}>{count}</button>
        <button onClick={onClick2}>Day Change</button>
     </>
    )
}