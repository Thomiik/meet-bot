chrome.runtime.onMessage.addListener((request, sender, response) => {
  if (request.type === create) {
    const times = request.times;
    const url =  request.url;
    for (i = 0; i < times.value; i++) {
      window.open(url.value)
    }
    response({ lol: 'yes' })
  } else {
    response({ lol: 'no' })
  }
});