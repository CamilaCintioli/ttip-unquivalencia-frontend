import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDLUfAxCaeeB5OuqFWpQbeR0BPMgkLGDCI',
  authDomain: 'unquivalencias-c74af.firebaseapp.com',
  databaseURL: 'https://unquivalencias-c74af.firebaseio.com',
  projectId: 'unquivalencias-c74af',
  storageBucket: 'unquivalencias-c74af.appspot.com',
  messagingSenderId: '688522909884',
  appId: '1:688522909884:web:358aad0913817cefffd8b9',
  measurementId: 'G-MQJS2GCVZM',
};
firebase.initializeApp(firebaseConfig);

export default class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      uploadValue: 0,
    };
  }

  handleOnChange(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`pictures/${file.name}`);
    const task = storageRef.put(file);

    task.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
        uploadValue: percentage,
      });
    }, (error) => {
      console.error(error.message);
    }, () => {
      // Upload complete
      this.setState({
        picture: task.snapshot.downloadURL,
      });
    });
  }

  render() {
    return (
      <div>
        <progress value={this.state.uploadValue} max="100">
          {this.state.uploadValue}
          {' '}
%
        </progress>
        <br />
        <input type="file" onChange={this.handleOnChange.bind(this)} />
        <br />
        {/* <iframe className="doc" src={this.state.picture} width="30%" height="500px" /> */}
      </div>
    );
  }
}

ReactDOM.render(<FileUpload />, document.getElementById('root'));
