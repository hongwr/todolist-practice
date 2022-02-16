const quotes = [{
    qoute : "피할수 없으면 즐겨라",
    author : "로버트 엘리엇"
},
{
    qoute : "언제나 현재에 집중할수 있다면 행복할것이다",
    author : "파울로 코엘료"
},
{
    qoute : "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author : "L.론허바드"
},
{
    qoute : "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더많이 실험할수록 더나아진다",
    author : "랄프 왈도 에머슨"
},
{
    qoute : "한번의 실패와 영원한 실패를 혼동하지 마라",
    author : "F.스콧 핏제랄드"
},
{
    qoute : "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다",
    author : "앙드레 말로"
},
{
    qoute : "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author : "단테"
},
{
    qoute : "행복은 습관이다. 그것을 몸에 지녀라",
    author : "허버드"
},
{
    qoute : "자신감 있는 표정을 지으면 자신감이 생긴다",
    author : "찰스다윈"
},
{
    qoute : "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라",
    author : "제임스 딘"
},
{
    qoute : "네 믿음은 네 생각이 된다. 네 생각은  네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이된다. 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다 ",
    author : "간디"
}]   // 11개

const qoute = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

qoute.innerText = todaysQuote.qoute;
author.innerText = todaysQuote.author;