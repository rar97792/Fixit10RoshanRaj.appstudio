let req = ""
let query = ""
let results = ""
let resultstate = ""
let pw = "Knoxave1!"  // put your database password here

customerSelect.onshow=function(){
  txtResults_contents.style.height = "100px"
}

btnCust.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rar97792&pass=" + pw + "&database=rar97792&query=" + query)