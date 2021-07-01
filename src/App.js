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

function App({ theme, logoSelection, headline, subheadline, backgroundImage, width, height, headlineFontSize, subheadlineFontSize }) {
  let appStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `#1DA1F2`,
    color: `{theme}`
  };
  let logoStyle = {};

  const headingStyle = {fontSize: `${headlineFontSize}%`}
  const subheadlineStyle = {fontSize: `${subheadlineFontSize}%`}
  
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

  let conditionalText = (el, text) => {
    if(text !== ""){
      return el;
    }
  }

  return (
    <div className="App" style={ appStyle }>
      <img className="logo" src={logo} style={logoStyle}/>
      <div className="heading">
        {conditionalText(<h1><span style={headingStyle}>{headline}</span></h1>, headline)}
        {conditionalText(<h2><span style={subheadlineStyle}>{subheadline}</span></h2>, subheadline)}
      </div>
    </div>
  );
}

App.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  theme: PropTypes.string,
  logo: PropTypes.string,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
  headlineFontSize: PropTypes.number,
  subheadlineFontSize: PropTypes.number,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  width: 1200,
  height: 600,
  theme: 'white',
  logoSelection: 'default',
  headline: 'ALUMNI NEWS',
  subheadline: "",
  headlineFontSize: 100,
  subheadlineFontSize: 100,
  backgroundImage: '',
}

export default App;
