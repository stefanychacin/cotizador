//obtiene la diferencia de anos
export function getYearsDifference(year) {
    return new Date().getFullYear() - year;
}

//calcula la diferencia de marcas
export function getBrandDifference(brand) {
    let increase;
    
    switch(brand){
        case 'european':
            increase = 1.30;
            break;
        case 'american':
            increase = 1.15;
            break;
        case 'asian':
            increase = 1;
            break;
        default:
            break;
    }

    return increase;
}

//Calcula tipo de seguro

export function getPlanDifference( plan ) {
    return ( plan === 'basic' ) ? 1.20 : 1.50; 
}

//Primera letra en mayuscula
export function firstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}