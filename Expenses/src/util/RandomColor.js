// const color = [
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
//     "#FF5733",
//     "#FFD633",
//     "#33FF57",
//     "#33BFFF",
//     "#9C33FF",
//     "#FF33BB",
//     "#FF3360",
// ];
const color = ["#000000",
"#111111",
"#222222",
"#333333",
"#444444",
"#555555",
"#666666",
"#777777",
"#888888",
"#999999",
"#AAAAAA",
"#BBBBBB",
"#CCCCCC",
"#DDDDDD",
"#EEEEEE",]

const RandomColor = () => {
  const value = Math.random();
  const number = Math.floor(value * color.length);
  return color[number]
};

export default RandomColor;