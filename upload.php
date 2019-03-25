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
        // else {
            //Print file details
            //  echo "Upload: " . $_FILES["file"]["name"] . "<br />";
            //  echo "Type: " . $_FILES["file"]["type"] . "<br />";
            //  echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
            //  echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";

            //if file already exists
        //     if (file_exists("upload/" . $_FILES["file"]["name"])) {
        //         echo $_FILES["file"]["name"] . " already exists. ";
        //      }
        //     else {
        //         //Store file in directory "upload" with the name of "uploaded_file.txt"
        //         $storagename = "uploaded_file.csv";
        //         move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $storagename);
        //         // echo "Stored in: " . "upload/" . $_FILES["file"]["name"] . "<br />";
        //     }
        // }
        // $tmpName = $_FILES['csv']['tmp_name'];
        // $csvAsArray = array_map('str_getcsv', file($tmpName)); 
        // $fileContent = file_get_contents($_FILES['upload_file']['tmp_name']);
        // echo fgetcsv($_FILES["file"]["tmp_name"]);
        // echo "Getting file contents";
        // echo file_get_contents($_FILES["file"]["tmp_name"]);
        // echo $fileContent
        // $mimes = array('application/vnd.ms-excel','text/plain','text/csv','text/tsv');
        // if(in_array($_FILES["file"]["type"],$mimes)){
        // do something
            // echo file_get_contents($_FILES["file"]["tmp_name"]);
            // echo fgetcsv($_FILES["file"]["tmp_name"],0,",");
            // $file = fopen("upload/" . $storagename,"r");
            // print_r(fgetcsv($file));
            // fclose($file);
        // } else {
        // echo "Not csv file";
        // }
        // echo file_get_contents($_FILES["file"]["tmp_name"]);
        // echo "CSV while row";
        
        // $allowed_ext = array("csv");
        // $extension = end(explode("."),$_FILES["file"]["name"]);
        // echo $extension
        // if(in_array($extension, $allowed_ext)){
            // echo "File is in extension";
        // $csv = array()
        // $path_parts = pathinfo($_FILES["file"]["tmp_name"]);
        // echo $path_parts;
        // echo $path_parts;
        // print_r($path_parts);
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
            $file_data = fopen($_FILES["file"]["tmp_name"], "r");
            fclose($file_data);

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
        

   //  echo "print";
   // echo "row size ";
   // print_r($val);
   // print_r($results);
   // print json_encode(array("resultingList"=>$results));
  
   }  
   else {
    echo "No file selected";
    }  
    //  echo "dump";
    //  var_dump($results);;
    //  echo "</pre>";
?>