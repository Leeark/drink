const smallCups = document.querySelectorAll('.small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => hlitCups(index))
})
upDateBig()
function hlitCups(curindex) {
    // 不计算已经点击过的class
    if (curindex === 7 && smallCups[curindex].classList.contains("full")) curindex--;
    else if (smallCups[curindex].classList.contains("full") && !smallCups[curindex + 1].classList.contains("full")) curindex--
    smallCups.forEach((cup, idx) => {
        if (idx <= curindex) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
    upDateBig()
}
function upDateBig() {
    const fullCups = document.querySelectorAll('.full').length
    const totalCups = smallCups.length
    percentage.style.height = `${fullCups / totalCups * 330}px`
    if (fullCups) {
        percentage.innerText = `${fullCups / totalCups * 100}%`
    } else {
        percentage.innerText = ``
    }
    if (fullCups === totalCups) {
        remained.style.height = '0px'
        // remained.style.visibility = 'hidden'
    } else {
        liters.innerText = `${2 * (1 - fullCups / totalCups)}L`
        // remained.style.display = 'flex'
    }
}


