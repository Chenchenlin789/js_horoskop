function check() {
    let month = document.getElementById('monat').value.toLowerCase()
    switch (month) {
        case 'january':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_aries.png"/>  Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…'
            break;
        case 'february':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_pisces.png"/>  Communication is very important today—written, spoken, and even nonverbal body language will all…'
            break;
        case 'march':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_aries.png"/>  Today your patience might be tested when one or more of your projects gets put on hold by someone…'
            break;
        case 'april':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_taurus.png"/>  Your intense energy makes you a great candidate for a leadership position right now, so if you are…'
            break;

        case 'may':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_gemini.png"/>  If you are not sure if you are ready to commit to a party, a date, a new job, or anything else that…'
            break;
        case 'june':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_cancer.png"/>  Too many different elements in your life are overlapping with each other right now—and it is your……'
            break;

        case 'july':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_leo.png"/>  The issues you will be dealing with today are very complicated ones—you will have to navigate your…'
            break;
        case 'August':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_virgo.png"/> You will get along best with people who appeal to your more analytical side, today. Surprisingly, all… '
            break;
        case 'september':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_libra.png"/>  Pick a cultural event that is coming up and get some tickets for it today…'
            break;
        case 'october':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_scorpio.png"/>  Someone will challenge a belief that you have held for a very long time today—and they will say an…'
            break;
        case 'november':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_sagittarius.png"/>  Someone in your life needs to step up and take on more responsibility—and you need to tell them to.'
            break;
        case 'december':
            document.getElementById("result").innerHTML = '<img src="https://www.horoscopedates.com/img/icon_capricorn.png"/>  Breaking the rules is not always a bad thing—especially if the rules limit your creativity. '
            break;

        default:
            document.getElementById("result").innerHTML = 'not a month'
            break;

    }
}
