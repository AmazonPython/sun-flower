function convertToCastString(casts) {
    let castsjoin = "";

    for (let index in casts) {
        castsjoin = castsjoin + casts[index].name + " / ";
    }

    return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
    let castsArray = [];

    for (let index in casts) {
        let cast = {
            img: casts[index].avatars ? casts[index].avatars.large : "",
            name: casts[index].name
        }

        castsArray.push(cast);
    }

    return castsArray;
}

export {
    convertToCastString, convertToCastInfos
}
