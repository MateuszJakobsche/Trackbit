const habitList = require('./habitList.js');

test('habitList is created', () => {
    localStorage.setItem("habitlist", "Sleep\nExercise\nDiet\nCats");

    let testHabitList = new habitList();
    expect(testHabitList.ListOfHabits[0]).toEqual("Sleep");
    

});

test('should get from localStorage', () => {
    const KEY = 'habitlist', VALUE = 'Sleep\nExercise\nDiet\nCats'

    habitList.getInstance()
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
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