let ekle = document.getElementById("Add") //Ekle tuşu
let toDoContainer = document.getElementById("toDoContainer") //Ekleye basınca aşağıya paragraf olarak kaydetme kodu
let inputText = document.getElementById("inputText") //Yapılacaklar listesinde yazılan yazılar
let sil = document.getElementById("Clear")

ekle.addEventListener('click', function() {

    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-stling')
    toDoContainer.appendChild(paragraph)
    paragraph.innerHTML = inputText.value
    inputText.value = ""
if (inputText.value == "" && paragraph.innerHTML == "") {//Boş olarak ekleye tıklayınca 
        alert("Hiçbir şey yazmadınız")
    }




    paragraph.addEventListener('click', function() {
        paragraph.classList.add('yazi')



    })
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph)

    })
    Clear.addEventListener('click', function() {
        paragraph.remove()
    })

})
