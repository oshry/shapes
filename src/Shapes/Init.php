<?php
/**
 * Created by PhpStorm.
 * User: oshry
 * Date: 4/15/15
 * Time: 9:56 PM
 */

namespace Shapes;

use Shapes\Repository;

define('DOCROOT', realpath(dirname(__FILE__).'/../../').DIRECTORY_SEPARATOR);
define('IMAGEROOT', '../app/assets/images/');
require DOCROOT.'/vendor/autoload.php';
class Init {
    public function __construct($db){
        $this->db =$db;
    }
    public function shapes(){
        $query = "SELECT `s`.`id`, `s`.`name`, `q`.`q`, `s`.`image`, `q`.`qid`, `q`.`type`, `s`.`formula` FROM `shapes` s
                  LEFT JOIN `questions` q ON  s.id = q.qid";

        $result = $this->db->query($query);
        $matches =[];
        $i=1;
        foreach($result as $key => $shape){
            $matches[$shape['id']]['id'] = $shape['id'];
            $matches[$shape['id']]['name'] = $shape['name'];
            $matches[$shape['id']]['formula'] = $shape['formula'];
            $matches[$shape['id']]['image'] = IMAGEROOT.$shape['image'];
            $matches[$shape['id']]['questions'][$shape['type']] = $shape['q'];
            $i++;
        }
        return json_encode(array('matches' => $matches));
    }
    public function calculate_shape($formula, $q1, $q2='1'){
        $formula = str_replace('q1', '$q1', $formula);
        $formula = str_replace('q2', '$q2', $formula);
        echo eval("return ".$formula.";");
    }
}
$config = include DOCROOT.'/app/config/database.php';
$db = Repository\DataRepository::instance($config, 'dev');
$get = new Init($db);
if(isset($_GET['formula'])){
    echo $get->calculate_shape($_GET['formula'], $_GET['q1'], $_GET['q2']);
}else{
    echo $get->shapes();
}

