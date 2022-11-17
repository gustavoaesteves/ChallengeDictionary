/* eslint-disable @typescript-eslint/no-explicit-any */
export class listWord {
  id: number;
  word: string;
}

export class WordResume {
  license: license;
  meanings: meanings[];
  phonetics: any;
  sourceUrls: string[];
  word: string;
}

// license
export class license {
  name: string;
  url: string;
}

// meanings
export class meanings {
  antonyms: string[];
  definitions: meaningsDefinitions[];
  partOfSpeech: string;
  synonyms: string[];
}
export class meaningsDefinitions {
  antonyms: string[];
  definition: string;
  synonyms: string[];
  example: string;
}

// phonetics
export class phonetics {
  audio: string;
  license: phoneticsLicense;
  sourceUrl: string;
  text: string;
}
export class phoneticsLicense {
  name: string;
  url: string;
}
