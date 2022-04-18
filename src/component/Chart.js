import React, { useEffect, useState, useRef } from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import './Chart.css';


export default function Chart({ list }) {
  const btnShort = useRef(null);
  const btnLong = useRef(null);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [

      //확진자 datasets
      {
        label: '일일 확진자수',
        yAxisID: 'left-axis',
        borderColor: 'white',
        borderWidth: 0,
        data: [],
        backgroundColor: '#0069c0',
        order: 2,
        barThickness: 10
      },

      //사망자 datasets
      {
        type: 'line',
        label: '일일 사망자수',
        yAxisID: 'right-axis',
        borderColor: '#c62828',
        borderWidth: 2,
        data: [],
        backgroundColor: '#c62828',
        order: 1
      },

    ]
  });

  const options = {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: true
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'center',
        rtl: true
      },
      title: {
        display: true,
        text: '일일 확진자·사망자 추이',
      },
      subtitle: {
        display: true,
        text: '( 단위: 명 )',
        align: 'end'
      }
    },



    scales: {
      'left-axis': {
        display: true,
        position: "left"
        // ticks: {
        //   callback: function (value, index, values) {
        //     return value + "명";
        //   }
        // }
      }
    },
    "right-axis": {
      max: 2000,
      display: true,
      position: "right",
      title: {
        display: true,
        align: 'end',
        color: '#808080',
        font: {
          size: 12,
          weight: 300,
        },
        text: '단위: 배'
      }
    }
  }


  // legend: {
  //   display: true,
  //   reverse: true,
  // }



  const updateChartPeriod = (period) => {
    let barThickness = 20;

    //클릭 시 버튼 비활성화 
    if (period === 7) {
      btnShort.current.disabled = true;
      btnLong.current.disabled = false;
    } else {
      btnShort.current.disabled = false;
      btnLong.current.disabled = true;
      barThickness = 6;
    }

    setChartData((prev) => {
      let newData = { ...prev } // Object.assign({}, oldData);
      let newLabels = list.labels.slice(-period);
      let newDatas_inf = list.datas_inf.slice(-period);
      let newDatas_death = list.datas_death.slice(-period);
      newData.labels = newLabels;
      newData.datasets[0].data = newDatas_inf;
      newData.datasets[1].data = newDatas_death;
      newData.datasets[0].barThickness = barThickness;

      return newData;
    });

  }

  useEffect(() => {
    updateChartPeriod(7);
  }, [])

  useEffect(() => {
    console.log(chartData);
  }, [chartData])


  return (
    <div className='period' >
      <button disabled='' onClick={() => { updateChartPeriod(7); }} ref={btnShort}>최근 7일</button>
      <button disabled='' onClick={() => { updateChartPeriod(30); }} ref={btnLong}>최근 30일</button>
      <div className='chart'>
        <Bar data={chartData} options={options} redraw />
      </div>
    </div >
  );
}



