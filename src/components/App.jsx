class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: {},
      keyword: 'corgis'
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.btnHandler = this.btnHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.txtHandler = this.txtHandler.bind(this);
  }
  componentDidMount() {
    this.props.searchYouTube(this.state.keyword, this.searchHandler);
  }
  clickHandler(e) {
    this.setState({
      video: e
    });
  }
  btnHandler() {
    this.props.searchYouTube(this.state.keyword, this.searchHandler);
  }
  txtHandler(e) {
    this.setState({
      keyword: e
    });
    this.props.searchYouTube(this.state.keyword, this.searchHandler);
  }
  searchHandler(e) {
    this.setState({
      videos: e,
      video: e[0]
    });
  }
  render() {
    if (this.state.videos.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <nav className="navbar">
            <img src='../logo.png'/>
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
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
