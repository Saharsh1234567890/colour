function color(col) {
    //var copyText = document.getElementById(col).value;
    //copyText.select();
    //copyText.setSelectionRange(0, 99999)
   // document.execCommand("copy",false,col);
    setClipboard(col);
    alert("You have copied the color " + col);
}

function setClipboard(text) {
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        function () {
        /* success */
        },
        function () {
        /* failure */
        }
    );
}