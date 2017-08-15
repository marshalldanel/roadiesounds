import {setState, getState} from './appState';

// WHENEVER YOU WANT TO CHANGE THE STATE YOU MUST DEFINE AN ACTION THAT DOES SO
//KEEP YOUR VIEWS DUMB
//Actions up, data down

export function setView(view) { 
  setState({view});
}

export function addLocationField() { 
  const currentLocations = getState().locations;
  const newLocations = currentLocations.concat([{city:"",date:""}]);
  setState({locations: newLocations});
}

export function updateLocationField(index, city, date) {
  const currentLocations = getState().locations;

  setState({
    locations: [
      ...currentLocations.slice(0, index),
      { city, date },
      ...currentLocations.slice(index + 1)
    ]
  });
}

// export function storeLocationsAsync() {
//   Api.post('/locations', { locations: getState().locations }).then(() => {
//     setView('genres');
//   });
// }