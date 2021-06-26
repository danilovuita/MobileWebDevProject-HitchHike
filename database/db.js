var xmlFile = "./HitchWikiDB.xml"

function loadDoc() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.open("GET", xmlFile, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        xmlFunction(this.response);
      }
    };
  
  }