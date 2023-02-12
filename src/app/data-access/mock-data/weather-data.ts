import { FeatureData } from 'src/app/data-access/models/feature-data.model';

export const weatherData: FeatureData[] = [
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Sea Temperature', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '6.1° C', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Air Pressure (QNH)', cardHeaderWidth: '' },
      ],
      cardContent: [{ cardContentText: '1023.6 hPa', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Air Pressure (QFE)', cardHeaderWidth: '' },
      ],
      cardContent: [{ cardContentText: '1018.1 hPa', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Humidity', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '90 %', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Air Temperature', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '6.9° C', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Dew Point', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '5.3° C', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Visibility', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '1800 m', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-4',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Present Weather', cardHeaderWidth: '' }],
      cardContent: [
        { cardContentText: 'Haze', cardContentWidth: 'w-1/2' },
        { cardContentText: 'No Precipitation', cardContentWidth: '' },
      ],
    },
  },
  {
    colSpan: 'col-span-3',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Clouds layer 1', cardHeaderWidth: '' },
        { cardHeaderTitle: 'Height layer 1', cardHeaderWidth: '' },
      ],
      cardContent: [
        { cardContentText: 'OVC', cardContentWidth: '' },
        { cardContentText: '188 ft', cardContentWidth: '' },
      ],
    },
  },
  {
    colSpan: 'col-span-3',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Clouds layer 2', cardHeaderWidth: '' },
        { cardHeaderTitle: 'Height layer 2', cardHeaderWidth: '' },
      ],
      cardContent: [
        { cardContentText: '- - -', cardContentWidth: '' },
        { cardContentText: '- - -', cardContentWidth: '' },
      ],
    },
  },
];
