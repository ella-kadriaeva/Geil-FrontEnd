export const getDiscountPercent = (price, discountPrice) => {
    if (!price || price <= 0 || discountPrice === null) {
        return 0;
    }

    if (discountPrice > price) {
        return 0;
    }

    return Number(100 - (discountPrice / price) * 100).toFixed(2);  
};
