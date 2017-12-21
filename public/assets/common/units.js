// const tempOptions = [
//   {
//     text: '°C',
//     value: 'celsius'
//   },
//   {
//     text: '°F',
//     value: 'fahrenheit'
//   },
//   {
//     text: '°K',
//     value: 'kelvin'
//   }
// ];
// const windOptions = [
//   {
//     text: 'kt',
//     value: 'knot'
//   },
//   {
//     text: 'bft',
//     value: 'beaufort'
//   },
//   {
//     text: 'm/s',
//     value: 'mps'
//   },
//   {
//     text: 'mph',
//     value: 'mph'
//   },
//   {
//     text: 'km/h',
//     value: 'kmh'
//   }
// ];
// const rainOptions = [
//   {
//     text: 'mm',
//     value: 'millimeter'
//   },
//   {
//     text: 'in',
//     value: 'inch'
//   }
// ];
// const pressureOptions = [
//   {
//     text: 'hPa',
//     value: 'hPa'
//   },
//   {
//     text: 'inHg',
//     value: 'inHg'
//   },
//   {
//     text: 'mmHg',
//     value: 'mmHg'
//   }
// ];

const units = [
  {
    name: 'temperature',
    scale: [
      {
        name:'°C',
        symbol:'degC',
      }, 
      {
        name:'°K',
        symbol:'K',
      }, 
      {
        name:'°F',
        symbol:'degF',
      }, 
    ]
  },
  {
    name: 'wind',
    scale: [
      {
        name:'bft',
        symbol:'bft',
      }, 
      {
        name:'mph',
        symbol:'mph',
      }, 
      {
        name:'kmh',
        symbol:'kmh',
      },
    ]
  },
  {
    name: 'rain',
    scale: [
      {
        name:'mm',
        symbol:'mm',
      }, 
      {
        name:'in',
        symbol:'in',
      }, 
    ]
  },
  {
    name: 'pressure',
    scale: [
      {
        name:'hPa',
        symbol:'Pa',
      }, 
      {
        name:'inHg',
        symbol:'inHg',
      }, 
      {
        name:'mmHg',
        symbol:'mmHg',
      },
    ],
  }  
];

export {units};
