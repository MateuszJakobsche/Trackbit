class habitList {
  constructor(){

    if (localStorage.getItem("habitlist") === null) {
      localStorage.setItem("habitlist", "");
    }

    habitList.instance = this;
    this.ListOfHabits = localStorage.getItem("habitlist").split('\n');
  }
    
  }
  
    module.exports = habitList;