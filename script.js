// Assignment: Game of Thrones
// Objectives:
// Familiarity with APIs, asynchronous code, and callbacks.
// Familiarity with DOM manipulation.
$(document).ready(function () {
    const imgFolder = 'images/';  // using an images subdirectory, defining that path here
    const imageSources = [
        "HouseArryn.png",
        "HouseBaratheon.png",
        "HouseLannister.png",
        "HouseStark.png",
        "HouseTargaryen.png",
        "HouseTully.png",
        "HouseTyrell.png",
    ];
    // defining full image path in the following array object.
    const imagePath = [
        imgFolder + imageSources[0],
        imgFolder + imageSources[1],
        imgFolder + imageSources[2],
        imgFolder + imageSources[3],
        imgFolder + imageSources[4],
        imgFolder + imageSources[5],
        imgFolder + imageSources[6],
    ];
    
    const houseIds = ['7','17','229','362','378','395','398'];

    setImagesFunc();

    $('.house-img').click(function(){
        const id = houseIds[$(this).attr('imageId')];
        const url = "https://anapioficeandfire.com/api/houses/" + id;
        $.get(url, function(data){
            $('#info-name').text(`Name: ${data.name}`);
            $('#info-words').text(`Words: ${data.words}`);
            $('#info-titles').html(`Titles: ${data.titles}`);
            $('#info-founded').html(`Founded: ${data.founded}`);
            $('#info-ancestral-weapons').html(`Ancestral Weapons: ${data.ancestralWeapons}`);
        });
    });

    $('.scroll-button').click(function(){
        if($(this).attr('dir') == "0"){
            leftButtonElement();
        } else {
            rightButtonElement();
        }

    });

    function setImagesFunc(){
        $('#display-banner-area .house-img').each(function(){
            // console.log(`Here is the value of this: ${this}`);
            // console.log(`Here is the value of this.attr('imageId'): ${$(this).attr('imageId')}`);
            $(this).attr('src', imagePath[$(this).attr('imageId')]);
        });
    }

    function checkRange(temp){
        if(temp >= imageSources.length){
            temp = 0;
            console.log(`imageSources.length: ${imageSources.length}`);
            console.log(`value of temp: ${temp}`);
        }
        else if(temp < 0){
            temp = imageSources.length - 1;
            console.log(`imageSources.length - 1: ${imageSources.length - 1}`);
            console.log(`value of temp: ${temp}`);
        }
        return temp;
    }

    function leftButtonElement() {
        // loop through each image element in DOM
        $('#display-banner-area .house-img').each( function(){
            let b = $(this).attr('imageId');// assign the value of this to var b
            b++  // now increment b var => b var here denotes banner
            console.log(`'imageId', checkRange(b): ${$(this).attr('imageId', checkRange(b))}`);
            $(this).attr('imageId', checkRange(b));
        });
        setImagesFunc();
    }
    
    function rightButtonElement() {
        // loop through each image element in DOM
        $('#display-banner-area .house-img').each( function(){
            let b = $(this).attr('imageId');  // assign the value of this to var b 
            b++  // now increment b var => b var here denotes banner
            console.log(`'imageId', checkRange(b): ${$(this).attr('imageId', checkRange(b))}`);
            $(this).attr('imageId', checkRange(b));
        });
        setImagesFunc();
    }

});