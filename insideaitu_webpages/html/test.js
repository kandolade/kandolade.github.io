
function app() {
    const buttons = document.querySelectorAll('.rectangle__top')
    const cards = document.querySelectorAll('.rectangle')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((rectangle) => {
        rectangle.addEventListener('click', () => {
            const currentCategory = rectangle.dataset.filter
            filter(currentCategory, cards)
        })
    })

    cards.forEach((rectangle) => {
        rectangle.ontransitionend = function () {
            if (rectangle.classList.contains('anime')) {
            }
        }
    })
}

app()

var musicSpan = document.getElementById('musicSpan');
musicSpan.addEventListener('click',function(){
    document.getElementById('sound').play()
})

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
    if (key.keyCode === 73 && key.ctrlKey ) {
        document.querySelector('.sprite-container').classList.add('sprite-container_hide');
    }
}
function search() {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("myUL")
    const product = document.querySelectorAll(".container")
    const pName = document.getElementsByTagName("h2")

    for (var i = 0; i < pName.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textValue = match.textContent || match.innerHTML
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
        }
    }
    }
}