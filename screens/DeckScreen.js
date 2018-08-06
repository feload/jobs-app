import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';
import { MapView } from 'expo';
import { Card, Button, Icon } from "react-native-elements";
import * as actions from '../actions';

class DeckScreen extends Component {

  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon:({ tintColor }) => {
      return <Icon name="description" color={tintColor} size={30} />;
    }
  }

  renderCard (job) {
    const initialRegion =  {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }

    return (
      <Card
        title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{flex:1}}
            cacheEnabled={true}
            initialRegion={initialRegion}>
          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>{job.snippet.replace(/<b>|<\/b>/g, '')}</Text>
      </Card>
    )
  }

  onSwipeRight (job) {
    this.props.likeJob(job);
  }

  renderNoMoreCards () {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back to map"
          large
          icon={{ name: 'my-location'}}
          onPress={() => { this.props.navigation.navigate('map') }}
          backgroundColor="#03A9F4"
        />
      </Card>
    )
  }

  render () {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderNoMoreCards={this.renderNoMoreCards.bind(this)}
          renderCard={this.renderCard}
          onSwipeRight={this.onSwipeRight.bind(this)}
          keyProp="jobkey"
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

const mapStateToProps = ({ jobs }) => {
  return {
    jobs: jobs.results
  }
}

export default connect(mapStateToProps, actions)(DeckScreen);