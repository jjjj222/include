//------------------------------------------------------------------------------
//   download
//------------------------------------------------------------------------------
export function download(filename, text) {
    var textToSaveAsBlob = new Blob([text], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    //var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    //var fileNameToSaveAs = "QQ";
    var fileNameToSaveAs = filename;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = function(event)
    {
        document.body.removeChild(event.target);
    }
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

//------------------------------------------------------------------------------
//   upload
//------------------------------------------------------------------------------
export function readFileAsync(file, callback) {
    const reader = new FileReader();
    reader.onload = (event) => {
        const contents = event.target.result;
        callback(contents);
    };
    reader.readAsText(file);
}
