import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Button, Card } from "react-native-elements";
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button
          title="Settings"
          onPress={ navigation.getParam('navigateToSettings') }
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0, 122, 255, 1)">
        </Button>
      )
    }
  }

  constructor () {
    super();
    this.navigateToSettings = this.navigateToSettings.bind(this);
  }

  componentDidMount () {
    this.props.navigation.setParams({ navigateToSettings: this.navigateToSettings });
  }

  navigateToSettings () {
    this.props.navigation.navigate('settings');
  }

  renderLikedJobs () {
    return this.props.likedJobs.map(job => {
      return (
        <Card>
          <View style={{ height: 200 }}>
            <View style={styles.detailWrapper}>
              <Text>{ job.company }</Text>
              <Text>{ job.formattedRelativeTime }</Text>
            </View>
            <View>
              <Button title="Apply"
              onPress={() => Linking.openURL(job.url)} />
            </View>
          </View>
        </Card>
      );
    });
  }

  render () {
    return (
      <View>
        <ScrollView>
          { this.renderLikedJobs() }
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

const mapStateToProps = (state) => {
  return {
    likedJobs: state.likedJobs
  }
}

export default connect(mapStateToProps)(ReviewScreen);