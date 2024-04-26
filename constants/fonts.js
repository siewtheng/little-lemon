import * as Font from 'expo-font';

// Define the font files
const fontAssets = {
    'Karla-Bold': require('../../assets/fonts/AvKarla-Bold.ttf'),
    'Karla-BoldItalic': require('../../assets/fonts/A.Karla-Bolditalic.ttf'),
    'Karla-ExtraBold': require('../../assets/fonts/AvKarla-ExtraBold.ttf'),
    'Karla-ExtraBoldItalic': require('../../assets/fonts/AvKarla-ExtraBolditalic.ttf'),
    'Karla-ExtraLight': require('../../assets/fonts/AKarla-ExtraLight.ttf'),
    'Karla-ExtraLightItalic': require('../../assets/fonts/AvKarla-ExtraLightitalic.ttf'),
    'Karla-Italic': require('../../assets/fonts/Karla-Italic.ttf'),
    'Karla-Light': require('../../assets/fonts/AvKarla-Light.ttf'),
    'Karla-LightItalic': require('../../assets/fonts/AvKarla-Lightitalic.ttf'),
    'Karla-Medium': require('../../assets/fonts/A.Karla-Medium.ttf'),
    'Karla-MediumItalic': require('../../assets/fonts/A.Karla-MediumItalic.ttf'),
    'Karla-Regular': require('../../assets/fonts/AvKarla-Regular.ttf'),
    'Karla-SemiBold': require('../../assets/fonts/AsKarla-SemiBold.ttf'),
    'Karla-SemiBoldItalic': require('../../assets/fonts/AsKarla-SemiBolditalic.ttf'),
    'MarkaziText-Bold': require('../../assets/fonts/AsMarkaziText-Bold.ttf'),
    'MarkaziText-Medium': require('../../assets/fonts/AsMarkaziText-Medium.ttf'),
    'MarkaziText-Regular': require('../../assets/fonts/AvMarkaziText-Regular.ttf'),
    'MarkaziText-SemiBold': require('../../assets/fonts/A.MarkaziText-SemiBold.ttf'),
};

// Load fonts
export async function loadFonts() {
    await Font.loadAsync(fontAssets);
}

// Export font styles
export const fonts = {
    karla: {
        bold: 'Karla-Bold',
        boldItalic: 'Karla-BoldItalic',
        extraBold: 'Karla-ExtraBold',
        extraBoldItalic: 'Karla-ExtraBoldItalic',
        extraLight: 'Karla-ExtraLight',
        extraLightItalic: 'Karla-ExtraLightItalic',
        italic: 'Karla-Italic',
        light: 'Karla-Light',
        lightItalic: 'Karla-LightItalic',
        medium: 'Karla-Medium',
        mediumItalic: 'Karla-MediumItalic',
        regular: 'Karla-Regular',
        semiBold: 'Karla-SemiBold',
        semiBoldItalic: 'Karla-SemiBoldItalic',
    },
    markaziText: {
        bold: 'MarkaziText-Bold',
        medium: 'MarkaziText-Medium',
        regular: 'MarkaziText-Regular',
        semiBold: 'MarkaziText-SemiBold',
    }
};