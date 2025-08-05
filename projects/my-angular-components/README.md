# MyAngularComponents

## Create a new component

```bash
ng generate c components/sidebar --project=my-angular-components
```

## Export components

Open projects/library-name/src/public-api.ts and export the components:

```ts
export * from './lib/nombre-componente/nombre-componente.component';
export * from './lib/nombre-libreria.module';
```

## Publih the library (npm)

1. Update the library package version number

```json
"version": "0.0.1",
```

2. Compile the library 

```bash 
ng build my-angular-components
```

3. Move to `dist/my-angular-components` and publish:

```bash
npm publish
```