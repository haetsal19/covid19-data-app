import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import InfState from '../component/InfState';
import './home.css';

const infStateDummy = [
    {
        "createDt": "2022-02-15 09:01:44.846",
        "deathCnt": 7163,
        "decideCnt": 1462408,
        "seq": 790,
        "stateDt": 20220215,
        "stateTime": "00:00",
        "updateDt": "2022-02-16 09:20:55.138"
    },
    {
        "createDt": "2022-02-16 09:20:27.8",
        "deathCnt": 7202,
        "decideCnt": 1552843,
        "seq": 791,
        "stateDt": 20220216,
        "stateTime": "00:00",
        "updateDt": "2022-02-17 08:52:33.561"
    },
    {
        "createDt": "2022-02-17 08:52:05.139",
        "deathCnt": 7238,
        "decideCnt": 1645975,
        "seq": 792,
        "stateDt": 20220217,
        "stateTime": "00:00",
        "updateDt": "2022-02-18 09:05:35.842"
    },
    {
        "createDt": "2022-02-18 09:04:59.618",
        "deathCnt": 7283,
        "decideCnt": 1755798,
        "seq": 793,
        "stateDt": 20220218,
        "stateTime": "00:00",
        "updateDt": "2022-02-19 09:00:52.083"
    },
    {
        "createDt": "2022-02-19 09:00:04.109",
        "deathCnt": 7354,
        "decideCnt": 1858008,
        "seq": 794,
        "stateDt": 20220219,
        "stateTime": "00:00",
        "updateDt": "2022-02-20 08:52:45.133"
    },
    {
        "createDt": "2022-02-20 08:51:11.122",
        "deathCnt": 7405,
        "decideCnt": 1962822,
        "seq": 795,
        "stateDt": 20220220,
        "stateTime": "00:00",
        "updateDt": "2022-02-21 09:05:38.992"
    },
    {
        "createDt": "2022-02-21 09:05:08.307",
        "deathCnt": 7450,
        "decideCnt": 2058161,
        "seq": 796,
        "stateDt": 20220221,
        "stateTime": "00:00",
        "updateDt": "2022-02-22 09:07:07.41"
    },
    {
        "createDt": "2022-02-22 09:06:38.772",
        "deathCnt": 7508,
        "decideCnt": 2157730,
        "seq": 797,
        "stateDt": 20220222,
        "stateTime": "00:00",
        "updateDt": "2022-02-23 09:13:50.655"
    },
    {
        "createDt": "2022-02-23 09:12:48.876",
        "deathCnt": 7607,
        "decideCnt": 2329172,
        "seq": 798,
        "stateDt": 20220223,
        "stateTime": "00:00",
        "updateDt": "2022-02-24 09:46:50.038"
    },
    {
        "createDt": "2022-02-24 09:45:42.528",
        "deathCnt": 7689,
        "decideCnt": 2499187,
        "seq": 799,
        "stateDt": 20220224,
        "stateTime": "00:00",
        "updateDt": "2022-02-25 09:19:57.585"
    },
    {
        "createDt": "2022-02-25 09:19:35.533",
        "deathCnt": 7783,
        "decideCnt": 2665074,
        "seq": 800,
        "stateDt": 20220225,
        "stateTime": "00:00",
        "updateDt": "2022-02-26 09:11:20.409"
    },
    {
        "createDt": "2022-02-26 09:10:30.918",
        "deathCnt": 7895,
        "decideCnt": 2831256,
        "seq": 801,
        "stateDt": 20220226,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:45:32.611"
    },
    {
        "createDt": "2022-02-27 08:54:59.059",
        "deathCnt": 7944,
        "decideCnt": 2994817,
        "seq": 802,
        "stateDt": 20220227,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:43:04.008"
    },
    {
        "createDt": "2022-02-28 08:56:05.34",
        "deathCnt": 8058,
        "decideCnt": 3134441,
        "seq": 803,
        "stateDt": 20220228,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:42:40.367"
    },
    {
        "createDt": "2022-03-01 09:12:42.55",
        "deathCnt": 8170,
        "decideCnt": 3273431,
        "seq": 804,
        "stateDt": 20220301,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:42:18.383"
    },
    {
        "createDt": "2022-03-02 09:05:42.681",
        "deathCnt": 8266,
        "decideCnt": 3492659,
        "seq": 805,
        "stateDt": 20220302,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:42:03.65"
    },
    {
        "createDt": "2022-03-03 09:08:34.548",
        "deathCnt": 8394,
        "decideCnt": 3691459,
        "seq": 806,
        "stateDt": 20220303,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:41:48.252"
    },
    {
        "createDt": "2022-03-04 08:59:56.036",
        "deathCnt": 8580,
        "decideCnt": 3958309,
        "seq": 807,
        "stateDt": 20220304,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:41:30.29"
    },
    {
        "createDt": "2022-03-05 09:41:58.429",
        "deathCnt": 8796,
        "decideCnt": 4212636,
        "seq": 808,
        "stateDt": 20220305,
        "stateTime": "00:00",
        "updateDt": "2022-03-06 09:41:13.104"
    },
    {
        "createDt": "2022-03-06 09:40:46.49",
        "deathCnt": 8957,
        "decideCnt": 4456261,
        "seq": 809,
        "stateDt": 20220306,
        "stateTime": "00:00",
        "updateDt": "2022-03-07 09:06:48.272"
    },
    {
        "createDt": "2022-03-07 09:06:07.52",
        "deathCnt": 9096,
        "decideCnt": 4666970,
        "seq": 810,
        "stateDt": 20220307,
        "stateTime": "00:00",
        "updateDt": "2022-03-08 08:58:58.236"
    },
    {
        "createDt": "2022-03-08 08:58:30.75",
        "deathCnt": 9282,
        "decideCnt": 4869672,
        "seq": 811,
        "stateDt": 20220308,
        "stateTime": "00:00",
        "updateDt": "2022-03-09 08:58:41.872"
    },
    {
        "createDt": "2022-03-09 08:57:50.503",
        "deathCnt": 9440,
        "decideCnt": 5212101,
        "seq": 812,
        "stateDt": 20220309,
        "stateTime": "00:00",
        "updateDt": "2022-03-10 09:08:10.52"
    },
    {
        "createDt": "2022-03-10 09:07:48.264",
        "deathCnt": 9646,
        "decideCnt": 5539639,
        "seq": 813,
        "stateDt": 20220310,
        "stateTime": "00:00",
        "updateDt": "2022-03-11 08:57:08.866"
    },
    {
        "createDt": "2022-03-11 08:56:23.53",
        "deathCnt": 9875,
        "decideCnt": 5822612,
        "seq": 814,
        "stateDt": 20220311,
        "stateTime": "00:00",
        "updateDt": "2022-03-12 08:54:16.51"
    },
    {
        "createDt": "2022-03-12 08:53:24.338",
        "deathCnt": 10144,
        "decideCnt": 6206263,
        "seq": 815,
        "stateDt": 20220312,
        "stateTime": "00:00",
        "updateDt": "2022-03-13 09:14:08.464"
    },
    {
        "createDt": "2022-03-13 09:13:37.486",
        "deathCnt": 10395,
        "decideCnt": 6556432,
        "seq": 816,
        "stateDt": 20220313,
        "stateTime": "00:00",
        "updateDt": "2022-03-14 09:01:56.179"
    },
    {
        "createDt": "2022-03-14 09:01:32.362",
        "deathCnt": 10595,
        "decideCnt": 6866212,
        "seq": 817,
        "stateDt": 20220314,
        "stateTime": "00:00",
        "updateDt": "2022-03-15 09:09:15.462"
    },
    {
        "createDt": "2022-03-15 09:08:41.063",
        "deathCnt": 10888,
        "decideCnt": 7228534,
        "seq": 818,
        "stateDt": 20220315,
        "stateTime": "00:00",
        "updateDt": "2022-03-16 09:08:03.569"
    },
    {
        "createDt": "2022-03-16 09:07:33.011",
        "deathCnt": 11052,
        "decideCnt": 7629264,
        "seq": 819,
        "stateDt": 20220316,
        "stateTime": "00:00",
        "updateDt": "2022-03-17 09:28:59.979"
    },
    {
        "createDt": "2022-03-17 09:28:28.783",
        "deathCnt": 11481,
        "decideCnt": 8250592,
        "seq": 820,
        "stateDt": 20220317,
        "stateTime": "00:00",
        "updateDt": "null"
    }
];

