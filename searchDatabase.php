<?php

function getResults()
{
    $dbhost = "149.4.211.180";
    $dbuser = "woje0489";
    $dbpass = "23050489";
    $db = "woje0489";
    $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
    $searchVal = explode(" ",$_POST["search"]);
    $results = array();
    foreach($searchVal as $term){
        if(trim($term) != ""){
            $term = '"' . $term . '"';
            $searchQuery = $conn->query("SELECT page.url, page.title, page.description, page_word.freq
            FROM page, word, page_word
            WHERE page.pageId = page_word.pageId
            AND word.wordId = page_word.wordId
            AND word.wordName = $term
            ORDER BY freq");
            if($searchQuery->num_rows > 0) {
                while($r = mysqli_fetch_array($searchQuery, MYSQLI_ASSOC)){
                    $results[] = $r;
                }
            }
        }
    }
    print json_encode($results);
    $conn -> close();
}

getResults();
