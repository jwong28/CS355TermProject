var JSONInformation;
var CSVInformation;
var XMLListInformation;
$(document).ready(function(){
    $(".checkbox").click(function(){
        var JSONList = {
            Result:[]
        };
        var CSVList = [];
        var XMLList = [];
        var checkboxes = document.querySelectorAll('td');
        for(let i=0;i<checkboxes.length;i+=2){
            if(checkboxes[i].children[0].checked){
                var url = checkboxes[i+1].children[0].href;
                var title = checkboxes[i+1].children[0].textContent.trim();
                var description = checkboxes[i+1].children[1].textContent;
                JSONList.Result.push(
                        {title:title,
                         url:url,
                         description:description}
                );
                CSVList.push(`${title},${url},${description}\n`);
                XMLList.result
                XMLList.push(
                            [`<result>\n
                              \t<title>${title}</title>\n
                                <url>${url}</url>\n
                                <description>${description}</description>
                              </result>\n`
                            ]);
            }
        }
        JSONInformation = JSONList;
        CSVInformation = CSVList;
        XMLListInformation = XMLList;
    });
});

$(document).ready(function(){
    $(".checkall").click(function(){
        var JSONList = {
            Result:[]
        };
        var CSVList = [];
        var XMLList = [];
        var checkboxes = document.querySelectorAll('td');
        for(let i=0;i<checkboxes.length;i+=2){
            if(checkboxes[i].children[0].checked){
                var url = checkboxes[i+1].children[0].href;
                var title = checkboxes[i+1].children[0].textContent.trim();
                var description = checkboxes[i+1].children[1].textContent;
                JSONList.Result.push(
                        {title:title,
                         url:url,
                         description:description}
                );
                CSVList.push(`${title},${url},${description}\n`);
                XMLList.result
                XMLList.push(
                            [`<result>\n
                              \t<title>${title}</title>\n
                                <url>${url}</url>\n
                                <description>${description}</description>
                              </result>\n`
                            ]);
            }
        }
        JSONInformation = JSONList;
        CSVInformation = CSVList;
        XMLListInformation = XMLList;
    });
});

$(document).ready(function() {
    $("#Download").click(function() {
        switch(document.getElementById("fileFormats").value){
            case 'CSV' :
                var blob = new Blob([CSVInformation.join('')], {type: "application/vnd.ms-excel"});
                var myBlobUrl = URL.createObjectURL(blob);
                document.getElementById("Download").href = myBlobUrl;
                document.getElementById("Download").download = "results.csv";
                break;
            case 'JSON':
                var data = JSON.stringify(JSONInformation,null,'\t');
                var blob = new Blob([data], {type: "application/json"});
                var myBlobUrl = URL.createObjectURL(blob);
                document.getElementById("Download").href = myBlobUrl;
                document.getElementById("Download").download = "results.json";
                break;
            case 'XML':
                var blob = new Blob([
                    '<?xml version="1.0" encoding="UTF-8"?>\n<results>\n' 
                    + XMLListInformation.join('') + 
                    '\n</results>'], {type: "text/plain"});
                var myBlobUrl = URL.createObjectURL(blob);
                document.getElementById("Download").href = myBlobUrl;
                document.getElementById("Download").download = "results.xml";
                break;
            default:
                console.log("Not a valid file format.");
                break;
        }
    });
});
