import { FeatureData } from 'src/app/data-access/models/feature-data.model';

export const windData: FeatureData[] = [
  {
    colSpan: 'col-span-1',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Direction (10 min. avg.)', cardHeaderWidth: '' },
      ],
      cardContent: [{ cardContentText: '320°', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-1',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Speed (10 min. avg.)', cardHeaderWidth: '' },
      ],
      cardContent: [{ cardContentText: '12 kts', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-1',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Gust', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '- - -', cardContentWidth: '' }],
    },
  },
  // {
  //   colSpan: 'col-span-1',
  //   rowSpan: '',
  //   data: {
  //     cardHeader: [
  //       { cardHeaderTitle: 'Mean wave period', cardHeaderWidth: '' },
  //     ],
  //     cardContent: [{ cardContentText: '5.40 s', cardContentWidth: '' }],
  //   },
  // },
  // {
  //   colSpan: 'col-span-1',
  //   rowSpan: '',
  //   data: {
  //     cardHeader: [{ cardHeaderTitle: 'Air Gap', cardHeaderWidth: '' }],
  //     cardContent: [{ cardContentText: '21.43 m', cardContentWidth: '' }],
  //   },
  // },
];
