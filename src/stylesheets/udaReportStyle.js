import { buttonStyles } from '../index.js';

const buttonStyle = {
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#CA1C24',
    padding: '20px',
    width: '300px',
    borderColor: ' #B7BCC6',
    borderWeight: '3px',
    borderStyle: 'solid',
    borderRadius: '20px',
}

const buttonTextStyle = {
    textDecoration: 'none',
    color: '#FFF',
    fontSize: '30px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    fontWeight: '600',
    fontFamily: 'Gotham-Bold, Sans Serif'
}

const buttonWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const adobeIconStyle = {
    width: '35px',
    height: '35px',
}

const adobeIconContainer ={
    width: '50px',
    height: '50px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
    borderRadius: '5px'
}

export { buttonStyle, buttonTextStyle, buttonWrapper, adobeIconStyle, adobeIconContainer };