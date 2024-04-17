window.onload = function() {
    
    var studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200551703 | Name: gunratan kaur';

    var jokeText = document.getElementById('joke-text');
    var newJokeBtn = document.getElementById('newbtn');

    
    function getChuckNorrisJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                if (data.value.includes('explicit') || data.value.includes('nsfw')) {
                    
                    getChuckNorrisJoke();
                } else {
                    
                    jokeText.textContent = data.value;
                }
            })
            .catch(function(error) {
                console.log('Error fetching Chuck Norris joke:', error);
            });
    }

  
    newJokeBtn.addEventListener('click', getChuckNorrisJoke);

    
    getChuckNorrisJoke();
};
