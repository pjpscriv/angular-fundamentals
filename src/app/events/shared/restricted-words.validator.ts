import {FormControl} from '@angular/forms';

export function restrictedWords(words: Array<string>): (c: FormControl) => {[key: string]: any} {
  return (control: FormControl) => {
    if (!words) {
      return null;
    }

    const invalidWords = words.map(w => control.value.includes(w) ? w : null).filter(w => w != null);

    return invalidWords && invalidWords.length > 0 ? {restrictedWords: invalidWords} : null;
  };
}
