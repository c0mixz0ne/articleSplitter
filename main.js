document.addEventListener("DOMContentLoaded", function (event) {
    const textArray = article.textContent.trim().split(' ')
    // Получаем слова статьи в массив
    const lengthText = Math.ceil(article.textContent.trim().split(' ').length/6)
    //Получаем количество слов при делении на количество нужных нам блоков (нам надо разделить текст на 6, можно сделать динамически)


    let i = 0
    let iOfText = [text1, text2, text3, text4, text5, text6] //id для вывода частей статьи
    let iArray = 0 // Итератор точки входа в массив, считаем с 0
    let iLength = lengthText // Количество нужных элементов
    let firstItems // Slice возвращает новый массив отсекая оставшиеся элементы, нам они еще нужны, получаем нужные элементы в отдельную переменную
    while (i < 6) {
        firstItems = textArray.slice(iArray, iLength) //При каждой итерации цикла диапазон нужных id в массиве смещается на lengthText
        iArray = iArray + lengthText
        iLength = iLength + lengthText
        iOfText[i].append(firstItems.join(' '))
        console.log(firstItems,iOfText[i])
        i++
    }
});
