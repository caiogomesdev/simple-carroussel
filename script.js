const points = document.getElementById('points')
var pointsn = 0
const container = document.getElementById('container')


var currentIndex = 0

GeneratePoints()
ChangePoint()


function ChangeCarroussel(value)
{
    currentIndex = (currentIndex+value)%pointsn
    if(currentIndex < 0) currentIndex = pointsn-1

    container.style.transform = `translateX(${940 * -(currentIndex)}px)`
    ChangePoint()
}

function ChangePoint(){
    for(let i = 0; i < pointsn ; i++){
        points.children[i].style.backgroundColor = i == currentIndex ? 'rgba(1,1,1,0.7)' : 'rgba(1,1,1,0.3)'
    }
}

function ChangePointIndex(index){
    currentIndex = index
    container.style.transform = `translateX(${940 * -(currentIndex)}px)`
    ChangePoint()
}


function GeneratePoints(){
    let nImage = document.querySelectorAll('.container img')
    pointsn = nImage.length

    let code = ''
    for(let i = 0; i < pointsn ; i++){
        code += `<div class=\"point\" onclick=\"ChangePointIndex(${i})\"></div>`
    }

    points.innerHTML = code
}