import { assign, jsonClone } from '../helpers.js'

export default class Quiz {
  constructor (questions, domel, options={}) {
    assign(this, {questions, options})
    this.start()
  }

  start() {
    const { shuffleQuestions=true, shuffleAnswers=true } = this.options
    const questions = jsonClone(this.questions)
    if (shuffleQuestions) questions.shuffle()

  }
}