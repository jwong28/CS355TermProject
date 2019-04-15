<?php
    if(isset($_POST['submit'])){
        $fileFormat = $_POST['fileFormats'];
        $results = $_POST["result"];
        $dom = new DOMDocument();
        $filePath = $_SERVER['DOCUMENT_ROOT'] . '/file.JSON';
        $data = json_decode(file_get_contents("JSONStuff.JSON"),true);
        if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/JSONStuff.JSON'))
            echo $_SERVER['DOCUMENT_ROOT'] . '/JSONStuff.JSON';
        else
            echo "Idk what happened";
        $dom->loadHTML("searchFromFile.html");
        switch($fileFormat){
            case 'CSV':

                break;
            case 'JSON':
                $newFile = fopen($filePath . 'JSON', "a+") or die("Unable to open file!");
                $file = ["Result"[]];
                foreach($dom->find('tr') as $row){
                        if(isset($results[$i])){
                            $title = $row->find('a',0)->plaintext;
                            $url = $row->find('a',0)->href;
                            $description = $row->find('p',0)->plaintext;
                            $concat = '"title:""' . $title . '", "url":"' . $url . '", "description":"' .  $description . '"';
                            $file["Result"][]= $concat;
                            fwrite($newFile,$file);
                        }
                }
                fclose($newFile);
                break;
            case 'XML':
                break;
            default:
                echo "You somehow broke the system!";
                break;
        }
        echo $fileFormat;
        echo $data["Result"]["url"];
    }
?>