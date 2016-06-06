$(document).ready();

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