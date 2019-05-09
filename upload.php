<?php
//  text/xml
//  application/json
    $results = [];
    $val = 0;
   if ( isset($_FILES["file"])) {
            //if there was an error uploading the file
        if ($_FILES["file"]["error"] > 0) {
            // echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
        }
        if($_FILES["file"]["type"] == 'application/vnd.ms-excel'){
            $file_data = fopen($_FILES["file"]["tmp_name"], "r");
            while($row = fgetcsv($file_data)){
                $results[] = $row;
            }
            fclose($file_data);
            $myJSON = json_encode($results);
            echo $myJSON;
        }
        else if($_FILES["file"]["type"] == 'text/xml'){
            $xml = simplexml_load_file($_FILES["file"]["tmp_name"]) or die("Error");
            foreach($xml->children() as $result) {
                $row = [(string)$result->title, (string)$result->url, (string)$result->description];
                $results[] = $row;
            }
            $myJSON = json_encode($results);
            echo $myJSON;
        }
        else if($_FILES["file"]["type"] == 'application/json'){
            $file_data = file_get_contents($_FILES["file"]["tmp_name"]);
            $data = json_decode($file_data, true);

            for($i=0; $i<count($data[Result]); $i++){$row = [];
                $row = [$data[Result][$i]['title'], $data[Result][$i]['url'], $data[Result][$i]['description']];
                $results[] = $row;
            }
            $myJSON = json_encode($results);
            echo $myJSON;
        }
        else {
            echo "File not xml, csv or json";
        }
   }  
   else {
    echo "No file selected";
    }  
?>