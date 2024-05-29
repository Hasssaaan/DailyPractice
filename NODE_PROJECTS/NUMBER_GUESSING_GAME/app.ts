import {Number_Guess} from "./function.js";
import showBanner from "node-banner";

(async () => {
    await showBanner('Number Guessing Game', 'Guess the number between 0 - 10');
    await Number_Guess();
})();