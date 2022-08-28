import { subscribeToHellfireClub } from "./firebase/hellfire-club.js";

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')
const themeButton = document.getElementById('theme-button')
const music = document.getElementById('music')


btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //salvar no banco de dados
    const subscriptionId = await subscribeToHellfireClub(subscription)
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

})

window.addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
})

themeButton.addEventListener('click', function (){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('music');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.2;
})

