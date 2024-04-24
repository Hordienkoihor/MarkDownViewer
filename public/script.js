window.onload = function() {
    let converter = new showdown.Converter();
    let pad = document.getElementById('pad');
    let markdownArea = document.getElementById('markdown');

    let convertTextAreaToMarkdown = function() {
        let markdownText = pad.value
        previousMarkdownValue = markdownText
        html = converter.makeHtml(markdownText)
        markdownArea.innerHTML = html
    }

    let didchangeOccur = () => {
        if(previousMarkdownValue != pad.value) {
            return true
        }
        return false
    }

    setInterval(() => {
        if(didchangeOccur()) {
            convertTextAreaToMarkdown();
        }
    })

    pad.addEventListener('input', convertTextAreaToMarkdown);

    sharejs.open(document.location.pathname, 'text', (error, doc) => {
        doc.attach_textarea(pad)
        convertTextAreaToMarkdown()
    })
}