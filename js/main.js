var genBtn = document.getElementById('generate');
var word = document.getElementById('word');
var number = document.getElementById('number');
var count = 0;

var getRandomWord = function() {
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
	    word.textContent = request.responseText;
	    countClicks();

	  } else {
	    console.log('Reached target server, but it returned an error');
	  }
	};
	request.onerror = function() {
	  console.log('There was a connection error');
	};

	request.send();
};

var countClicks = function() {
	count++;
	if (count === 1) {
		number.textContent = count + ' word';
	} else {
		number.textContent = count + ' words'; 
	}
};

genBtn.addEventListener('click', getRandomWord);