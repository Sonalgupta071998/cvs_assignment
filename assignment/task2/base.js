document.getElementById('sub').onclick = function() {
    var sent = document.getElementById('sentence').value;
    var lett = document.getElementById('letter').value;
    var out = document.getElementById('out');

    if (sent.toLowerCase().includes(lett.toLowerCase())){
        var idx = sent.toLowerCase().indexOf(lett.toLowerCase());
        var res = sent.slice(idx+1);
        out.innerHTML = res;
    } else {
        out.innerHTML = "The letter does not exist in the sentence";
    };
}

