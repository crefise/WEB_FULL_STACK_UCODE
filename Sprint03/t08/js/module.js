class MyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList{
    constructor(array) {
        for (let index = 0; index < array.length; index++) {
            this.add(array[index]);
        }
    }





    [Symbol.iterator] =() => {
        return { 
            current: this.head,
            next () {
                if (this.current == null) {
                    return { done: true}
                }
                else {
                    let temp_data =  this.current.value;
                    this.current = this.current.next;
                    return { done: false, value: temp_data}
                }
            }
        }
    }

    add (data) {
        if (this.head == null) {
            this.head = new MyNode(data);
        }
        else {
            let temp = this.head;
            while(temp.next != null) {
                temp = temp.next;
            }
            temp.next = new MyNode(data);
        } 
    }

    log () {
        let result_str = "";
        let temp = this.head;
        while (temp!=null) {
            result_str += temp.value;
            if (temp.next) 
                result_str += ", ";
            temp = temp.next;
        }
        console.log(result_str);
    }

    remove(value) {
        if (this.head.value == value) {
            this.head = this.head.next;
            return true;
        }
        let temp = this.head;
        let will_delete = null;
        while(temp.next) {
            if (temp.next.value == value) {
                will_delete = temp.next;
                break;
            }
            temp = temp.next;
        }
        if (will_delete) {
            temp.next = will_delete.next;
            return true;
        }
        return false;
    }
    contains (value) {
        let temp = this.head;
        while(temp) {
            if (temp.value == value) {
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
    clear () {
        this.head = null;
    }
    
}

 function createLinkedList(array) {
    return new LinkedList(array);
}

export{createLinkedList}
