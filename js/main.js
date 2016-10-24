var genBtn = document.getElementById('generate');
var word = document.getElementById('word');

genBtn.addEventListener('click', getRandomWord);

function getRandomWord() {
	var url;
	var wordLength = document.getElementById('wordLength').value;

	if (wordLength === 'random') {
		url = 'http://www.setgetgo.com/randomword/get.php';
	} else {
		url = 'http://www.setgetgo.com/randomword/get.php?len=' + wordLength;
	}

	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.setRequestHeader('Content-Type', 'text/plain');

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    word.innerHTML = request.responseText;

	  } else {
	    console.log('Reached target server, but it returned an error');
	  }
	};
	request.onerror = function() {
	  console.log('There was a connection error');
	};

	request.send();
}