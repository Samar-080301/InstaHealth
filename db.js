document.getElementById("myButton").onclick = function () {
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "qwerty"
    });
    con.connect(function(err) {
    if (err) throw err;
    })
    alert("done!!!");
        
    location.href = "done.html";  
    };
