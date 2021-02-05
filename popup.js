const form = document.getElementById('create');

const broadcast = message => {
  console.log(message);
  console.log('Broadcasting...')
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      console.log(response)
      console.log('Broadcast Done!')
    });
  });
};

form.addEventListener('submit', (event) => {
  const URL = form.elements['link'];
  const times = form.elements['time'];
  const autoMute = form.elements['micOff'];
  const autoBlind = form.elements['camOff'];

  console.log(times.value)

  for (i = 0; i < times.value; i++) {
    window.open(URL.value);
  }

  console.log('Form Submitted');

  /*broadcast({
    type: 'create',
    link: URL,
    amount: times,
    mute: autoMute,
    blind: autoBlind
  })*/

  event.preventDefault();
});