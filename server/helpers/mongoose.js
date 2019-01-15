module.exports = {
  normaliseErrors: function (errors) {
    let normaliseError = [];
    for(let property in errors){
     if(errors.hasOwnProperty(property)){
       normaliseError.push({title:property, detail:errors[property].message})
    }
    }
    return normaliseErrors;
  }
}
