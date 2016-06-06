$(document).ready( function() {

    // Create an array of objects for the questions.
    var questions = [
        {
            questNum: 1,
            questText: 'Which player on the ATP Tour has won the most Grand Slam titles?',
            mysteryImg: 'images/mystery-federer.png',
            actualImg: 'images/federer.png',
            choices: ['Pete Sampras', 'Rafael Nadal', 'Roger Federer', 'John McEnroe'],
            correct: 2,
            feedback: 'Roger Federer has won 17 Grand Slam titles including 7 Wimbledon, 5 US Open, 1 French Open, and 4 Australian Open titles.'
        },

        {
            questNum: 2,
            questText: 'This player has won the French Open a whopping nine times over a ten year period!',
            mysteryImg: 'images/mystery-nadal.png',
            actualImg: 'images/nadal.png',
            choices: ['Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'John Isner'],
            correct: 1,
            feedback: 'Rafael Nadal is considered to be "The King of Clay" and one of the greatest players ever.'
        },

        {
            questNum: 3,
            questText: 'Which of these players won the men\'s singles championship at the 2012 Olympic Games?',
            mysteryImg: 'images/mystery-murray.png',
            actualImg: 'images/murray.png',
            choices: ['Andy Murray', 'Novak Djokovic', 'Pete Sampras', 'Andy Roddick'],
            correct: 0,
            feedback: 'Andy Murray is the first British singles champion in over 100 years.'
        },

        {
            questNum: 4,
            questText: 'Who is the only player to have beaten both Roger Federer and Rafael Nadal in all four Grand Slam Events?',
            mysteryImg: 'images/mystery-djokovic.png',
            actualImg: 'images/djokovic.png',
            choices: ['Andre Agassi', 'Andy Roddick', 'Novak Djokovic', 'Pete Sampras'],
            correct: 2,
            feedback: 'Novak Djokovic is currently ranked number 1 in the world on the ATP Tour.'
        },

        {
            questNum: 5,
            questText: 'This player won the longest men\'s singles match ever to be played at Wimbledon.',
            mysteryImg: 'images/mystery-isner.png',
            actualImg: 'images/isner.png',
            choices: ['Rafael Nadal', 'John McEnroe', 'Pete Sampras', 'John Isner'],
            correct: 3,
            feedback: 'John Isner defeated Nicolaus Mahut in 11 hours and 5 minutes. The match was played over a three day period since there are no court lights at Wimbledon.'
        }

    ];

    // Initialize variables
    var questionNumber = 0;
    startQuiz();

    function startQuiz() {
        setButton('submit');
        updateQuestion();
    }

    $('.button').on('click', '#submit-button', function(e) {
        // Prevent the page from reloading.
        e.preventDefault();

        // Set the feedback to present to the user.
        var feedback = questions[questionNumber].feedback;
        console.log("The feedback is: " + feedback);

        // Hide the list of choices and display the feedback.
        $('ul.response-list').hide();
        $('div.answer').html('<span>Answer: </span><p class="answer-text">' + feedback + '</p>');
        $('div.answer').show();


        // Set the current image to the actual image.
        setImage('actual');

        // Change the button depending on where the user is in the quiz.
        if (questionNumber < 4) {
            setButton('next');
        } else {
            setButton('retake');
        }

        // Add a few variables that will be used to render the correct
        // score ball depending on the user's response to the question.
        var ballNumber = questionNumber + 1;
        var correctBall = 'images/correct-answer-ball.png';
        var incorrectBall = 'images/wrong-answer-ball.png';
        var choice = $("input[type='radio'][name='selection']:checked").val();
        var correctAnswer = questions[questionNumber].correct;
        var ball;

        // Check the response to see if it's right or wrong.
        if (choice == correctAnswer) {
            ball = correctBall;
        } else {
            ball = incorrectBall;
        }
        $('li.ball-' + ballNumber + ' img').attr('src', ball);

    });

    $('.button').on('click', '#next-button', function(e) {
        // Prevent the button event from reloading the page.
        e.preventDefault();

        // Get the new question and answer choices.
        // Increment the question number.
        questionNumber += 1;
        updateQuestion();

        // Update the image.
        setImage('mystery');

        // Show the submit button.
        setButton('submit');

    });

    function setImage(type) {
        var image;

        if (type === 'actual') {
            // Set the current image to the actual image.
            image = questions[questionNumber].actualImg;
        } else if (type === 'mystery') {
            // Set the image to the mystery image.
            image = questions[questionNumber].mysteryImg;
        }
        $('.player img').attr('src', image);
        return;
    }

    function setButton(value) {
        var submitHTML = '<input type="submit" id="submit-button" value="Submit" name="submit" />';
        var nextHTML = '<input type="submit" id="next-button" value="Next" name="next" />';
        var retakeHTML = '<input type="submit" id="retake-button" value="Try Again" name="retake" />';
        if (value === 'submit') {
            $('.button').html(submitHTML);
        } else if (value === 'next') {
            $('.button').html(nextHTML);
        } else if (value === 'retake') {
            $('.button').html(retakeHTML);
        }
        return;
    }

    function updateQuestion() {
        var questionText = questions[questionNumber].questText;
        var choices = questions[questionNumber].choices;

        // Insert the new question text and the list of choices into the page.
        $('.question').html('<span>Question </span><span class="count">1</span>: <p class="answer-text">' + questionText + '</p>');
        $('ul.response-list').empty();
        $('div.answer').hide();
        $('ul.response-list').show();
        for (var i=0; i < choices.length; i++) {
            $('ul.response-list').append('<li class="response"><input type="radio" name="selection" value="' + i + '"><span>' + choices[i] + '</span></li>');
        }
        return;
    }

});

