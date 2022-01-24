class habitList {
  constructor(){

    if (localStorage.getItem("habitlist") === null) {
      localStorage.setItem("habitlist", "");
    }

    habitList.instance = this;
    this.ListOfHabits = localStorage.getItem("habitlist").split('\n');
    
  }
  static getInstance(){
    if (!(habitList.instance)|| (habitList.instance != localStorage.getItem("habitlist").split('\n'))){
      return new habitList();
    }
    return habitList.instance;
  }
}

  module.exports = habitList;