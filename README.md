# Sorter App

Based on the demo from _The Complete Junior to Senior Developer Course_ on Udemy

- React
- Redux
- added propTypes
- react-bootstrap
- deployed to gh-pages

## Issues during deployment:

_BrowserslistError: Unknown browser query `android all`_
[track](https://github.com/facebook/create-react-app/issues/7239)

## lighthouse report

## Performance

_98_

- [x] Images come from api, should optimize
      _already come at 200x200_
- [x] Ensure text remains visible during webfont load
- in css file add `font-display: swap;`

### Accessibilty:

_96_

- [x] fix color : contrast on .f1
      _darkened green_

### Best Practices

_100_

### SEO

_91_

- [x] Document does not have a meta description
      [meta Description](https://developers.google.com/web/tools/lighthouse/audits/description?utm_source=lighthouse&utm_medium=extension)
      _`<meta name="Description" content="Aaron Moskowitz's Robot Sorter" />`_

### PWA

- [ ] Failures: Manifest's `display` value is not one of: minimal-ui | fullscreen | standalone, Manifest does not have `short_name`.
      [short_name](https://developers.google.com/web/tools/lighthouse/audits/manifest-contains-short_name)

- [ ] Failures: Manifest does not have a PNG icon of at least 512px, Manifest does not have `background_color`, Manifest does not have `theme_color`.
      [Splash Screen](https://developers.google.com/web/tools/lighthouse/audits/custom-splash-screen?utm_source=lighthouse&utm_medium=extension)

- [ ] Failures: Manifest does not have `theme_color`.
      [Theme Color](https://developers.google.com/web/tools/lighthouse/audits/address-bar?utm_source=lighthouse&utm_medium=extension)

- [ ] Does not provide a valid apple-touch-icon
      [touch icon](https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/?utm_source=lighthouse&utm_medium=extension)
