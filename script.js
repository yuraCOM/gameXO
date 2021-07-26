let gameWindow = document.querySelector('#game')
document.querySelector('#new-game').onclick = ()=>{
    location.reload() //перезагрузка страницы
}
//при загрузке страницы
window.onload = function () {
    maidFields()
    gameUser()
};

//делаем поле игры
function maidFields() {
    for (i=0; i<9; i++){
        gameWindow.innerHTML += `<div id="field"></div>`
    }
};

//game user - юзер нажимает
let hod = 0
function gameUser() {
    gameWindow.onclick = (event) =>{
        // console.log(event)

        if( event.target.innerText){
            // console.log('занято')
            return false
        } else {
            if (hod %2 ===0){
                event.target.innerText = 'x'
                // check()
            }
            else {
                event.target.innerText = 'o'
                // check()
                // console.log(event.target.innerText)
            }
            hod++
            console.log(hod)
            check()

        }
    }
};

//проверка выйгрыша
function check() {
    let scoreWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let userEvent = document.querySelectorAll('#field')
    let result = ''

    for (i=0; i<scoreWin.length; i++){
        console.log(result,'i= ',i, 'hod = ',hod)

        if ( userEvent[scoreWin[i][0]].innerHTML === 'x' && userEvent[scoreWin[i][1]].innerHTML === 'x' && userEvent[scoreWin[i][2]].innerHTML === 'x'
        ){
            result = 'Победили Крестики'
            viewResult(result)
        }
         if ( userEvent[scoreWin[i][0]].innerHTML === 'o' && userEvent[scoreWin[i][1]].innerHTML === 'o' && userEvent[scoreWin[i][2]].innerHTML === 'o'
        ){
            result = 'Победили Нолики'
            viewResult(result)
        }
        if(result === '' && hod ===9 && i ===7){
            result = 'Ничья'
            viewResult(result)
        }
    }
};
// показываем результат
function viewResult(result) {
    let resultWrapper = document.querySelector('#result-wrapper')
    let resultWinner = document.querySelector('#result')

    gameWindow.style.pointerEvents = 'none';
    resultWinner.innerHTML += `${result}!!!`
    resultWrapper.style.display = 'block'

}