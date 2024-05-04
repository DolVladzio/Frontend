document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Значення з елементів форми
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var meal = document.querySelector('input[name="meal"]:checked').value;
    var foods = document.querySelectorAll('input[name="food"]:checked');
    var comment = document.getElementById('comment').value;

    // Генерація результату
    var foodItems = [];
    foods.forEach(function(food) {
        foodItems.push(food.value);
    });
    var resultText = (`User's login: ${username}\n
    User's email: ${email}\n
    З’їв на ${meal}: ${foodItems}\n
    Та залишив такий коментар: ${comment}`);
    
    // Вивід результату на сторінку
    document.getElementById('result').innerText = resultText;
});
