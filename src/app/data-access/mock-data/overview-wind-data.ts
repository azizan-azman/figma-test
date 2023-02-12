import { FeatureData } from 'src/app/data-access/models/feature-data.model';

export const overviewWindData: FeatureData[] = [
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
];
