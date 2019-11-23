import { assign, jsonClone, credom } from '../helpers.js'

export default class Quiz {
  constructor (questions, parent, options={}) {
    assign(this, {parent, options, questions})
    this.build()
    this.start()
  }

  build() {
    this.parent.append(this.domel = credom('section', {className: 'quiz'}))
    this.score = new Score(this.domel)
    this.domel.append(this.main = credom('div', {className: 'main'}))
    this.progress = new Progress(this.domel)
  }

  start() {
    const { shuffleQuestions=true, shuffleAnswers=true } = this.options,
            questions = jsonClone(this.questions), answered = []
    if (shuffleQuestions) questions.shuffle()
    this.next =()=> {
      if (questions.length) {
        const question = questions.pop()
        new Question(question, this.main, answered)
      } else new Results(answered)
    }
    this.next()
  }
}