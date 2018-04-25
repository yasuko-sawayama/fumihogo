const isString = value => typeof value !== 'string' || value instanceof String;

const isObject = value => typeof value === 'object';

const formData = new FormData();

const parseArray = (arrayKey, arrayValue) => {
  if (arrayValue !== undefined) {
    if (isString(arrayValue[0])) {
      parseAttribute(arrayKey, arrayValue);
    } else {
      const myArray = Object.keys(arrayValue).map(attributeKey => {
        parseModel(`${arrayKey}[${attributeKey}]`, arrayValue[attributeKey])});
      Object.assign({}, myArray);
    }
  }
};

const parseObject = (objectKey, objectValue) => {
  if (typeof objectValue !== 'undefined') {
    const myObject = Object.keys(objectValue)
          .map(attributeKey =>
               parseAttribute(`${objectKey}[${attributeKey}]`, objectValue[attributeKey]));
    Object.assign({}, ...myObject)
  };
};

const parseAttribute = (attributeKey, attributeValue) => {
  if (typeof attributeValue !== 'undefined') {
    if (Array.isArray(attributeValue) && !isString(attributeValue[0])) {
      parseArray(attributeKey, attributeValue);
    } else if ((attributeKey).match(/image/)) { // TODO: もっとまともな判別方法…
      formData.append(attributeKey, attributeValue[0]);
    } else if (isObject(attributeValue)) {
      parseObject(attributeKey, attributeValue);
    } else {
      formData.append(attributeKey, attributeValue);
    }
  }
};

const parseModel = (keyString, data) => {
  const myModel = Object.keys(data)
        .map(inputKey =>
             console.log(inputKey) ||console.log(data[inputKey])|| 
             parseAttribute(
               keyString !== '' ?
                 `${keyString}[${inputKey}]` :
                 inputKey, data[inputKey]));
  Object.assign(
    {},
    myModel
  );
};

const parseFormData = (modelname, data) => {
  parseModel(modelname, data);

  return formData;
}

export default parseFormData;
