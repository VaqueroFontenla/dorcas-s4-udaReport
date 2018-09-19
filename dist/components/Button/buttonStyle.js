function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buttonStyle = {
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    width: '300px',
    borderStyle: 'solid'
};

var buttonTextStyle = _defineProperty({
    textDecoration: 'none',
    fontSize: '30px',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    fontWeight: '600'
}, 'fontFamily', 'Gotham-Bold, Sans Serif');

var buttonWrapper = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

var adobeIconStyle = {
    width: '35px',
    height: '35px'
};

var adobeIconContainer = {
    width: '50px',
    height: '50px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '20px',
    borderRadius: '5px'
};

export { buttonStyle, buttonTextStyle, buttonWrapper, adobeIconStyle, adobeIconContainer };