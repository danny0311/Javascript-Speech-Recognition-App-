const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults =true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {

    const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.innerText = text;
    texts.appendChild(p);

    //this is to create another <p> after ending speech. Otherwise,
    //new speech would overwrite the exitting text.
    if(e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hi!!'
            texts.appendChild(p);
        }
        if(text.includes('how are you')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'I am doing good. How about you?'
            texts.appendChild(p);
        }
        if(text.includes('what is your name') || text.includes("what's your name")){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'My name is Daniel!! Yours?'
            texts.appendChild(p);
        }
        if(text.includes('hi')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Hello!!'
            texts.appendChild(p);
        }
        if(text.includes('open Google')||text.includes('go to Google')){
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Opening google...'
            texts.appendChild(p);
            window.open('https://www.google.com')
        }
        p = document.createElement('p');
    }

    console.log(text);
})

//once you stop speaking, this is to trigger another recognition
recognition.addEventListener('end', ()=> {
    recognition.start()
})

recognition.start();