document.getElementById('CV').style.display = "none";
document.getElementById('project').style.display = "none";

function Check() {
    var stock_value = document.getElementById('text-submit').value;

    if (stock_value == 'unmdp') {
        document.getElementById('CV').style.display = 'block';
        document.getElementById('project').style.display = 'block';
        document.getElementById('protect').style.display = 'none';
    } else {
        document.getElementById('HiddenText').innerHTML = 'ERREUR veuillez r\u00e9essayer.';
    }
}

function Alert() {
    if (window.confirm('Attention le site que vous voulez acc\u00e9der peut \u00eatre lent \u00e0 charger il est possible qu\'il faudra la recharger une deuxi\u00e8me fois !')) {
        document.location = 'https://williamwarnet80.000webhostapp.com/';
    }
}