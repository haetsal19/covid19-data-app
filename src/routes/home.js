import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

function Home() {
    const [data, setData] = useState({
        infectee: [],
        infecteeSpecific: [],
        vaccination: [],
        vaccineCenter: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const urlInfectee = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'
    const urlInfecteeDetail = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson'
    const urlVaccination = 'http://api.odcloud.kr/api/15077756/v1/vaccine-stat'
    const urlVaccineCenter = 'https://api.odcloud.kr/api/15077586/v1/centers'

    const key = 'PUZHJkrBS3J8OgGKm77G4UbNrLjT1ZDwXAGy3CSHTrL%2FDHxM98WKk3qYeBxOIfEslb%2BmkyZDtlLws9IZ3EUVog%3D%3D'

    const getInfectee = async () => {
        const newinfectee = await axios.get(`${urlInfectee}?serviceKey=${key}&perPage=500`)
        console.log(newinfectee);
        // setData(newData.data.response.header.resultMsg);
    }

    const getInfecteeDetail = async () => {
        const newInfecteeDetail = await axios.get(`${urlInfecteeDetail}?serviceKey=${key}&perPage=500`)
        console.log(newInfecteeDetail);
        // setData();
    }

    const getVaccination = async () => {
        const newVaccination = await axios.get(`${urlVaccination}?serviceKey=${key}&perPage=500`)
        console.log(newVaccination);
        // setData();
    }

    useEffect(() => {
        getInfectee();
        getInfecteeDetail();
        getVaccination();
        setIsLoading(false);
    }, []);
    //useEffect의 두번째 인자로 
    //[] 빈배열 두는 경우 렌더링 완료 후 최초 한번만 api를 호출하고 싶을 때 
    //[data] data값이 갱신될 때마다 매번 호출 

    if (isLoading) {
        return (<div>Loading...</div>);
    }

    return (<div>{data}</div>);
}

export default Home;