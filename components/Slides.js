import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  renderReadyButton () {
    return (<Button buttonStyle={styles.buttonStyle} title="I'm ready!" onPress={this.props.onComplete} /> )
  }

  renderSlides () {
    const slides = this.props.data;
    return slides.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.bgColor }]}>
          <Text style={[styles.textStyle, { color: slide.textColor }]}>{ slide.text }</Text>
          { (index === slides.length - 1) ? this.renderReadyButton() : null }
        </View>
      )
    });
  }

  render () {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled>
        { this.renderSlides() }
      </ScrollView>
    )
  }
}

const styles = {
  buttonStyle: {
    marginTop: 20,
    backgroundColor: '#0288D1'
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    padding: 30
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 30
  }
}

export default Slides;