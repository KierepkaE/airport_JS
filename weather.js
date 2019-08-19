class Weather {

    isStormy = function() {
        const options = [true, false, false, false]
        return options[Math.floor(Math.random() * options.length)]
    }

}