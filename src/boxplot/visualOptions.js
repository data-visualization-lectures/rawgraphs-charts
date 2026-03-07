export const visualOptions = {
  marginTop: {
    type: 'number',
    label: 'Margin (top)',
    default: 10,
    group: 'artboard',
  },

  marginRight: {
    type: 'number',
    label: 'Margin (right)',
    default: 10,
    group: 'artboard',
  },

  marginBottom: {
    type: 'number',
    label: 'Margin (bottom)',
    default: 30,
    group: 'artboard',
  },

  marginLeft: {
    type: 'number',
    label: 'Margin (left)',
    default: 50,
    group: 'artboard',
  },

  barsWidth: {
    type: 'number',
    label: 'Bars width',
    default: 20,
    group: 'chart',
  },

  iqrMultiplier: {
    type: 'number',
    label: 'Interquartile range multiplier',
    default: 1.5,
    group: 'chart',
  },

  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 2,
    group: 'chart',
  },

  yOrigin: {
    type: 'boolean',
    label: 'Set Y origin to 0',
    default: false,
    group: 'chart',
  },

  xAxisLabelRotation: {
    type: 'text',
    label: 'X axis label rotation',
    default: '0',
    group: 'chart',
    options: [
      { label: '0°', value: '0' },
      { label: '15°', value: '15' },
      { label: '30°', value: '30' },
      { label: '45°', value: '45' },
      { label: '60°', value: '60' },
    ],
  },

  showLegend: {
    type: 'boolean',
    label: 'Show legend',
    default: false,
    group: 'artboard',
  },

  legendWidth: {
    type: 'number',
    label: 'Legend width',
    default: 200,
    group: 'artboard',
    disabled: {
      showLegend: false,
    },
    container: 'width',
    containerCondition: {
      showLegend: true,
    },
  },

  colorScale: {
    type: 'colorScale',
    label: 'Color scale',
    dimension: 'color',
    default: {
      scaleType: 'ordinal',
      interpolator: 'schemeCategory10',
    },
    group: 'colors',
  },

  showValues: {
    type: 'boolean',
    label: 'Show boxpot values',
    default: true,
    group: 'labels',
  },
}
