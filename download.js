var checkboxes = document.querySelectorAll("td");
$(document).ready(function(){
    $(".checkbox").click(function(){
        var JSONInformation=[];
        if($('input[type="checkbox"]').prop("checked") == true){
            JSONInformation.push({title:$(this).parent().next().eq(1).text(),
                                  url:$(this).parent().next().eq(1).text(),
                                  description:$(this).parent().next().eq(2).text()});                                          
            // '{ "title" : "' + $(this).parent().next().eq(1).text() + 
            // '" ,"url" : "' + $(this).parent().next().eq(1).text() +
            // '" ,"description" : "' + $(this).parent().next().eq(2).text() +
            // '" }';
            console.log(JSONInformation);
        }
    });
});

$(document).ready(function() {
    $("#Download").click(function() {
        switch(document.getElementById("fileFormats").value){
            case 'CSV' :
                break;
            case 'JSON':
                var myBlob = JSON.stringify(JSONInformation);
                var myBlobUrl = URL.createObjectURL(myBlob);
                window.location.replace(myBlobUrl);
                break;
            case 'XML':
                break;
            default:
                console.log("Not a valid file format.");
                break;
        }
    });
});

// $(document).ready(function(){
//     $('#createObject').click(function(){
//      var ar=[];
//         $('.song').each(function(){
//             if($(this).is(':checked'))
//             {
//                 ar.push({url:$(this).attr('data'),title:$(this).attr('title')}); 
//             }        
//         });
//         alert(JSON.stringify(ar));
//       });
//     });