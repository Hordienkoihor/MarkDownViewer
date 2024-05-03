window.onload = function() {
    let converter = new showdown.Converter();
    let pad = document.getElementById('pad');
    let markdownArea = document.getElementById('markdown');

    pad.addEventListener('keydown', function(e){
        if(e.keyCode === 9){
            let start = e.selectionStart;
            let end = e.selectionEnd;

            let target = e.target;
            let value = target.value;

            target.value = value.substring(0, start) + "\t" + value.substring(end);

            this.selectionStart = this.selectionEnd = start +1

            e.preventDefault()
        }
    })

    let previousMarkdownValue;

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

    if(document.location.pathname.length > 1){

        var documentName = document.location.pathname.substring(1);
        sharejs.open(documentName, 'text', function(error, doc) {
            doc.attach_textarea(pad);
            convertTextAreaToMarkdown();
        });
    }

    convertTextAreaToMarkdown();
}