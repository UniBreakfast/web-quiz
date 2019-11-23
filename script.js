import { globalize } from './helpers.js'
import Quiz from './classes/Quiz.js'


fetch('questions.json').then(response => response.json()).then(questions => {
  const quiz = new Quiz(questions, document.body)

  globalize({quiz})
})
