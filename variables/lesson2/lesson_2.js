function greetUser(userName, language) {
    if (userName.length === 0) {
        userName = "Guest"
    }
    if (language === undefined) {
        language = "en"
    }
    if (language === "en") {
        console.log("Hello,", userName);
    } else if (language === "ru") {
        console.log("Привет,", userName);
    } else {
        console.log("Unsupported language!");
    }
}
greetUser("Anna", "ru")// privet anna
greetUser("John")// hello john
greetUser("")//hello guest
greetUser()//hello guest