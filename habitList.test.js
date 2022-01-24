const habitList = require('./habitList.js');

test('habitList is created', () => {
    localStorage.setItem("habitlist", "Sleep\nExercise\nDiet\nCats");

    let testHabitList = new habitList();
    expect(testHabitList.ListOfHabits[0]).toEqual("Sleep");
    

});



test('Does getInstance call constructor', () => {
    let testHabitList1 = new habitList();
    let testHabitList2 = habitList.getInstance();

    expect(testHabitList1).toEqual(testHabitList2);
    expect(testHabitList1).toStrictEqual(testHabitList2);
    expect(testHabitList1).toBeInstanceOf(habitList);
})

test('Are habitList the same', () => {
    let testHabitList1 = habitList.getInstance();
    let testHabitList2 = habitList.getInstance();

    expect(testHabitList1).toEqual(testHabitList2);
    expect(testHabitList1).toStrictEqual(testHabitList2);
})