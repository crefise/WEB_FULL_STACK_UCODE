let test = document.getElementsByClassName("block");
console.log("hee");
for (let index = 0; index < test.length; index++) {
    console.log('test');
    test[index].ondblclick = function() {
        console.log('tes2t');
        switch_mode(test[index]);}
}

function switch_mode(element) {
    if (element.classList.contains('active_block')) {
        element.classList.remove('active_block');
    }
    else {
        element.classList.add('active_block');
    }
}

for (let index = 0; index < test.length; index++) {
    test[index].onmousedown = function (e) {
        function moveAt(e) {
            test[index].style.left = e.pageX - test[index].offsetWidth / 2 + 'px';
            test[index].style.top = e.pageY - test[index].offsetHeight / 2 + 'px';
          }

        document.onmousemove = function(e) {
            moveAt(e);
        }
        test[index].onmouseup = function() {
            document.onmousemove = null;
            test[index].onmouseup = null;
        }
        if (test[index].classList.contains('active_block')) {
            document.onmousemove = null;
            test[index].onmouseup = null;
        }
    }
    
}




