// const food = ['🍔', '🍟', '🍦'];

// food.forEach((item) => {
//   console.log('Мам, купи ' + item + '!')
// });
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// nums.forEach((num , index ,arr) => {

// });


// ForEach это метод массива который работает с массивом и возвращает элемент массива
// так же может вернуть эллемент массива и массив и его индекс. не возвращает что либо


// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(nums)
// const squares = nums.map(function (num) {
//   return num * num
// })
// console.log(squares)
// console.log(nums)


//  важно что можно изменить текущий массив если прировнять старый с новым на прямую
// метод map () позволяет один массив трансформировать в другой. не изменяет ткущий массив
// мы можен присвоит константу использования старого массива с map и таким образом 
// аргументы все те же тоесть элем индекс и массив. и мап возвращает 
const nums = [1, 2, 3, 4, 5, 6 ,6, 2, 7, 8,8 ,8,8];

// Не забываем, что аккумулятор идет первым!
// function findAverage(acc, item, index, arr) {
//   const sum = acc + item


//   if (index === arr.length - 1) {
//     return sum / arr.length
//   }

//   return sum
// }

// const average = nums.reduce(findAverage, 0)
// console.log(average)

// const a = new Set(nums);
// console.log(a);
//  const input = document.querySelector('.input');
//  const li = document.querySelectorAll('.li');

//  function toglinput(){
  
  // li.forEach( list => {
  //   list.classList.toggle('vidno');
  // });
  //  li.filter(){ input.value = 
  //  }
//   li.forEach(it =>{ it.classList.remove('vidno') })  
//   li.forEach(it =>{ if (it.textContent.startsWith(input.value))    it.classList.add('vidno') })
//  }
//  console.log(input.value)
//  const arr = [1,2,3,4,5,6,7,8,10];

//  let ar1 = arr.filter(elem => elem === 6)
 
//  for( let i = 0; i<arr.length ; i++){
//   ar1.push(arr[i])
//   console.log(arr[i])
//  }
//  console.log(ar1)
//  let arr12 = [1, 2, 3, 4, 5, 10]
// let max = Math.max(...arr12);
// console.log(...arr12)

//  function qvadrat (a){

//   S = a**2;
//   P = a+a+a+a;
 
//   console.log(`ploshad ${S}`);
//   console.log(`perimet ${P}`)
// const str = `площадь квадрата ${S}
// Перимитр квадрата ${P}`
//   return console.log(str);
//  }

//  qvadrat(26);

const input = document.querySelector('input');
// console.log(input.value);

// function result(){
//   for (i = 1; i <= input.value; i++ ){
//     if (input.value%i == 0 ){
//       console.log(i);
//     }
//   }
// }
 
// Игра угадай число


// let number = Math.floor(Math.random()*99)+1;
// const timerId = setTimeout(() => {
//   const input = document.querySelector('input');
//   console.log('вы Проиграли')
// }, 10000)

// console.log(timerId)
// function proverka(){

//   if (isNaN(input.value)) console.log('Введите число')else {
//     if(number > input.value){
//       console.log('Ведите число больше ')
//     }
//     if(number < input.value){
//       console.log('Ведите число меньше')
//     }
//     if(number == input.value){
//       console.log('выУгадали')
//     }
//   }
 
// }
let elem = [...document.querySelectorAll('.greenQ')]
const div = document.querySelector('.div'); 


let number = Math.floor(Math.random()*(elem.length));
function change (event){
  const clickedElement = event.target;
  const childNodes = Array.from(div.children);
  const index = childNodes.indexOf(clickedElement);
  if (number === index){
    clickedElement.classList.add('kek');
  }
console.dir(clickedElement);
}
function replay(){
  let Newnumber = Math.floor(Math.random()*(elem.length));
  elem.forEach(ele =>ele.classList.remove('kek'));
  number = Newnumber;
  console.log(number)
}
function create (){
 

  const creatediv = document.createElement('div');
  const newElem = creatediv.classList.add('greenQ');
  div.appendChild(creatediv);
  elem.push(creatediv);
  let Newnumber = Math.floor(Math.random()*(elem.length));
  number = Newnumber;
  // div.appendChild(creatediv);
  console.log(elem)
}
