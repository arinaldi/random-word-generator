var genBtn = document.getElementById('generate');
var word = document.getElementById('word');
var number = document.getElementById('number');
var count = 0;

genBtn.addEventListener('click', getRandomWord);
//genBtn.addEventListener('click', countClicks);

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

	request.onload = function() {
	  if (request.status >= 200 && request.status < 400) {
	    word.innerHTML = request.responseText;
	    countClicks();

	  } else {
	    console.log('Reached target server, but it returned an error');
	  }
	};
	request.onerror = function() {
	  console.log('There was a connection error');
	};

	request.send();
}

function countClicks() {
	count++;
	if (count === 1) {
		number.innerHTML = count + ' word';
	} else {
		number.innerHTML = count + ' words'; 
	}
}