export const GANO1 = 'GANO1';
export const GANO2 = 'GANO2';
export const DISMINUYE_VIDA_1 = 'DISMINUYE_VIDA_1';
export const DISMINUYE_VIDA_2 = 'DISMINUYE_VIDA_2';
export const REINICIAR_JUEGO = 'REINICIAR_JUEGO';

export const gano1 = () => {
    return {
        type: GANO1
    }
}

export const gano2 = () => {
    return {
        type: GANO2
    }
}

export const disminuyeVida1 = (val) => {
    return {
        type: DISMINUYE_VIDA_1,
        val
    }
}

export const disminuyeVida2 = (val) => {
    return {
        type: DISMINUYE_VIDA_2,
        val
    }
}

export const reiniciarJuego = () => {
    return {
        type: REINICIAR_JUEGO
    }
}