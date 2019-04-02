import React, { Component } from 'react';

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  changeSettingsBitrate = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    }
    )
  }

  changeSettingsResolution = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: '720p' }
      })
    })
  }


  render() {
    return (
      <div>
        <button
          className='bitrate'
          onClick={this.changeSettingsBitrate}
        ></button>
        <button
          className='resolution'
          onClick={this.changeSettingsResolution}
        ></button>
      </div>
    );
  }
}

export default YouTubeDebugger;