import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Chart from '../component/Chart';
import Map from '../component/Map'

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

const districtsDummy = [
    {
        "createDt": "2022-03-31 09:08:16.599",
        "deathCnt": 16,
        "defCnt": 10670,
        "gubun": "??????",
        "gubunCn": "?????????",
        "gubunEn": "Lazaretto",
        "incDec": 10,
        "localOccCnt": 0,
        "overFlowCnt": 10,
        "qurRate": "-",
        "seq": 16045,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.598",
        "deathCnt": 102,
        "defCnt": 164289,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Jeju",
        "incDec": 5074,
        "localOccCnt": 5074,
        "overFlowCnt": 0,
        "qurRate": 24276,
        "seq": 16044,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.598",
        "deathCnt": 732,
        "defCnt": 784309,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gyeongsangnam-do",
        "incDec": 19315,
        "localOccCnt": 19314,
        "overFlowCnt": 1,
        "qurRate": 23665,
        "seq": 16043,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.598",
        "deathCnt": 751,
        "defCnt": 494158,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gyeongsangbuk-do",
        "incDec": 14691,
        "localOccCnt": 14681,
        "overFlowCnt": 10,
        "qurRate": 18814,
        "seq": 16042,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.597",
        "deathCnt": 199,
        "defCnt": 371620,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Jeollanam-do",
        "incDec": 13707,
        "localOccCnt": 13706,
        "overFlowCnt": 1,
        "qurRate": 20276,
        "seq": 16041,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.597",
        "deathCnt": 558,
        "defCnt": 394784,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Jeollabuk-do",
        "incDec": 11295,
        "localOccCnt": 11294,
        "overFlowCnt": 1,
        "qurRate": 22094,
        "seq": 16040,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.597",
        "deathCnt": 572,
        "defCnt": 478287,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Chungcheongnam-do",
        "incDec": 14364,
        "localOccCnt": 14364,
        "overFlowCnt": 0,
        "qurRate": 22569,
        "seq": 16039,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.596",
        "deathCnt": 445,
        "defCnt": 370985,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Chungcheongbuk-do",
        "incDec": 11322,
        "localOccCnt": 11322,
        "overFlowCnt": 0,
        "qurRate": 23224,
        "seq": 16038,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.596",
        "deathCnt": 473,
        "defCnt": 334151,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gangwon-do",
        "incDec": 10665,
        "localOccCnt": 10665,
        "overFlowCnt": 0,
        "qurRate": 21719,
        "seq": 16037,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.596",
        "deathCnt": 4333,
        "defCnt": 3637764,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gyeonggi-do",
        "incDec": 84657,
        "localOccCnt": 84657,
        "overFlowCnt": 0,
        "qurRate": 26816,
        "seq": 16036,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.595",
        "deathCnt": 23,
        "defCnt": 93479,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Sejong",
        "incDec": 3892,
        "localOccCnt": 3892,
        "overFlowCnt": 0,
        "qurRate": 25136,
        "seq": 16035,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.595",
        "deathCnt": 236,
        "defCnt": 266917,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Ulsan",
        "incDec": 6307,
        "localOccCnt": 6307,
        "overFlowCnt": 0,
        "qurRate": 23798,
        "seq": 16034,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.594",
        "deathCnt": 418,
        "defCnt": 343696,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Daejeon",
        "incDec": 10058,
        "localOccCnt": 10058,
        "overFlowCnt": 0,
        "qurRate": 23666,
        "seq": 16033,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.593",
        "deathCnt": 341,
        "defCnt": 359985,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gwangju",
        "incDec": 11362,
        "localOccCnt": 11361,
        "overFlowCnt": 1,
        "qurRate": 24971,
        "seq": 16032,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.593",
        "deathCnt": 1017,
        "defCnt": 816626,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Incheon",
        "incDec": 18128,
        "localOccCnt": 18128,
        "overFlowCnt": 0,
        "qurRate": 27697,
        "seq": 16031,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.593",
        "deathCnt": 929,
        "defCnt": 523883,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Daegu",
        "incDec": 12712,
        "localOccCnt": 12712,
        "overFlowCnt": 0,
        "qurRate": 21962,
        "seq": 16030,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.592",
        "deathCnt": 1522,
        "defCnt": 890734,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Busan",
        "incDec": 13053,
        "localOccCnt": 13053,
        "overFlowCnt": 0,
        "qurRate": 26586,
        "seq": 16029,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.592",
        "deathCnt": 3563,
        "defCnt": 2759294,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Seoul",
        "incDec": 60131,
        "localOccCnt": 60131,
        "overFlowCnt": 0,
        "qurRate": 29016,
        "seq": 16028,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-31 09:08:16.592",
        "deathCnt": 16230,
        "defCnt": 13095631,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Total",
        "incDec": 320743,
        "localOccCnt": 320719,
        "overFlowCnt": 24,
        "qurRate": 25360,
        "seq": 16027,
        "stdDay": "2022??? 03??? 31??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.076",
        "deathCnt": 16,
        "defCnt": 10660,
        "gubun": "??????",
        "gubunCn": "?????????",
        "gubunEn": "Lazaretto",
        "incDec": 20,
        "localOccCnt": 0,
        "overFlowCnt": 20,
        "qurRate": "-",
        "seq": 16026,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.076",
        "deathCnt": 88,
        "defCnt": 159215,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Jeju",
        "incDec": 5744,
        "localOccCnt": 5744,
        "overFlowCnt": 0,
        "qurRate": 23526,
        "seq": 16025,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.076",
        "deathCnt": 689,
        "defCnt": 764996,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gyeongsangnam-do",
        "incDec": 27038,
        "localOccCnt": 27037,
        "overFlowCnt": 1,
        "qurRate": 23082,
        "seq": 16024,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.076",
        "deathCnt": 725,
        "defCnt": 479469,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gyeongsangbuk-do",
        "incDec": 20165,
        "localOccCnt": 20161,
        "overFlowCnt": 4,
        "qurRate": 18254,
        "seq": 16023,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.076",
        "deathCnt": 191,
        "defCnt": 357916,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Jeollanam-do",
        "incDec": 17462,
        "localOccCnt": 17462,
        "overFlowCnt": 0,
        "qurRate": 19528,
        "seq": 16022,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.075",
        "deathCnt": 536,
        "defCnt": 383493,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Jeollabuk-do",
        "incDec": 13253,
        "localOccCnt": 13248,
        "overFlowCnt": 5,
        "qurRate": 21462,
        "seq": 16021,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.075",
        "deathCnt": 560,
        "defCnt": 463926,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Chungcheongnam-do",
        "incDec": 18969,
        "localOccCnt": 18969,
        "overFlowCnt": 0,
        "qurRate": 21891,
        "seq": 16020,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.075",
        "deathCnt": 429,
        "defCnt": 359663,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Chungcheongbuk-do",
        "incDec": 15579,
        "localOccCnt": 15579,
        "overFlowCnt": 0,
        "qurRate": 22515,
        "seq": 16019,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.075",
        "deathCnt": 461,
        "defCnt": 323486,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gangwon-do",
        "incDec": 13113,
        "localOccCnt": 13113,
        "overFlowCnt": 0,
        "qurRate": 21026,
        "seq": 16018,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.074",
        "deathCnt": 4256,
        "defCnt": 3553139,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gyeonggi-do",
        "incDec": 117029,
        "localOccCnt": 117029,
        "overFlowCnt": 0,
        "qurRate": 26193,
        "seq": 16017,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.074",
        "deathCnt": 21,
        "defCnt": 89587,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Sejong",
        "incDec": 4248,
        "localOccCnt": 4248,
        "overFlowCnt": 0,
        "qurRate": 24089,
        "seq": 16016,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.074",
        "deathCnt": 236,
        "defCnt": 260612,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Ulsan",
        "incDec": 9094,
        "localOccCnt": 9094,
        "overFlowCnt": 0,
        "qurRate": 23236,
        "seq": 16015,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.074",
        "deathCnt": 409,
        "defCnt": 333638,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Daejeon",
        "incDec": 11252,
        "localOccCnt": 11252,
        "overFlowCnt": 0,
        "qurRate": 22974,
        "seq": 16014,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.074",
        "deathCnt": 332,
        "defCnt": 348623,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Gwangju",
        "incDec": 12301,
        "localOccCnt": 12299,
        "overFlowCnt": 2,
        "qurRate": 24183,
        "seq": 16013,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.073",
        "deathCnt": 1001,
        "defCnt": 798508,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Incheon",
        "incDec": 23261,
        "localOccCnt": 23261,
        "overFlowCnt": 0,
        "qurRate": 27083,
        "seq": 16012,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.073",
        "deathCnt": 912,
        "defCnt": 511173,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Daegu",
        "incDec": 17842,
        "localOccCnt": 17842,
        "overFlowCnt": 0,
        "qurRate": 21429,
        "seq": 16011,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.073",
        "deathCnt": 1479,
        "defCnt": 877689,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Busan",
        "incDec": 16447,
        "localOccCnt": 16447,
        "overFlowCnt": 0,
        "qurRate": 26197,
        "seq": 16010,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.073",
        "deathCnt": 3514,
        "defCnt": 2699163,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Seoul",
        "incDec": 81824,
        "localOccCnt": 81824,
        "overFlowCnt": 0,
        "qurRate": 28384,
        "seq": 16009,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    },
    {
        "createDt": "2022-03-30 09:17:59.072",
        "deathCnt": 15855,
        "defCnt": 12774956,
        "gubun": "??????",
        "gubunCn": "??????",
        "gubunEn": "Total",
        "incDec": 424641,
        "localOccCnt": 424609,
        "overFlowCnt": 32,
        "qurRate": 24739,
        "seq": 16008,
        "stdDay": "2022??? 03??? 30??? 00???",
        "updateDt": "null"
    }
]

