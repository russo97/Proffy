import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#333',
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5'
    },

    buttonSecondary: {
        backgroundColor: '#04d361'
    },

    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Archivo_700Bold'
    },

    totalConnections: {
        fontSize: 12,
        maxWidth: 200,
        marginTop: 40,
        lineHeight: 20,
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular'
    }
});

export default styles;