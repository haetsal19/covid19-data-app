import React, { useState } from 'react';

export default Infect = ({data}) => {
    const [infect, setInfect] = useState([]);

    const getChart = (period) => {
        
    }
    //https://velog.io/@eunjin/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B7%B8%EB%9E%98%ED%94%84%EC%B0%A8%ED%8A%B8-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%AA%A8%EC%9D%8C

    return (

        <div className="period">
            <button onClick={getChart(7)}>최근7일</button>
            <button onClick={getChart(30)}>최근30일</button>
            <div className='chart'>{getChart}</div>
        </div>


    );



}