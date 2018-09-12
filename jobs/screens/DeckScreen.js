import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  renderCard(job) {
    const initialRegion ={
      longitude: +job.address.geo.lng,
      latitude: +job.address.geo.lat,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card
        title={job.company.bs}
      >
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          >

          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company.name}</Text>
          <Text>10 days ago</Text>
        </View>
        <Text>{job.company.catchPhrase}</Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="No more jobs">

      </Card>
    )
  }
  componentDidMount() {
    console.log(this.props.jobs)
  }


  render() {
    return (
      <View style={{justifyContent: 'center'}}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
});

const mapStateToProps = state => {
  return {
    jobs: state.jobs.result
  }
}

export default connect(mapStateToProps)(DeckScreen);
