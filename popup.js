const commonAnglesRad = {
  0: 0,
  "π/6": Math.PI / 6,
  "π/4": Math.PI / 4,
  "π/3": Math.PI / 3,
  "π/2": Math.PI / 2,
  "π": Math.PI,
  "3π/2": (3 * Math.PI) / 2,
  "2π": 2 * Math.PI
};

const commonAnglesDeg = {
  0: 0,
  30: Math.PI / 6,
  45: Math.PI / 4,
  60: Math.PI / 3,
  90: Math.PI / 2,
  180: Math.PI,
  270: (3 * Math.PI) / 2,
  360: 2 * Math.PI
};

const commonValuesDeg = {
  sin: {
    0: "0",
    30: "1/2",
    45: "√2/2",
    60: "√3/2",
    90: "1",
    180: "0",
    270: "-1",
    360: "0"
  },
  cos: {
    0: "1",
    30: "√3/2",
    45: "√2/2",
    60: "1/2",
    90: "0",
    180: "-1",
    270: "0",
    360: "1"
  },
  tan: {
    0: "0",
    30: "1/√3",
    45: "1",
    60: "√3",
    90: "undefined",
    180: "0",
    270: "undefined",
    360: "0"
  },
  csc: {
    0: "undefined",
    30: "2",
    45: "√2",
    60: "2/√3",
    90: "1",
    180: "undefined",
    270: "-1",
    360: "undefined"
  },
  sec: {
    0: "1",
    30: "2/√3",
    45: "√2",
    60: "2",
    90: "undefined",
    180: "-1",
    270: "undefined",
    360: "1"
  },
  cot: {
    0: "undefined",
    30: "√3",
    45: "1",
    60: "1/√3",
    90: "0",
    180: "undefined",
    270: "0",
    360: "undefined"
  }
};

function toDecimal(fraction) {
  if (fraction.includes("√")) {
    const parts = fraction.split("√");
    const coefficient = parseFloat(parts[0]) || 1;
    const sqrtValue = parts[1].includes("/") ? parts[1].split("/")[0] : parts[1];
    const denominator = parts[1].includes("/") ? parts[1].split("/")[1] : 1;
    return ((coefficient * Math.sqrt(sqrtValue)) / denominator).toFixed(4);
  } else if (fraction.includes("/")) {
    const parts = fraction.split("/");
    return (parseFloat(parts[0]) / parseFloat(parts[1])).toFixed(4);
  } else if (fraction === "undefined") {
    return fraction;
  } else {
    return parseFloat(fraction).toFixed(4);
  }
}

function formatFraction(fraction) {
  return fraction.replace("√", "&radic;");
}

function isUndefined(ratio, radValue) {
  const pi = Math.PI;
  const piOver2 = pi / 2;

  switch (ratio) {
    case 'tan':
    case 'sec':
      return (Math.abs(radValue % pi) === piOver2);
    case 'cot':
    case 'csc':
      return (Math.abs(radValue % pi) === 0);
    default:
      return false;
  }
}

function parseInput(value, mode) {
  if (mode === 'deg') {
    value = parseFloat(value);
    return value * (Math.PI / 180);
  } else {
    if (commonAnglesRad.hasOwnProperty(value)) {
      return commonAnglesRad[value];
    } else {
      return parseFloat(value);
    }
  }
}

document.getElementById('calculate').addEventListener('click', () => {
  const mode = document.getElementById('mode').value;
  const ratio = document.getElementById('ratio').value;
  let value = document.getElementById('inputValue').value;
  const results = document.getElementById('results');

  let radValue = parseInput(value, mode);

  let result;
  let commonFraction;
  if (mode === 'deg' && commonValuesDeg[ratio].hasOwnProperty(value)) {
    commonFraction = commonValuesDeg[ratio][value];
    result = toDecimal(commonFraction);
  } else if (mode === 'rad' && isUndefined(ratio, radValue)) {
    result = "undefined";
  } else {
    switch (ratio) {
      case 'sin':
        result = Math.sin(radValue).toFixed(9);
        break;
      case 'cos':
        result = Math.cos(radValue).toFixed(9);
        break;
      case 'tan':
        result = Math.tan(radValue).toFixed(9);
        break;
      case 'csc':
        result = (1 / Math.sin(radValue)).toFixed(9);
        break;
      case 'sec':
        result = (1 / Math.cos(radValue)).toFixed(9);
        break;
      case 'cot':
        result = (1 / Math.tan(radValue)).toFixed(9);
        break;
    }
  }

  if (mode === 'deg' && commonFraction && result !== "undefined") {
    results.innerHTML = `Fraction: ${formatFraction(commonFraction)} <br> Decimal: ${result}`;
  } else {
    results.innerHTML = `Result: ${result}`;
  }
});
