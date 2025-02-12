<PageHeader title="Oversikt over komponenter" imagePath="developer" pageLevel=1></PageHeader>

<!--
Lista over komponenter er sortert alfabetisk på navn.
nodeId er ID til komponent-sida i Figma. Den ligger som en parameter i URL'en til aktuell side når du ser på komponenten i Figma.
-->

<ComponentOverview :componentStatuses="[
  {
   name: 'nve-accordion',
    nodeId: '2341-77166',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Under arbeid'
  },
  {
   name: 'nve-accordion-item',
    nodeId: '2341-77166',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Under arbeid'
  },
  {
    name: 'nve-alert',
    nodeId: '4229-7',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-attachments',
    nodeId: '647-192139',
    description: 'Viser liste over opplastede vedlegg',
    statusDesign: 'Skal revideres',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-attachment-upload',
    nodeId: '4295-142731',
    description: 'For å laste opp vedlegg',
    statusDesign: 'Skal revideres',
    statusCode: 'Ikke påbegynt'
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
    statusDesign: 'Under arbeid',
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
    name: 'nve-darkmode-switch',
    nodeId: '4229-83176',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-image-carousel',
    nodeId: '480-49356',
    description: 'Bildekarusell',
    statusDesign: 'Skal revideres',
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
    name: 'nve-checkbox-group',
    nodeId: '4229-100252',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-calendar',
    nodeId: '5831-20450',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-combobox',
    nodeId: '4277-125162',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Under arbeid'
  },
  {
    name: 'nve-comment',
    nodeId: '3077-45608',
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
    statusCode: 'Ferdig'
  },
    {
    name: 'nve-drawer',
    nodeId: undefined,
    description: undefined,
    statusDesign: 'Skal revideres',
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
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-label',
    nodeId: '5288-119197',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-link-card',
    nodeId: '3684-156320',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-map',
    nodeId: '2341-75038',
    description: undefined,
    statusDesign: 'Ikke påbegynt',
    statusCode: 'Vil ikke bli bygget'
  },
  {
   name: 'nve-menu',
    nodeId: '3077-54191',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
   name: 'nve-message-card',
    nodeId: '8239-2704',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-navbar',
    nodeId: '203-17',
    description: undefined,
    statusDesign: 'Ikke påbegynt',
    statusCode: 'Vil ikke bli bygget'
  },
  {
    name: 'nve-pagination',
    nodeId: '951-139793',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Vil ikke bli bygget'
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
    statusDesign: 'Ikke påbegynt',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-progress-ring',
    nodeId: '8238-83643',
    description: undefined,
    statusDesign: 'Ikke påbegynt',
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
    nodeId: '4229-83173',
    description: undefined,
    statusDesign: 'Ikke påbegynt',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-radio-group',
    nodeId: '4229-83173',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-range-slider',
    nodeId: '3087-105692',
    description: undefined,
    statusDesign: 'Under arbeid',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-search',
    nodeId: '951-140533',
    description: undefined,
    statusDesign: 'Skal revideres',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-select',
    nodeId: '4229-82274',
    description: 'Dropdown-list / rullgardin',
    statusDesign: 'Ferdig',
    statusCode: 'Trenger kvalitetssjekk'
  },
  {
    name: 'nve-skeleton',
    nodeId: '4229-83175',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
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
    statusDesign: 'Ferdig',
    statusCode: 'Under arbeid'
  },
  {
    name: 'nve-switch',
    nodeId: '4229-83176',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-table',
    nodeId: '111-35',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-tabs',
    nodeId: '383-21541',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-tag',
    nodeId: '839-137560',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-textarea',
    nodeId: '4229-98016',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-textarea-with-formatting',
    nodeId: '8238-83510',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ikke påbegynt'
  },
  {
    name: 'nve-tooltip',
    nodeId: '1239-131317',
    description: undefined,
    statusDesign: 'Ferdig',
    statusCode: 'Ferdig'
  },
  {
    name: 'nve-tree',
    nodeId: '3769-59546',
    description: undefined,
    statusDesign: 'Under arbeid',
    statusCode: 'Ikke påbegynt'
  }
]" />
