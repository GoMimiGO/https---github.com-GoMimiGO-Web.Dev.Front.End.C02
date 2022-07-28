const textArea = document.getElementById('description');
textArea.addEventListener('input', () => {
    var textLn =  textArea.value;
    document.getElementById('countText').innerHTML='Total words: '+getWordCount(textLn);
});

function getWordCount(str) {
     return str.trim().split(/\s+/).length;
}