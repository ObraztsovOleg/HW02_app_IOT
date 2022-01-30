export default m => {
    const NumberSchema = m.Schema({
      number: Number
    });
  
    return m.model('Num', NumberSchema);
  }