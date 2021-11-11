import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        forteMain: string,
        lightForteMain: string,
        textBlack: string,
        darkBlue: string,
        milky: string,
        white: string,
        gradientColor1: string,
        gradientColor2: string,
        darkGray: string,
        lightGray: string,
        gray: string,
        milkyGray: string,
        anotherBlue: string
    },
    fontSizes: {
        text0size: string,
        text1Size: string,
        text2Size: string,
        text3Size: string,
        sectionTitle: string,
        cardName: string,
        sectionTitleHuge: string,
        tableFont: string
    },
    fontFamily: {
        main: string
    }
  }
}