# angular-pivottable
Angular wrapper for Nicolas Kruchten's Pivot Table.

[Kruchten's](https://github.com/nicolaskruchten/pivottable)

## Usage :

 - If you use bower, just `bower install angular-pivottable`. If not, download files from the github repo.
 - If you use npm, just `npm install angular-pivottable`. If not, download files from the github repo.
 - Download also it's dependencies https://github.com/nicolaskruchten/pivottable, jquery & jquery-ui
 - Add `jquery.js`, `jquery-ui.js`, `angular-pivot.js`, `pivot.css`, and `pivot.js` to your code:
```html
<link href="pivot.css" rel="stylesheet" type="text/css" />
<script src="jquery.js"></script>
<script src="pivot.js"></script>
<script src="angular-pivot.js"></script>
```

 - Add the `angular-pivottable` module as a dependency to your application module:
```js
angular.module('MyApp', ['angular-pivottable']);
```

 - Add a `ng-pivot` attribute to any element with the name of a $scope variable containing the array of data to display on the Pivot Table.
```html
<div ng-pivot="data"></div>
```
- You can also add a `ng-pivot-options` attribute to any element with the name of a $scope variable containing the options object to configure the Pivot Table.
```html
<div ng-pivot="data" ng-pivot-options="options"></div>
```

```js
$scope.data = [
    {color: "blue", shape: "circle"},
    {color: "red", shape: "triangle"}
];

$scope.options = {
    rows: ["color"],
    cols: ["shape"]
};
```