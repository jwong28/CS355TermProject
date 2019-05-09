<?php

function OpenCon()
 {
 $dbhost = "woje0489";
 $dbuser = "root";
 $dbpass = "23050489";
 $db = "woje0489";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 echo "COnnected";
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }

function crawl_page($url, $depth = 5)
{
    static $seen = array();
    if (isset($seen[$url]) || $depth === 0) {
        return;
    }

    $seen[$url] = true;

    $dom = new DOMDocument('1.0');
    @$dom->loadHTMLFile($url);

    $anchors = $dom->getElementsByTagName('a');
    foreach ($anchors as $element) {
        $href = $element->getAttribute('href');
        if (0 !== strpos($href, 'http')) {
            $path = '/' . ltrim($href, '/');
            if (extension_loaded('http')) {
                $href = http_build_url($url, array('path' => $path));
            } else {
                $parts = parse_url($url);
                $href = $parts['scheme'] . '://';
                if (isset($parts['user']) && isset($parts['pass'])) {
                    $href .= $parts['user'] . ':' . $parts['pass'] . '@';
                }
                $href .= $parts['host'];
                if (isset($parts['port'])) {
                    $href .= ':' . $parts['port'];
                }
                $href .= dirname($parts['path'], 1).$path;
            }
        }
        crawl_page($href, $depth - 1);
    }
    echo "URL:",$url,PHP_EOL,"CONTENT:",PHP_EOL,$dom->saveHTML(),PHP_EOL,PHP_EOL;
}
crawl_page("https://www.google.com/", 2);
// openCon();