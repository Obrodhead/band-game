import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked:[],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "Nice Job, No Doubles"
    });
    if (newScore === 12) {
      this.setState({ rightWrong: "You're a winner! Click clicky band game to refresh :)" });
      this.handleShuffle();
    }
    else if 
      (newScore >= this.state.topScore) {
        this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Wrong answer, try again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
    return (
      <Wrapper>
      <Nav 
      score={this.state.currentScore}
      topScore={this.state.topScore}
      rightWrong={this.state.rightWrong}
      />
      <Jumbotron />
      <Container>
        {this.state.friends.map(friend => (
          <FriendCard
            key={friend.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={friend.id}
            image={friend.image}
          />
        ))}
         </Container>
      </Wrapper>
    );
  }
}

export default App;