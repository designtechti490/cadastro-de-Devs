document.getElementById('start-journey-btn').addEventListener('click', function() {
	window.location.href = 'form.html';
  });
  
  document.querySelector('.crawl-content').addEventListener('animationend', function() {
	document.getElementById('start-journey-btn').classList.add('active');
  });
  
