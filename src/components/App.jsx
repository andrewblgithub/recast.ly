class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVid: 0
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    console.log(e);
    this.setState({
      currentVid: 2
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.videos[this.state.currentVid]}/></div>
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
