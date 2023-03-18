let days = document.getElementsByClassName("day");
let graph = []

graph.push(document.getElementById('one'));
graph.push(document.getElementById('two'));
graph.push(document.getElementById('three'));
graph.push(document.getElementById('four'));
graph.push(document.getElementById('five'));
graph.push(document.getElementById('six'));
graph.push(document.getElementById('seven'));

const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

const currentDate = new Date();
let currentDay = currentDate.getDay() - 1 ;


for (let index = 0; index < days.length; index++) {
  days[index].innerHTML = data[index].day;
  graph[index].style.height = data[index].amount * 2 + "px";
  graph[index].setAttribute("title", data[index].amount);
  if(index == currentDay){
    graph[index].style.backgroundColor = "hsl(186, 34%, 60%)";
  }
}




