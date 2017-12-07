class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      keyword: 'kirby'
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.btnHandler = this.btnHandler.bind(this)
  }
  clickHandler(e) {
    this.setState({
      video: e
    });
  }
  btnHandler(props) {
    searchYouTube(this.state.keyword);
  }
  txtHandler() {

  }
  keyUpHandler(e) {
    //if keyval = 13
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search btnHandler={this.btnHandler} txtHandler={this.txtHandler} keyUpHandler={this.keyUpHandler}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videos} clickHandler = {this.clickHandler}/></div>
          </div>
        </div>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
