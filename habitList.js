class habitList {
  constructor(){

    if (localStorage.getItem("habitlist") === null) {
      localStorage.setItem("habitlist", "My habit");
    }

    var habits = localStorage.getItem("habitlist");
    if (habits.endsWith("\n")){
      habits = habits.substring(0, habits.length - 2);
    }
    if (habits.startsWith("\n")){
      habits = habits.substring(2, habits.length);
    }

    habitList.instance = this;
    this.ListOfHabits = habits.split('\n');
    
  }
  static getInstance(){
    if (!(habitList.instance)|| (habitList.instance != localStorage.getItem("habitlist").split('\n'))){
      return new habitList();
    }
    return habitList.instance;
  }
}
//localStorage.setItem("habitlist", "Sleep\nExercise\nDiet\nCats\n");
if (localStorage.getItem("currenthabit") === null) {
      localStorage.setItem("currenthabit", habitList.getInstance().ListOfHabits[0]);
}
 function setHabit(i){
   localStorage.setItem('currenthabit', habitList.getInstance().ListOfHabits[i]); 
      location.reload();
      }
            let selectedHabit = localStorage.getItem("currenthabit");

  for (let i = 0; i < habitList.getInstance().ListOfHabits.length; i++ ){
     var thisHabit = (habitList.getInstance().ListOfHabits)[i];
     document.write("<li><button onClick='setHabit("+i+")'>" + thisHabit + "</button></li>");
     }

  