class Settings {
    init(params) {
        let defaultParams = {
            rowsCount: 21,
            colsCount: 21,
            speed: 2,
            winlength: 50,
        };
        Object.assign(defaultParams, params);
        if (defaultParams.rowsCount < 10 || defaultParams.rowsCount > 30) {
            throw new Error ('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30]');
        }
        this.rowsCount = defaultParams.rowsCount;

        if (defaultParams.colsCount < 10 || defaultParams.colsCount > 30) {
            throw new Error ('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30]');
        }
        this.colsCount = defaultParams.colsCount;

        if (defaultParams.speed < 1 || defaultParams.speed > 10) {
            throw new error('Неверные настройки, значение speed должно быть в диапазоне [1, 10]');
        }
        this.speed = defaultParams.speed;

        if (defaultParams.winlength < 5 || defaultParams.winlength > 50) {
            throw new error('Неверные настройки, значение winlength должно быть в диапазоне [5, 50]');
        }
        this.winlength = defaultParams.winlength;
    }
}