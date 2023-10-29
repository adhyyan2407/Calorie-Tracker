function calculateCalories() {
    var breakfastCalories = parseInt(document.getElementById("breakfast").value);
    var lunchCalories = parseInt(document.getElementById("lunch").value);
    var dinnerCalories = parseInt(document.getElementById("dinner").value); 
    var snackCalories = parseInt(document.getElementById("snack").value);
    var bevCalories = parseInt(document.getElementById("bev").value);
    var totalCalories = breakfastCalories + lunchCalories + dinnerCalories + snackCalories + bevCalories;
    document.getElementById("totalCalories").textContent = "Total Calories: " + totalCalories + " kcal";
}