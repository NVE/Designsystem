<PageHeader title="Oversikt over komponenter" imagePath="developer" pageLevel=1></PageHeader>

<!-- Lista over komponenter er sortert alfabetisk på navn -->

<ComponentOverview :componentStatuses="
[
  {
    name: 'nve-alert',     
    nodeId: '4229-7',      
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'   
  },
  {
    name: 'nve-attachment',
    nodeId: '4295-142731', 
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: undefined
  },
  {
    name: 'nve-avatar',
    nodeId: '111-27',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-badge',
    nodeId: '1187-139727',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-breadcrumb',
    nodeId: '839-135756',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-button',
    nodeId: '111-30',
    description: undefined,
    statusDesign: 'Skal revideres',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-card',
    nodeId: '376-26356',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-carousel-image',
    nodeId: '480-49356',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-chart',
    nodeId: '3087-105935',
    description: undefined,
    statusDesign: 'Ikke påbegynt',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-checkbox',
    nodeId: '4229-100252',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-chips-filter',
    nodeId: '839-137560',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-chips-tag',
    nodeId: undefined,
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-comment',
    nodeId: '3077-45608',
    description: undefined,
    statusDesign: 'Under arbeid',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-details-accordion-v2',
    nodeId: '2341-77166',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-dialog',
    nodeId: undefined,
    description: undefined,
    statusDesign: undefined,
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-dropdown',
    nodeId: '3077-54191',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Under arbeid'
  },
  {
    name: 'nve-files',
    nodeId: '647-192139',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-icon',
    nodeId: undefined,
    description: undefined,
    statusDesign: undefined,
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-input',
    nodeId: '111-33',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Trenger kvalitetssjekk'
  },
  {
    name: 'nve-label',
    nodeId: '5288-119197',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-links',
    nodeId: '3684-156320',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: undefined
  },
  {
    name: 'nve-logos',
    nodeId: undefined,
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-maps',
    nodeId: undefined,
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-pagination',
    nodeId: '951-139793',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-popup',
    nodeId: undefined,
    description: undefined,
    statusDesign: undefined,
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-progress-bar',
    nodeId: '3087-96526',
    description: undefined,
    statusDesign: 'Under arbeid',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-radio',
    nodeId: '4229-83173',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-radio-button',
    nodeId: undefined,
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-radio-group',
    nodeId: undefined,
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-range-slider',
    nodeId: '3087-105692',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-search',
    nodeId: '951-140533',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-select',
    nodeId: '4229-82274',
    description: 'Dropdown-list / rullgardin',
    statusDesign: 'Ferdig',
    statusCode: 'Trenger kvalitetssjekk'
  },
  {
    name: 'nve-skeleton-loader',
    nodeId: '4229-83175',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: undefined
  },
  {
    name: 'nve-slot-component',
    nodeId: '2683-87571',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-spinner',
    nodeId: undefined,
    description: undefined,
    statusDesign: undefined,
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-stepper',
    nodeId: '1784-78028',
    description: undefined,
    statusDesign: 'Trenger kvalitetssjekk',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-switch-toggle',
    nodeId: '4229-83176',
    description: undefined,
    statusDesign: 'Under arbeid',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-table',
    nodeId: '111-35',
    description: undefined,
    statusDesign: 'Revideres',
    statusCode: undefined
  },
  {
    name: 'nve-tabs',
    nodeId: undefined,
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-textarea',
    nodeId: '4229-98016',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-tooltip',
    nodeId: '1239-131317',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Under arbeid'
  },
  {
    name: 'nve-tree',
    nodeId: '3769-59546',
    description: undefined,
    statusDesign: 'Under arbeid',
    statusCode: 'Ikke påbegynt'
  }
]" />
