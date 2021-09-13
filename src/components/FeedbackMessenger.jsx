import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sound from '@studysync/react-sound';


import etabom from '../files/sounds/e-ta-bom.mp3';
import naoconsegue from '../files/sounds/naoconsegue.mp3';
import yeah from '../files/sounds/yeah.mp3';

class FeedBackMessenger extends Component {
  render() {
    const { rightQuestions, gameQuestions } = this.props;
    const halfAcerts = (gameQuestions.length / 2);


    const messageFeedback = () => {
      if (rightQuestions === gameQuestions.length) {
        return (
          <>
            <h2 className="text-center">PARABÉNS, VOCÊ ACERTOU TODAS!</h2>
            <Sound
              url={ yeah }
              volume={ 15 }
              playStatus={ Sound.status.PLAYING }
              onLoading={ this.handleSongLoading }
              onPlaying={ this.handleSongPlaying }
              onFinishedPlaying={ this.handleSongFinishedPlaying }
            />
          </>
        );
      }
      if (rightQuestions >= halfAcerts) {
        return (
          <>
            <h2 className="text-center">Mandou bem!</h2>
            <Sound
              url={ etabom }
              playStatus={ Sound.status.PLAYING }
              onLoading={ this.handleSongLoading }
              onPlaying={ this.handleSongPlaying }
              onFinishedPlaying={ this.handleSongFinishedPlaying }
            />
          </>
        );
      }
      return (
        <>
          <h2 className="text-center">Podia ser melhor...</h2>
          <Sound
            url={ naoconsegue }
            playStatus={ Sound.status.PLAYING }
            onLoading={ this.handleSongLoading }
            onPlaying={ this.handleSongPlaying }
            onFinishedPlaying={ this.handleSongFinishedPlaying }
          />
        </>

      );
    };

    return messageFeedback();
  }
}

const mapStateToProps = ({ game }) => ({
  rightQuestions: game.asserts,
  gameQuestions:  game.questions,
});

FeedBackMessenger.propTypes = {
  gameQuestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  rightQuestions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(FeedBackMessenger); // add connect
