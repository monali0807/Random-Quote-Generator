// console.log('task 1')
// console.log('task 2')

// setTimeout(()=>{
//     console.log('task 3')
// },2000)
// console.log('task 4')

// ...................................................xxxxxxxxxxxx.................................................

function uploadRecording(){
    // setTimeout(()=>{
    //     console.log('Recording uploaded!')
    // },2000)
}
function notify(){
    console.log('email sent!')
}

// uploadRecording();
// notify();

// ...................................................xxxxxxxxxxxx.................................................

// promise syntax
/* 
new Promise = (()=>{

}).then(()=>{

}).then(()=>{

}) 
*/

/*let test = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('REcording uploaded!')
        resolve();
        reject(); // IF WE WRITE REJECT, NOTING WILL PRINT AFTER THIS.
    },2000)
}).then(()=>{
    notify();
})*/

// Random Quote

function fetchQuote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      // console.log(response);
      return response.json();
    })
    .then(function(data) {
    //   generating random number
      let random = Math.floor(Math.random()*data.length)
      document.getElementById('quote').innerText = data[random].text;
      document.getElementById('author').innerText = data[random].author;
    });
}
