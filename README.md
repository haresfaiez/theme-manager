# Theme management application

## Build
To build, run `npm install`, then `npm run build`.

## Test
To test, run `npm test`.

## Run
Open `index.html`


## Assumpitons
  * Configuration has two levels. The first for configurations categories
    and the second for configurations items.
  * Browser is not IE
  * Given data is always valid
  * The application works only on ltr languages
  * There can be more than one item editor open at the same time
  * When the type is em, rem, px and the value is a "calc" expression, the expression should be valid.
  * Recursive references does not contain a loop
  * When a reference is invalid, we print the raw expression
