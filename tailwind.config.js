module.exports = {
  theme: {
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      1000: 1000,
      auto: 'auto'
    },
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%'
      },
      textColor: {
        skin: {
          'cerebro-purple': '#5965DB',
          'cerebro-grey': '#F6F8FA',
          'cerebro-blue': '#F5F6F9',
          'cerebro-black': '#282D30',
          'cerebro-dark': '#1E2933',
          'cerebro-about-blue': '#FCFDFF',
          'cerebro-main-grey': '#FCFDFF',
          'cerebro-about-orange': '#FF865B',
          'cerebro-about-green': '#7CCA84',
          'cerebro-about-purple': '#8937DC'
        }
      }
    },
    variants: {},
    plugins: [
    // require('@tailwindcss/forms')
    ]
  }
}
