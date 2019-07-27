export class GDocs {
    // TODO: 1. Clean code
    // TODO: 2. Provide refrech tocken capability
    // TODO: 3. implement all functionality around GAPI Auth here

    endpoint = 'https://docs.google.com/spreadsheets/d/';

    sheetid = '1dRNb20ULrzI5wuR-wa2gSaT570mfRv3enZ1lGSOBZ7E';
    // tslint:disable-next-line:max-line-length
    publishedCSV = 'e/2PACX-1vTQzgNGtfh9vzq2S26lg6IMGlHO4JnlynmCq1LJy_S-8SS41pUUoAqnOKYfWGuOw3-a9DofMyXFizVR/pub?output=csv';

    // tslint:disable-next-line:max-line-length
    tockenMyReadonly = '4/jwHuK0g0s7gUQf3h0r8nDznvvSpfOze_1-uw3whRmmoZzcBElAZqC7mVsK0EiKbLHkNP7Y2XOPxDCzb2h-ZK55A';

    clientId = '933109428849-jvv5i57f4it53sjd3cbbqgujr0qkrvt9.apps.googleusercontent.com';
    clientSecret = 'oFXrTazFV7N03g7CbRg2lpuC';
    apiKey = 'AIzaSyBtUw4aH3h7aOPS4ppknY8mc6vu9ZV_4VE';

    format = '';



    // constructor() { }

    getURI(): string {
        return this.endpoint + '/' + this.sheetid + '/';
    }

    getCSVByURI(): string {
        return this.endpoint + '/' + this.publishedCSV + '/';
    }

    getAPIKey(): string {
        return this.apiKey;
    }

    getTocken(): string {
        return this.tockenMyReadonly;
    }
}
