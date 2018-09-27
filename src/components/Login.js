import React, { Component } from 'react';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      username: e.target.username,
      password: e.target.password
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Name</FormLabel>
        <FormInput onChangeText={this.handleChange} />
        <FormInput onChangeText={this.handleChange} />
        <FormValidationMessage>Error message</FormValidationMessage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2c2d',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;
