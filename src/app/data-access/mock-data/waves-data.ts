import { FeatureData } from 'src/app/data-access/models/feature-data.model';

export const wavesData: FeatureData[] = [
  {
    colSpan: 'col-span-2',
    rowSpan: 'row-span-2',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Significant wave height', cardHeaderWidth: '' },
      ],
      cardContent: [{ cardContentText: '0.95 m', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Tide', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '0.00 m', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Mean wave period', cardHeaderWidth: '' },
      ],
      cardContent: [{ cardContentText: '5.40 s', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [{ cardHeaderTitle: 'Air Gap', cardHeaderWidth: '' }],
      cardContent: [{ cardContentText: '21.43 m', cardContentWidth: '' }],
    },
  },
  {
    colSpan: 'col-span-2',
    rowSpan: '',
    data: {
      cardHeader: [
        { cardHeaderTitle: 'Max. wave height', cardHeaderWidth: '' },
      ],
      cardContent: [{ cardContentText: '1.56 m', cardContentWidth: '' }],
    },
  },
];
