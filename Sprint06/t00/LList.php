<?php



class LList implements IteratorAggregate{
    public $head;


    function __construct()
    {
        $this->head = NULL;
    }

    function add($value) {
        if ($this->head == NULL) {
            $this->head = new LLItem($value);
            return;
        } 
        $temp =  $this->head;
        while($temp->next != NULL) {
            $temp = $temp->next;
        }
        $temp->next = new LLItem($value);
        $temp->next->next = NULL;
    }

    function getFirst() {
        if ($this->head == NULL) {
            return NULL;
        }
        return $this->head->data;
    }
    function getLast() {
        if ($this->head == NULL) {
            return NULL;
        }

        $temp =  $this->head;
        while($temp->next != NULL) {
            $temp = $temp->next;
        }
        return $temp->data;
    }

    function addArr($arr) {
        foreach($arr as $data) $this->add($data);
    }

    function remove($value) {
        if ($this->head == NULL) return;
        if ($this->head->data == $value) {
             $this->head = $this->head->next; 
             return; }

        $temp = $this->head;
        while($temp->next != NULL) {
            if ($temp->next->data == $value) {
                $temp->next = $temp->next->next;
                return;
            }
            $temp = $temp->next;
        }
    }


    function removeAll($value) {
        if ($this->head == NULL) return;
        if ($this->head->data == $value) { 
            $this->head = $this->head->next; 
            $this->removeAll($value);
        }
        else {
        $temp = $this->head;
        while($temp->next != NULL) {
            if ($temp->next->data == $value) {
                $temp->next = $temp->next->next;
                $this->removeAll($value);
            }
            $temp = $temp->next;
        }
    }
    }


    function contains($value) {
        if ($this->head == NULL) return false;
        if ($this->head == $value) return true;

        $temp = $this->head;
        while($temp->next != NULL) {
            if ($temp->next->data == $value) {
                return true;
            }
            $temp = $temp->next;
        }
        return false;
    }

    function clear() {
        $this->head = NULL;
    }

    function count() {
        if($this->head == NULL){
            return 0;
        }
        $res = 0;
        $temp =  $this->head;
        while($temp != NULL) {
            
            $temp = $temp->next;
            $res++;
        }
        return $res;
    }

    function toString() {
        if($this->head == NULL){
            return;
        }
        $res = "";
        $temp =  $this->head;
        while($temp != NULL) {
            if ($temp->next != NULL)
                $res = $res . ($temp->data . ", ");
            else {
                $res = $res . $temp->data;
            }
            $temp = $temp->next;
        }
        return $res;
    }

    public function getIterator() {
        if($this->head == NULL){
            return [];
        }
        $res = [];
        $temp =  $this->head;
        while($temp != NULL) {
            array_push($res, $temp->data);
            $temp = $temp->next;
        }
        return $res;
    }
}


/*

function autoload($pClassName)
{
include(__DIR__ . "/" . $pClassName . ".php");
}
spl_autoload_register("autoload");
$list = new LList();
$list->addArr([100, 1, 2, 3, 100, 4, 5, 100]);
$list->removeAll(100);
$list->add(10);
echo $list->contains(10) . "\n"; // 1
echo $list->toString() . "\n"; // 1, 2, 3, 4, 5, 10
$sum = 0;
$iter = $list->getIterator();
foreach ($iter as $v)
$sum += $v;
echo "$sum\n"; // 25
$list->clear();
echo $list->toString() . "\n";

*/