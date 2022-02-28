function day_of_year() {
  let day = new Date();
  return Math.ceil((day - (new Date((new Date()).getFullYear(), 0, 1))) / 86400000);
}