export default function Home() {
    const [data, setData] = useState({
        infState: {},
        infClass: [],
        vaccination: [],
        vaccinCenter: [],
    });

    const [isLoading, setIsLoading] = useState(true);
    const urlInfState= 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'
   //보건복지부_코로나19감염현황 조회서비스 
   //일별 확진자, 완치자, 치료중인환자, 사망자 등에 대한 현황자료 
   //STATE_DT 기준일 STATE_TIME기준시간 DECIDE_CNT확진자수 DEATH_CNT사망자 수 
   
    const key = 'PUZHJkrBS3J8OgGKm77G4UbNrLjT1ZDwXAGy3CSHTrL/DHxM98WKk3qYeBxOIfEslb+mkyZDtlLws9IZ3EUVog==';

    const getInfState = async () => {
        let params = {
            ServiceKey: key, 
            startCreateDt: moment().subtract(31, 'd').format("YYYYMMDD"), //검색할 생성일 범위의 시작
            endCreateDt: moment().subtract(1, 'd').format("YYYYMMDD"), //검색할 생성일 범위의 종료
        }

        const infStateList = await axios.get(`${urlInfState}?${new URLSearchParams(params).toString()}`)
            .then((result) => {
                console.log(result.data.response.header.resultMsg);
                if(result.data.response.header.resultCode == "00"){
                    return result.data.response.body.items.item.reverse();
                }else{
                    return infStateDummy;
                }
            })
            .catch(console.log);
            
        console.log(infStateList);
        const newInfState = {
            labels: [],
            datas_inf: [],
            datas_death: [],
        }

        infStateList.forEach((value, index) => {
            if (index === 0) return;
            
            newInfState.labels.push(moment(value.createDt).format("MM/DD"));
            newInfState.datas_inf.push(infStateList[index].decideCnt - infStateList[index - 1].decideCnt);
            newInfState.datas_death.push(infStateList[index].deathCnt - infStateList[index - 1].deathCnt);
        });

        setData((prev) => {
            let newData = {...prev, infState: newInfState}
            return newData
        })

        setIsLoading(false);
    }
    
    useEffect(()=> {
        getInfState();
    }, [])

    if (isLoading) {
       return (<div>Loading...</div>);
    } else {
        return (
        <div>
            <InfState list={data.infState} />
        </div>
        )
    }
}



//     const infData = useMemo(() => {
//       const result = {
//         labels: [],
//         datas: []
//       }
  
//       list.reverse().forEach((value, index) => {
//         if (index === 0) {
//           return;
//         }
  

//         result.labels.push(moment(value.createDt).format("MM/DD"));
//         result.datas.push(list[index].decideCnt - list[index - 1].decideCnt);
//       });
  
//       return result
//     }, [list]);
  