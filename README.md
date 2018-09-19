# Uda Report Box

Report react component of Urban Data Analytics.

Simple button that launches a request to the reporting API (https://reds.urbandataanalytics.com/assets/api), opening a blank page and temporarily rendering a loader and a message to the user, until the report is available for viewing is that same page.

Generates a PDF file uDA reporting.

# Props

The props you can configurate are the following ones:

**- button styles:**
If they are not defined they have default values.

| Prop | type | description |
| ------ | ------ | ------ |
| background-color | text |  | 
| Button text | text |  |
| Button text color | text |  |
| Color and width of the button border | text |  |
| radius of curvature of the corners | text |  |

**- Data:**

| Prop | type | description |
| ------ | ------ | ------ |
| adress | text | to do |
| coordinates (lat/lon) | object (required) | object with the coordinates |
| operation | number | it can be a 1 (for sale) or a 0 (for rent) |
| area | number | to do |
| property_type | number | to do |
| construction_type | number | to do |
| rooms | number | to do |
| energy_cert | number | to do |
| storage | number | to do |
| garage | number | to do |
| pool | number | to do |
| ac | number | to do |
| elevator | number | to do |
| outside | number | to do |
| agency | number | to do |
| bathrooms | number | to do |
| common_zones | number | to do |
| orientation_north | number | to do |
| orientation_south | number | to do |
| orientation_east | number | to do |
| orientation_west | number | to do |
| status | number | to do |

# Dependences
- Axios for API calls (http://pre.urbandataanalytics.com/reds/api)
- https://www.npmjs.com/package/react-leaflet-control


# Interesting Data

- When you click in the button it will take you to a loading page until the report will be generated

### Tech

Uda Data Box uses a number of open source projects to work properly:
* [ReactJS] 
* [ReactDOM] 

# Authors
- **Esther Pato** - https://github.com/estherpato 
- **Valeria Roldán** - https://github.com/valromo
- **Loreto Vaquero** - https://github.com/VaqueroFontenla
- **Laura Vargas** - https://github.com/lauraVzarco

