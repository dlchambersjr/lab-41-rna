## Lab-41-rna: Fizz Buzz Speaker

### Author: David Chambers

### Links and Resources
* [repo](https://github.com/dlchambersjr/lab-41-rna)
* [snack](https://snack.expo.io/@dlchambersjr/rna-counter)


### Modules
#### `app.js` -> render to phone
##### Exported Values and Methods
This is the hub that ties all the modules together and exports them to the phone.

#### `component/header/header.js` -> <Text>

#### `component/counter/counter.js` -> <button> and <Text>
##### Exported Values and Methods

###### `handleReset() -> updates state`
Used to update state for the counter and the counter style.

###### `handleButtonClick(value) -> updates state`
used to increase/decrease the counter value and set the class based on a positive or negative value of the counter.

#### `component/footer/footer.js` -> <Text>

#### `style.js` -> styles for respective modules
Each component has a style.js that exports the styles for the particular style.

### Setup

#### Running the app
* `npm run start` from the folder of the repo.

#### UML
[Fizz Buzz UML](https://raw.githubusercontent.com/dlchambersjr/lab-41-rna/master/lab-41-rna-uml.jpg)