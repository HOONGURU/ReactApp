import React, { Component } from "react";
import { randomWord } from './words';
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";


class Hangman extends Component {
  //총 6번의 기회가 주어지는 Hangman에 맞는 이미지를 defaultProp으로 => img의 수나 이미지를 변경할 일 없으므로 
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  //리셋함수, 모든 추리과정을 초기화하고 단어를 바꾼다.
  reset() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  }

  //state의 guessed Set에 들어있는 단어를 이용해 단어에 만약 추론한 글자가 있으면 그 글자를 띄워주고 없으면 언더바로 계속 숨김
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  //글자 버튼 클릭했을 때 추론한 단어를 guessed의 Set에 넣어주고 nWrong의 상태변화.
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  //알파벳을 글자단위로 쪼갠 후 각 글자를 버튼으로 만드는 함수. 이 때 글자 자체가 고유하므로 글자를 key로 사용, guessed가 글자를 지니고 있다면 해당 글자의 버튼을 disabled로.
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
  
  
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong; 
    const isWinner = this.guessedWord().join("") === this.state.answer;
    const altText = `${this.state.nWrong}/${this.props.maxWrong} guesses`;
    let gameState = this.generateButtons();
    if (isWinner) gameState = "You Win!";
    if (gameOver) gameState = "You Lose!";
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p>Guessed Wrong: {this.state.nWrong}</p>
        <p className='Hangman-word'>
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <p className='Hangman-btns'>{gameState}</p>
        <button id='reset' onClick={this.reset}>
          Restart?
        </button>
      </div>
    );
  }
}

export default Hangman;
