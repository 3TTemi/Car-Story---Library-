const authors = ["Thomas Mann", "James Joyce", "E. M. Forster", "Isabel Allende", "Isabel Allende"];

const title = [
    "Death in Venice",
    "A portrait of the artist as a young man",
    "A room with a view",
    "The house of spirits",
    "Of love and shadows",
];

const descriptions = [
    "One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.",
    "This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character. ",
    "This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.",
    "Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship.",
    "The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship."

]

function findMatch() {
    var authorName = document.getElementById("authorText").value;
    var titleName = document.getElementById("titleText").value;
    var textBox = document.getElementById("textBox");
    var authorStatement;
    var titleStatement;
    console.log(authorName);
    console.log(titleName);



    for (var i = 0; i < 5; i++) {
        if (authorName == authors[i]) {
            authorStatement = i;
            break;
        }
        else {
            authorStatment = "";
        }
    }


        for (var i = 0; i < 5; i++) {
            if (titleName == title[i]) {
                titleStatement = i;
                break;
            }
            else {
                titleStatement = "";
            }
        }


        if (authorName == "" && titleName == "") {
            textBox.value = "Book not Found";
        }
        else if (authorName != "" && titleName == "") { // != is good 
            if(Number.isInteger(authorStatement))
            {
                textBox.value = title[authorStatement] + "\n" + "\n" +descriptions[authorStatement];
            }
            else
            {
                textBox.value = "Book not Found";

            }
    
        }
        else if (authorName == "" && titleName != "") {
            if(Number.isInteger(titleStatement))
            {
            textBox.value = authors[titleStatement] + "\n" + "\n" + descriptions[titleStatement];
            }
            else
            {
                textBox.value = "Book not Found";

            }
        }
        else if (authorName != "" && titleName != "") {

            for (var i = 0; i < 5; i++) {
              if(authorName == authors[i] && titleName == title[i])
              {
                titleStatement = i;
                authorStatement = i;
              }
            }

            if(authorStatement == titleStatement)
            {
                textBox.value = descriptions[titleStatement];

            }
            else
            {
                textBox.value = "Something went wrong, Author Name and Book Title Don't match";
            }

        }
    }

function clearText() {

    document.getElementById("authorText").value = "";
    document.getElementById("titleText").value = "";
    textBox.value = "";

}
     
    


    var findButton = document.getElementById("findButton");
    findButton.addEventListener("click", findMatch);

    var clearButton = document.getElementById("clearButton");
    clearButton.addEventListener("click", clearText);


