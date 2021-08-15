function color(col) {
    setClipboard(col);
    alert("You have copied the colour " + col + " to your clipboard");
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

function textChange(){
    var colorArray =    [["#F4F4F5", "bg-gray-100"], 
                        ["#E4E4E7", "bg-gray-200"], 
                        ["#D4D4D8","bg-gray-300"], 
                        ["#A1A1AA","bg-gray-400"], 
                        ["#71717A","bg-gray-500"],
                        ["#FEE2E2","bg-red-100"],
                        ["#FECACA","bg-red-200"],
                        ["#FCA5A5","bg-red-300"],
                        ["#F87171","bg-red-400"],
                        ["#EF4444","bg-red-500"],
                        ["#FEF3C7","bg-yellow-100"],
                        ["#FDE68A","bg-yellow-200"],
                        ["#FCD34D","bg-yellow-300"],
                        ["#FBBF24","bg-yellow-400"],
                        ["#F59E0B","bg-yellow-500"],
                        ["#D1FAE5","bg-green-100"],
                        ["#A7F3D0","bg-green-200"],
                        ["#6EE7B7","bg-green-300"],
                        ["#34D399","bg-green-400"],
                        ["#10B981","bg-green-500"],
                        ["#DBEAFE","bg-blue-100"],                        
                        ["#BFDBFE","bg-blue-200"],
                        ["#93C5FD","bg-blue-300"],
                        ["#60A5FA","bg-blue-400"],
                        ["#3B82F6","bg-blue-500"],
                        ["#E0E7FF","bg-indigo-100"],
                        ["#C7D2FE","bg-indigo-200"],
                        ["#A5B4FC","bg-indigo-300"],
                        ["#818CF8","bg-indigo-400"],
                        ["#6366F1","bg-indigo-500"],
                        ["#EDE9FE","bg-purple-100"],
                        ["#DDD6FE","bg-purple-200"],
                        ["#C4B5FD","bg-purple-300"],
                        ["#A78BFA","bg-purple-400"],
                        ["#8B5CF6","bg-purple-500"],
                        ["#FCE7F3","bg-pink-100"],
                        ["#FBCFE8","bg-pink-200"],
                        ["#F9A8D4","bg-pink-300"],
                        ["#F472B6","bg-pink-400"],
                        ["#EC4899","bg-pink-500"]];

    var text= '';
    for (let index = 0; index < colorArray.length; index++) {
        const color = colorArray[index][0];
        const colorCode =  colorArray[index][1];
        text = text + printCard(color,colorCode);
    }
    document.getElementById("text").innerHTML = text;
  }

  function printCard(col,colCode){
      var printingCard = "This is a card!!!";
      printingCard = `
        <div class="card mx-1 mt-5" onclick="\color('`+col+`')\" style="width: 18rem;">
        <div class="card-img-top `+colCode+`">
        <div class="card-body">
            <h5 class="card-title">`+col+`</h5>
        </div>
        </div>
        </div>`
      return printingCard;
  }


