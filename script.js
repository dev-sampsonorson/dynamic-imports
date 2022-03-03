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

import(`./${user.locale}-translations.js`)
.catch(() => {
    return import('./en-translations.js');
})
.then(({ default: translations }) => {
    console.log(translations.HI);
})