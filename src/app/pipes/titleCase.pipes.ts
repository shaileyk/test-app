import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
    transform(value: string) {
        if (!value) {
            return null;
        }

        let prepositionArr = ['above', 'across', 'after', 'against', 'along', 'among', 'around', 'at', 'away from', 'of', 'the', 'off', 'beside', 'beneath', 'by', 'down'];
        let words = value.split(' ');
        console.log("words:::::::: ", words);

        let finalWord = [];

        let isPreposition = false;

        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < prepositionArr.length; j++) {
                if (words[i] === prepositionArr[j]) {
                    isPreposition = true;
                }
            }
            if (isPreposition) {
                if (i === 0) {
                    finalWord.push(words[i].charAt(0).toUpperCase() + words[i].substr(1, words[i].length).toLowerCase())
                    isPreposition = false;
                }
                else {
                    finalWord.push(words[i].toLowerCase());
                    isPreposition = false;
                }
            } else {
                finalWord.push(words[i].charAt(0).toUpperCase() + words[i].substr(1, words[i].length).toLowerCase())
            }

        }

        //console.log("Final Word" + finalWord.join(' '));

        return finalWord.join(' ');

    }
}