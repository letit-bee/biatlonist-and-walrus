
news = document.getElementsByClassName('b-news-list__item')
for (i in news) {
    if (Math.random(10) > 0.7) {
        news[i].innerHTML += '. Затем биатлонист передаст его моржу.'
    }
}
