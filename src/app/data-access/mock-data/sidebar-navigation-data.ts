import { SidebarNavigation } from '../models/sidebar-navigation.model';

export const sidebarNavigationData: SidebarNavigation[] = [
  {
    available: true,
    navLinkIcon: 'pie-chart',
    navLinkText: 'Overview',
    navLinkURL: '/overview',
  },
  {
    available: true,
    navLinkIcon: 'wind',
    navLinkText: 'Wind',
    navLinkURL: '/wind',
  },
  {
    available: true,
    navLinkIcon: 'waves',
    navLinkText: 'Waves',
    navLinkURL: '/waves',
  },
  {
    available: true,
    navLinkIcon: 'cloud',
    navLinkText: 'Weather',
    navLinkURL: '/weather',
  },
  {
    available: false,
    navLinkIcon: 'cctv',
    navLinkText: 'CCTV (Coming later)',
    navLinkURL: '',
  },
  {
    available: false,
    navLinkIcon: 'lightning',
    navLinkText: 'Lightning (Coming later)',
    navLinkURL: '',
  },
];
