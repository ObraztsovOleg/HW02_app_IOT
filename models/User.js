export default m => {
    const UserSchema = m.Schema({
      login: String
    });
  
    return m.model('User', UserSchema);
  }