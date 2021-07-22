import PropTypes from "prop-types";
import './App.css';
import Shapes from './components/shapes/shapes'
import Logos from './components/logos/logos'
import {ReactComponent as MakeLogo} from './logo.svg'
import {ReactComponent as ReactLogo} from './react-logo.svg'

//Import Logos
import MonashUniversityWhite from './components/logos/monash-university-white.svg'
import MonashUniversityBlack from './components/logos/monash-university-black.svg'
import MonashUniversity60White from './components/logos/monash-university-60-white.svg'
import MonashUniversity60Black from './components/logos/monash-university-60-black.svg'

import fuschia from './components/backgrounds/fuschia.jpeg'
import green from './components/backgrounds/green.jpeg'
import orange from './components/backgrounds/orange.jpeg'
import purple from './components/backgrounds/purple.jpeg'
import red from './components/backgrounds/red.jpeg'
import ruby from './components/backgrounds/ruby.jpeg'

import dataFuturesImage from './components/data-futures-image.svg'

import mal5Black from './components/mal/5line-black.svg'
import mal5White from './components/mal/5line-white.svg'
import mal4Black from './components/mal/4line-black.svg'
import mal4White from './components/mal/4line-white.svg'

function App({ type, theme, logoSelection, headline, subheadline, backgroundImage, width, height, headlineFontSize, subheadlineFontSize, popColor, dataFutures, teamName, fontWeight, malChoice }) {
  let backgroundImg = backgroundImage;
  if(backgroundImage === ""){
    switch (popColor) {
      case "green":
        backgroundImg = green;
        break;
      case "orange":
        backgroundImg = orange;
        break;
      case "purple":
        backgroundImg = purple;
        break;
      case "red":
        backgroundImg = red;
        break;
      case "ruby":
        backgroundImg = ruby;
        break;
      default:
        backgroundImg = fuschia;
        break;
    }
  }
  
  let appStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${backgroundImg})`,
    color: theme
  };

  let logoStyle = {};
//Overflows????
  const headingStyle = {fontSize: `calc(76pt * (${headlineFontSize} / 100))`}
  const subheadlineStyle = {fontSize: `calc(76pt * (${subheadlineFontSize} / 100))`}
  const dataFuturesStyle = {backgroundImage: `url('${dataFuturesImage}')`, display: `${dataFutures ? 'block' : 'none'}`};
  
  let logo = MonashUniversityWhite;
  if(theme === "black" && logoSelection === "default"){
    logo = MonashUniversityBlack;
  } else if(logoSelection === "60-year-lockup"){
    logoStyle = {
      alignSelf: `flex-start`,
    }

    if(theme === "white"){
      logo = MonashUniversity60White;
    } else if(theme === "black"){
      logo = MonashUniversity60Black;
    }
  }

  //Mal Logic
  let mal = "";
  if(theme === "white" && (malChoice === "four-line-mal" || malChoice === "fourStack")){
    mal = mal4White;
  } else if(theme === "black" && (malChoice === "four-line-mal" || malChoice === "fourStack")){
    mal = mal4Black;
  } else if(theme === "white" && (malChoice === "five-line-mal" || malChoice === "fiveStack")){
    mal = mal5White;
  } else if(theme === "black" && (malChoice === "five-line-mal" || malChoice === "fiveStack")){
    mal = mal5Black;
  }

  let conditionalText = (el, text) => {
    if(text !== ""){
      return el;
    }
  }

  let specialFormatting = (text) => {
    text = text.toString().replaceAll("[amp]", "&");
    return text;
  }

  return (
    <div className={`App dataFutures-${dataFutures} fontWeight-${fontWeight} logo-${logoSelection} type-${type}`} style={ appStyle }>
      {conditionalText(<img className="logo" src={logo} style={logoStyle}/>, logoSelection)}
      <div className="heading">
        {conditionalText(<h1 style={headingStyle}>{specialFormatting(headline)}</h1>, headline)}
        {conditionalText(<h2 style={subheadlineStyle}>{specialFormatting(subheadline)}</h2>, subheadline)}
      </div>
      <div className="data-futures" style={dataFuturesStyle}></div>
      <div className="team-name">{teamName}</div>
      <img className="mal" src={mal} />
    </div>
  );
}

App.propTypes = {
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  theme: PropTypes.string,
  logo: PropTypes.string,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  headlineFontSize: PropTypes.number,
  subheadlineFontSize: PropTypes.number,
  backgroundImage: PropTypes.string,
  popColor: PropTypes.string,
  dataFutures: PropTypes.bool,
  teamName: PropTypes.string,
  fontWeight: PropTypes.string,
  malChoice: PropTypes.string,

}

App.defaultProps = {
  type: "footer",
  width: 1200,
  height: 300,
  theme: 'white',
  logoSelection: '',
  headline: '',
  subheadline: '',
  headlineFontSize: 100,
  subheadlineFontSize: 100,
  backgroundImage: '',
  popColor: '',
  dataFutures: false,
  teamName: '',
  fontWeight: "normal",
  malChoice: "fourStack"
}

export default App;
