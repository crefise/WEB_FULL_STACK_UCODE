let str = prompt('What animal is the superhero most similar to?', 'Pudge');

if (/^[A-Za-z]+$/.test(str) == false || str.length > 20) {
    alert("bad");
} 
else {
    let hero_name = str;


    str = prompt('Is the superhero male or female? Leave blank if unknown or other.', 'female');
    if (/^male$/.test(str) == false && /^female$/.test(str) == false && str.length != 0) {
        alert("bad");
    }
    else {
        let hero_gender = str;

        str = prompt('How old is the superhero?', '100');
        if (/^[0-9]+$/.test(str) == false || str.length > 5 || str[0] == '0') {
            alert("bad");
        }
        else {
            let hero_age = new Number(str);

            if (hero_gender == 'male' && hero_age < 18) {
                alert("boy");
            } 
            else if (hero_gender == 'male' && hero_age >= 18) {
                alert("man");
            } 
            else if (hero_gender == 'female' && hero_age < 18) {
                alert("girl");
            } 
            else if (hero_gender == 'female' && hero_age >= 18) {
                alert("woman");
            }
            else if (hero_age < 18) {
                alert("kid");
            }
            else {
                alert("hero");
            }
        }
    }
}