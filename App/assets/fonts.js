import { useFonts } from 'expo-font';

export const onLoadFont = () => {
    const [loaded] = useFonts({
        'Lato-Black': require('./fonts/Lato-Black.ttf'),
        'Lato-BlackItalic': require('./fonts/Lato-BlackItalic.ttf'),
        'Lato-Bold': require('./fonts/Lato-Bold.ttf'),
        'Lato-BoldItalic': require('./fonts/Lato-BoldItalic.ttf'),
        'Lato-Italic': require('./fonts/Lato-Italic.ttf'),
        'Lato-Light': require('./fonts/Lato-Light.ttf'),
        'Lato-Regular': require('./fonts/Lato-Regular.ttf'),
        'Lato-Thin': require('./fonts/Lato-Thin.ttf'),
        'Lato-ThinItalic': require('./fonts/Lato-ThinItalic.ttf'),
        'Lato-ThinItalic': require('./fonts/Lato-ThinItalic.ttf'),
        'Roboto-Black': require('./fonts/Roboto-Black.ttf'),
        'Roboto-Reguler': require('./fonts/Roboto-Regular.ttf'),
        'Roboto-Light': require('./fonts/Roboto-Light.ttf'),
        'Roboto-Italic': require('./fonts/Roboto-Light.ttf'),
        'Roboto-Bold': require('./fonts/Roboto-Bold.ttf'),
        'Poppins-Black': require('./fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('./fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('./fonts/Poppins-Italic.ttf'),
        'Poppins-Light': require('./fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('./fonts/Poppins-Regular.ttf'),
    });
    return loaded
}