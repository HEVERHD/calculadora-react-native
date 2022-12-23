import { View, Text } from 'react-native';
import React, { useRef, useState } from 'react';
import { styles } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import useCalculadora from '../hooks/useCalculadora';

export default function CalcuradoraScreen() {
    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        eliminarUltimoNumero,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {numeroAnterior !== '0' && (
                <Text style={styles.resultadoPequeno}> {numeroAnterior}</Text>
            )}

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>
                {numero}
            </Text>

            {/* Fila de botones 1 */}

            <View style={styles.row}>
                <BotonCalc texto="c" color="#9B9B9B" accion={limpiar} />
                <BotonCalc
                    texto="+/-"
                    color="#9B9B9B"
                    accion={positivoNegativo}
                />
                <BotonCalc
                    texto="del"
                    color="#9B9B9B"
                    accion={eliminarUltimoNumero}
                />
                <BotonCalc texto="/" color="#FF9427" accion={btnDividir} />
            </View>

            {/* Fila de botones 2 */}

            <View style={styles.row}>
                <BotonCalc texto="7" accion={armarNumero} />
                <BotonCalc texto="8" accion={armarNumero} />
                <BotonCalc texto="9" accion={armarNumero} />
                <BotonCalc texto="x" color="#FF9427" accion={btnMultiplicar} />
            </View>

            {/* Fila de botones 3 */}

            <View style={styles.row}>
                <BotonCalc texto="4" accion={armarNumero} />
                <BotonCalc texto="5" accion={armarNumero} />
                <BotonCalc texto="6" accion={armarNumero} />
                <BotonCalc texto="-" color="#FF9427" accion={btnRestar} />
            </View>

            {/* Fila de botones 4 */}

            <View style={styles.row}>
                <BotonCalc texto="1" accion={armarNumero} />
                <BotonCalc texto="2" accion={armarNumero} />
                <BotonCalc texto="3" accion={armarNumero} />
                <BotonCalc texto="+" color="#FF9427" accion={btnSumar} />
            </View>

            {/* Fila de botones 5 */}

            <View style={styles.row}>
                <BotonCalc texto="0" ancho accion={armarNumero} />
                <BotonCalc texto="." accion={armarNumero} />
                <BotonCalc texto="=" color="#FF9427" accion={calcular} />
            </View>
        </View>
    );
}
