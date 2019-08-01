function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component, Fragment } = React;
const { render } = ReactDOM;
const root = document.querySelector('#app');
const MAGIC_NUMBER = 3;
const CardTrack = styled.div`
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  width: 400px;
`;
const getPosRules = () => {

  let result = '';
  for (let i = 0; i < MAGIC_NUMBER + 1; i++) {
    if (i === 0) {
      result += `
        &[data-pos="0"] {
          filter: grayscale(0) drop-shadow(3px 3px 3px #d4d4d4);
          transform: scale(1) translate(0, 0); z-index:${MAGIC_NUMBER + 1};
        }`;
    } else if (i === 1) {
      result += `
        &[data-pos="1"],
        &[data-pos="-1"] {
          z-index: 3;
        }
        &[data-pos="1"] {
          transform: scale(0.8) translate(75%, 0);
        }
        &[data-pos="-1"] {
          transform: scale(0.8) translate(-75%, 0);
        }
      `;
    } else if (i === 2) {
      result += `
        &[data-pos="2"],
        &[data-pos="-2"] {
          z-index: 2;
        }
        &[data-pos="2"] {
          transform: scale(0.6) translate(175%, 0);
        }
        &[data-pos="-2"] {
          transform: scale(0.6) translate(-175%, 0);
        }
      `;
    } else if (i === 3) {
      result += `
        &[data-pos="3"],
        &[data-pos="-3"] {
          z-index: 1;
        }
        &[data-pos="3"] {
          transform: scale(0.5) translate(275%, 0);
        }
        &[data-pos="-3"] {
          transform: scale(0.5) translate(-275%, 0);
        }
      `;
    }
  }
  return result;
};
const Container = styled.div`
  border-radius: 6px;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  filter: grayscale(1) drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.15));
  transform: scale(0) translate(0, 0);
  transition: transform 0.5s, filter 0.5s, z-index 0.5s;
  width: 100%;
  ${getPosRules()}
  z-index: -1;

  &[data-gone="true"] .content-mark {
    clip-path: polygon(100% 70%, 0% 30%, 0% 100%, 100% 100%);
  }
  &[data-coming="true"] .content-mark {
    clip-path: polygon(100% 30%, 0% 70%, 0% 100%, 100% 100%);
  }
`;
const AuthorAvatar = styled.img`
  background: #87d37c;
  border-radius: 100%;
  height: 60px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
`;
const Hero = styled.img`
  background: #777777;
  height: 70%;
  object-fit: cover;
  width: 100%;
`;
const ContentMark = styled.div`
  background-color: ${p => p.pos === 0 ? '#fafafa' : '#999'};
  bottom: 0;
  clip-path: polygon(100% 50%, 0% 50%, 0% 100%, 100% 100%);
  height: 100%;
  left: -1px;
  position: absolute;
  right: -1px;
  transition: clip-path 0.5s, background 0.5s;
`;
const Content = styled.div`
  bottom: 0;
  height: 50%;
  left: 0;
  padding: 30px 10px 10px 10px;
  position: absolute;
  right: 0;
`;
const Title = styled.h1`
  align-items: center;
  color: #111;
  display: flex;
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: 1.25rem;
  height: 5rem;
  justify-content: center;
  margin: 10px 0 0 0;
  padding: 0;
  text-align: center;
`;
const AuthorName = styled.h2`
  bottom: 10px;
  color: ${(p) =>
p.pos === 0 ?
['#f89406', '#22a7f0', '#db0a5b', '#2eec71'][
Math.floor(Math.random() * 4)] :

'#777'};
  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
  font-size: 0.75rem;
  font-weight: 300;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  transition: color 0.5s;
  width: 100%;
`;
const SVG = styled.svg`
  height: 30px;
  width: 30px;
`;
const Button = styled.button`
  align-items: center;
  background: 0;
  border: 4px solid #ffffff;
  border-radius: 100%;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  height: 44px;
  left: 50%
  margin: 30px 20px 0 20px;
  top: 50%;
  transition: background 0.5s;
  width: 44px;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
`;
class Card extends Component {constructor(...args) {super(...args);_defineProperty(this, "render",



    () => {
      const { hero, title, author } = this.props.data;
      return (
        React.createElement(Container, _extends({}, this.props, { "data-pos": this.props.pos, "data-gone": this.props.pos < 0, "data-coming": this.props.pos > 0 }),
        React.createElement(Hero, { src: hero }),
        React.createElement(ContentMark, _extends({ className: "content-mark" }, this.props),
        React.createElement(Content, null,
        React.createElement(Title, null, title.charAt(0).toUpperCase() + title.slice(1)),
        React.createElement(AuthorName, this.props, `${author.firstName} ${
        author.lastName
        }`))),


        React.createElement(AuthorAvatar, { src: author.avatar })));


    });}}

/**
           * Main app entry point
           */_defineProperty(Card, "propTypes", { pos: PropTypes.number });
class App extends Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      active: 0,
      cards: [] });_defineProperty(this, "generateCards",







    () => {
      const cards = [];
      for (let i = 0; i < this.props.amount; i++) {
        cards.push({
          // hero: `https://picsum.photos/420/320?image=${i}`,
          author: {
            avatar: faker.internet.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName() },

          title: faker.company.bs() });

      }
      this.setState({ cards });
    });_defineProperty(this, "componentDidMount",
    () => {
      this.generateCards();
    });_defineProperty(this, "render",
    () => {
      const { onNext, onPrev, props, state } = this;
      const { amount } = props;
      const { active, cards, next, prev } = state;
      return (
        React.createElement(Fragment, null,
        cards.length === 0 && React.createElement("h1", null, "Grabbing cards..."),
        cards.length > 0 &&
        React.createElement(CardTrack, null,
        cards.map((data, idx) => {
          let pos = idx - active;
          // Prep for continuous rolling
          if (active >= amount - MAGIC_NUMBER && idx <= MAGIC_NUMBER) {
            pos = idx + (amount - active);
          } else if (active <= MAGIC_NUMBER && idx >= amount - MAGIC_NUMBER) {
            pos = 0 - (amount - idx + active);
          }
          return React.createElement(Card, _extends({ pos }, { data: data, key: `card--${idx}` }));
        })),


        React.createElement(Actions, null,
        React.createElement(Button, { onClick: () => this.setState({ active: active - 1 >= 0 ? active - 1 : amount - 1 }) },
        React.createElement(SVG, { viewBox: "0 0 24 24" },
        React.createElement("path", { fill: "#fff", d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" }))),


        React.createElement(Button, { onClick: () => this.setState({ active: active + 1 > amount - 1 ? 0 : active + 1 }) },
        React.createElement(SVG, { viewBox: "0 0 24 24" },
        React.createElement("path", { fill: "#fff", d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }))))));





    });}}_defineProperty(App, "propTypes", { amount: PropTypes.number });_defineProperty(App, "defaultProps", { amount: 20 });


ReactDOM.render(React.createElement(App, null), root);