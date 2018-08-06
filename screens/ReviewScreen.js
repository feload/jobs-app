import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Platform } from 'react-native';
import { Button, Card, Icon } from "react-native-elements";
import { connect } from 'react-redux';
import { MapView } from "expo";

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      tabBar: {
        icon:({ tintColor }) => {
        return <Icon name="favorite" color={tintColor} size={30} />;
      }},
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

      const initialRegion = {
        latitude: job.latitude,
        longitude: job.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };

      return (
        <Card key={job.jobkey}
          title={job.jobtitle}>
          <View style={{ height: 200 }}>
            <MapView
              style={{flex: 1}}
              cachedEnables={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}>
            </MapView>
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
    marginTop: 10,
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