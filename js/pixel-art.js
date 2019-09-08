var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var colorPersonalizado = document.getElementById('color-personalizado');
var indicadorColor = document.getElementById('indicador-de-color');
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var colorElegido;
var click = false;
var estado = false;
var borrar = document.getElementById('borrar');
var borrarPixel = document.getElementById('borrarPixel');
var guardar = document.getElementById("guardar");

function recorrerColores() {
  for (let index = 0; index < nombreColores.length; index++) {
    let color = document.createElement("div");
    color.setAttribute("class", "color-paleta");
    color.setAttribute("style", `background-color: ${nombreColores[index]}`);
    color.setAttribute('onclick', `seleccionarColor('${nombreColores[index]}')`);
    paleta.appendChild(color);
  }
}

function seleccionarColor(colorSeleccionado) {
  indicadorColor.style.backgroundColor = colorSeleccionado;
  colorElegido = colorSeleccionado;
}

function recorrerPixeles() {
  for (let index = 0; index <= 1750; index++) {
    let pixel = document.createElement("div");
    grillaPixeles.appendChild(pixel);
  }
}

function pintarPixel(pixel) {
  pixel.target.style.backgroundColor = colorElegido;
}

function mouseClick(e) {
  if (click) {
    return estado
      ? indicadorColor.style.backgroundColor = e.target.style.backgroundColor
      : pintarPixel(e);
  }
}

grillaPixeles.addEventListener('click', (e) => { pintarPixel(e); });
grillaPixeles.addEventListener('mousedown', () => { click = true; });
grillaPixeles.addEventListener('mouseover', mouseClick);
grillaPixeles.addEventListener('mouseup', () => { click = false; });
colorPersonalizado.addEventListener('change',
  (() => {
    colorActual = colorPersonalizado.value;
    indicadorColor.style.backgroundColor = colorActual;
    seleccionarColor(colorActual);
    pintarPixel(colorActual);
  }));

recorrerColores();
recorrerPixeles();

borrar.addEventListener('click', () => {
  $(grillaPixeles).children('div').animate({ "backgroundColor": "white" }, 1000);
});

$(".imgs li").on("click", (e) => {
  var seleccion = e.target.id;
  switch (seleccion) {
    case 'batman':
      cargarSuperheroe(batman);
      break;
    case 'invisible':
      cargarSuperheroe(invisible);
      break;
    case 'flash':
      cargarSuperheroe(flash);
      break;
    case 'wonder':
      cargarSuperheroe(wonder);
      break;
    default:
      console.log("Error")
      break;
  }
});

guardar.addEventListener("click", guardarPixelArt);