    let counter = 0;
    
option = {
     threshold: 0.0
}


function my_function(entries, observer)
 {  
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry);
                entry.target.src = entry.target.dataset.src;
                counter++;
                observer.unobserve(entry.target);
                text.innerHTML =  counter+' images loaded from 20'
                if (counter == 20) {
                    text.style.backgroundColor= "green";
                    setTimeout(()=> {
                        text.remove();
                    }, 3000)
                }
            }
        })
}


const observer = new IntersectionObserver(my_function, option)

let my_img = document.querySelectorAll('img');
for (let index = 0; index < my_img.length; index++) {
    observer.observe(my_img[index]);
}
