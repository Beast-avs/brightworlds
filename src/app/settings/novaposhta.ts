// import { Component } from '@angular/core';

// @Component({})
export class NovaPoshta {
    endpoint = 'https://api.novaposhta.ua/v2.0/';
    apiKey = '6f739788bbe4871e789e460f48ea9866';
    format = 'json';

    // constructor() { }

    getURI(): string {
        return this.endpoint + '/' + this.format + '/';
    }

    getAPIKey(): string {
        return this.apiKey;
    }
}
