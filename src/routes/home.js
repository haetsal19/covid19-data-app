import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment'
import './home.css';

function Home() {
    const [data, setData] = useState({
        infectee: [],
        infecteeDetail: [],
        vaccination: [],
        vaccineCenter: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    // const { infectee, infecteeDetail, vaccination } = data;
    const urlInfectee = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'
    //ㄴ코로나19감염증으로 인한 일별 확진자, 완치자, 치료중인 환자, 사망자 등에 대한 현황자료
    //STATE_DT :기준일 STATE_TIME:기준시간 DECIDE_CNT:확진자 수 DEATH_CNT:사망자 수 
    //CREATE_DT :등록일시분초 UPDATE_DT:수정일시분초 
    const urlInfecteeDetail = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson'
    const urlVaccination = 'http://api.odcloud.kr/api/15077756/v1/vaccine-stat'
    const urlVaccineCenter = 'https://api.odcloud.kr/api/15077586/v1/centers'

    // const key = 'PUZHJkrBS3J8OgGKm77G4UbNrLjT1ZDwXAGy3CSHTrL%2FDHxM98WKk3qYeBxOIfEslb%2BmkyZDtlLws9IZ3EUVog%3D%3D'
    const key = 'PUZHJkrBS3J8OgGKm77G4UbNrLjT1ZDwXAGy3CSHTrL/DHxM98WKk3qYeBxOIfEslb+mkyZDtlLws9IZ3EUVog==';

    const getInfectee = async () => {
        let startDay = moment().subtract(365, 'd').format("YYYYMMDD");
        let yesterday = moment().subtract(1, 'd').format("YYYYMMDD");
        let params = {
            ServiceKey: key,
            startCreateDt: startDay,
            endCreateDt: yesterday,
        }

        const newinfectee = await axios.get(`${urlInfectee}?${new URLSearchParams(params).toString()}`)
        console.log(newinfectee);
        // setData(newData.data.response.header.resultMsg);
    }

    const getInfecteeDetail = async () => {
        // const newInfecteeDetail = await axios.get(`${urlInfecteeDetail}?serviceKey=${key}&perPage=500`)
        // console.log(newInfecteeDetail);
        // setData();
    }

    const getVaccination = async () => {
        // const newVaccination = await axios.get(`${urlVaccination}?serviceKey=${key}&perPage=500`)
        // console.log(newVaccination);
        // setData();
    }

    useEffect(() => {
        getInfectee();
        getInfecteeDetail();
        getVaccination();
    }, []);
    //useEffect의 두번째 인자로 
    //[] 빈배열 두는 경우 렌더링 완료 후 최초 한번만 api를 호출하고 싶을 때 
    //[data] data값이 갱신될 때마다 매번 호출 

    useEffect(() => {
        if (isLoading && data.infectee.length > 0 && data.infecteeDetail.length > 0 && data.vaccination.length > 0) {
            setIsLoading(false);
        }
    }, [data, isLoading])

    if (isLoading) {
        return (<div>Loading...</div>);
    }
    return (<div>{data}</div>);
}

export default Home;