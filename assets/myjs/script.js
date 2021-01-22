document.getElementById('CV').style.display = "none";

function Check() {
    var stock_value = document.getElementById('text-submit').value;

    if (stock_value == 'unmdp') {
        document.getElementById('CV').style.display = 'block';
        document.getElementById('protect').style.display = 'none';
    } else {
        document.getElementById('HiddenText').innerHTML = 'ERREUR veuillez r\u00e9essayer.';
    }
}