const urlInfState = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson'
//???????????????_?????????19???????????? ??????????????? 
//?????? ?????????, ?????????, ??????????????????, ????????? ?????? ?????? ???????????? 
//STATE_DT ????????? STATE_TIME???????????? DECIDE_CNT???????????? DEATH_CNT????????? ??? 
const urlVaccinated = 'https://api.odcloud.kr/api/15077756/v1/vaccine-stat'
//?????????????????????????????????_?????????19 ???????????? ?????? ????????? ?????? ????????? 
const urlDistricts = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson'
//???????????????_?????????19???,?????????_?????? ?????? ?????????
//?????????19??????????????? ?????? ???.?????? ???????????????, ???????????????, ?????????????????????, ??????????????????????????? ?????? ????????????
const key = 'PUZHJkrBS3J8OgGKm77G4UbNrLjT1ZDwXAGy3CSHTrL/DHxM98WKk3qYeBxOIfEslb+mkyZDtlLws9IZ3EUVog==';

export default function Home() {
    const [data, setData] = useState({
        infState: {},
        vaccinated: 0,
        districts: {},
    });

    const [isLoading, setIsLoading] = useState(true);

    //??????????????????   
    const getVaccinated = async () => {
        let params = {
            serviceKey: key,
            page: 1,
            perPage: 10,
            'cond[baseDate::GTE]': moment().subtract(1, 'd').format("YYYY-MM-DD"),
            'cond[sido::EQ]': '??????',
        }

        const response = await axios.get(`${urlVaccinated}?${new URLSearchParams(params).toString()}`);
        const vaccinated = response.data.data[response.data.data.length - 1].totalFirstCnt;
        setData((prev) => {
            let newData = { ...prev, vaccinated: vaccinated }
            return newData
        })
    }

    //?????? ?????????, ????????? ??????
    const getInfState = async () => {
        let infStateList = infStateDummy;
        let params = {
            ServiceKey: key,
            startCreateDt: moment().subtract(31, 'd').format("YYYYMMDD"), //????????? ????????? ????????? ??????
            endCreateDt: moment().subtract(1, 'd').format("YYYYMMDD"), //????????? ????????? ????????? ??????
        }

        const response = await axios.get(`${urlInfState}?${new URLSearchParams(params).toString()}`);
        if (response.data.response.header.resultCode == "00") {
            console.log(response);
            infStateList = response.data.response.body.items.item.reverse();
        }

        const newInfState = {
            labels: [],
            datas_inf: [],
            datas_death: [],
            totalInf: 0,
            totalDeath: 0,
        }

        infStateList.forEach((value, index) => {
            if (index === 0) return;

            newInfState.labels.push(moment(value.createDt).format("MM/DD"));
            newInfState.datas_inf.push(infStateList[index].decideCnt - infStateList[index - 1].decideCnt);
            newInfState.datas_death.push(infStateList[index].deathCnt - infStateList[index - 1].deathCnt);
            newInfState.totalInf = infStateList[index].decideCnt;
            newInfState.totalDeath = infStateList[index].deathCnt;
        });

        setData((prev) => {
            let newData = { ...prev, infState: newInfState }
            return newData
        })
    }

    //????????? ?????????,????????? ?????? 
    const getDistricts = async () => {
        let districtsList = districtsDummy;
        let params = {
            ServiceKey: key,
            startCreateDt: moment().subtract(2, 'd').format("YYYYMMDD"), //????????? ????????? ????????? ??????
            endCreateDt: moment().subtract(1, 'd').format("YYYYMMDD"), //????????? ????????? ????????? ??????
        }

        const response = await axios.get(`${urlDistricts}?${new URLSearchParams(params).toString()}`);
        if (response.data.response.header.resultCode === "00") {
            districtsList = response.data.response.body.items.item;
        }

        const districts = {}
        districtsList.forEach((value) => {
            //1. newDistricts??? gubun(??????, ??????, ?????? ???)??? key??? ???????????? ?????? ????????? ????????????
            //2. key??? ?????? ?????? ????????? ???????????? ????????? ????????????
            let place = districts[value.gubunEn];
            if (place == undefined) {
                districts[value.gubunEn] = { today: value.incDec, diff: 0, gubun: value.gubun }
            } else {
                place.diff = place.today - value.incDec;
            }
        })

        setData((prev) => {
            let newData = { ...prev, districts: districts }
            return newData
        })
    }

    useEffect(() => {
        getInfState();
        getVaccinated();
        getDistricts();
    }, [])

    useEffect(() => {
        if (Object.keys(data.districts).length > 0 && Object.keys(data.infState).length > 0 && data.vaccinated > 0) setIsLoading(false);
    }, [data])

    if (isLoading) {
        return (<div>Loading...</div>);
    } else {
        return (
            <div className='container'>
                {/* ??????,??????,?????? ????????? */}
                <div className='chart_box'>
                    <div className='newTable'>
                        <ul>
                            <li>?????????</li>
                            <li className='up'>???{data.infState.datas_inf[29].toLocaleString()}???</li>
                            <li>{data.infState.totalInf.toLocaleString()}???</li>
                        </ul>
                        <ul>
                            <li>?????????</li>
                            <li className='up'>???{data.infState.datas_death[29].toLocaleString()}???</li>
                            <li>{data.infState.totalDeath.toLocaleString()}???</li>
                        </ul>
                        <ul>
                            <li>????????????</li>
                            <li>{Math.round((data.vaccinated / 51628117) * 100)}%</li>
                            <li>{data.vaccinated.toLocaleString()}???</li>
                        </ul>
                    </div>
                    <div className="newChart">
                        <Chart list={data.infState} />
                    </div>
                </div>
                <div className='newMap'>
                    <Map districts={data.districts} />
                </div>
            </div>
        )
    }
}


