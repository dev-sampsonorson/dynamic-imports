/**
 * This is a bunch of similar files that we only need
 * one of.
 * 
 * We are downloading all of them even when, we 
 * are only going to use one of them.
 */
/* import englishTranslations from './en-translations.js';
import spanishTranslations from './sp-translations.js';
import frenchTranslations from './fr-translations.js'; */

const user = { locale: "en" };
// let translations;

/* switch(user.locale) {
    case "sp":
        translations = spanishTranslations;
        break;
    case "fr":
        translations = frenchTranslations;
        break;
    default:
        translations = englishTranslations;
}

console.log(translations.HI); */

import(`./${user.locale}-translations.js`).then(({ default: translations }) => {
    console.log(translations.HI);
})