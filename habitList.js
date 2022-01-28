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
localStorage.setItem("habitlist", "Sleep\nExercise\nDiet\nCats");
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

  