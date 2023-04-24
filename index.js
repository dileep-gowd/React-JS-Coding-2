const element = (
  <div className="bg-cont">
    <h1 className="head1">Congratulations</h1>
    <div className="card-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img1"
      />
      <h1 className="head2">Kiran V</h1>
      <p>
        Vishnu Institute of Computer Education and Technology, <br />
        Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img1"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
