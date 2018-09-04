# Calculib
A example project to show a customizable package installer

# Installing

```bash
npm install calculib
```

# Custom build

You can remove some of the operations by:
```bash
npm config set calculib:excludes $operation_1,$operation_2,$operation_3,...

npm rebuild calculib
```

Available operations
 - sum
 - subtraction
 - multiplication
 - division

# License

This project is under [MIT LICENSE](https://opensource.org/licenses/MIT)