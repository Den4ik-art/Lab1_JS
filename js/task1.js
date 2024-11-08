document.getElementById('checkExamsButton').addEventListener('click', checkExams);

var exams = [
    {
        subject: "Математика",
        examDate: "2024-11-8",
        room: "Аудиторія 101"
    },
    {
        subject: "Фізика",
        examDate: "2024-11-12",
        room: ""
    },
    {
        subject: "Інформатика",
        examDate: "2024-11-7",
        room: "Аудиторія 202"
    },
    {
        subject: "Українська мова",
        examDate: "2024-11-5",
        room: "Аудиторія 205"
    },
    {
        subject: "Географія",
        examDate: "2024-11-15",
        room: "Аудиторія 306"
    },
];



function calculateRemainingDays(examDate) {
    var examDateObj = new Date(examDate);
    var currentDate = new Date();
    var timeDiff = examDateObj.getTime() - currentDate.getTime();
    var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
}

// Функція для генерації повідомлень про консультацію/іспит
function displayExamInfo(html, exam) {
    var daysLeft = calculateRemainingDays(exam.examDate);
    var status = "";

    if (daysLeft == 1) {
        status = "Сьогодні консультація! ";
    } else if (daysLeft == 0) {
        status = "Сьогодні іспит! ";
    } else if (daysLeft > 1) {
        status = "Іспит через " + daysLeft + " днів. ";
    } else {
        status = "Іспит минув. ";

    }

    html += "<tr>";
    html += `<td>${exam.subject}</td>`;
    html += `<td>${exam.examDate}</td>`;
    html += `<td>${exam.room || "Невідоме місце проведення консультації/іспиту"}</td>`;
    html += `<td>${status}</td>`;
    html += "</tr>";

    return html;
}

// Основна функція для перевірки іспитів
function checkExams() {
    var html = "<table style='border-collapse: collapse; width: 100%;'>";
    html += "<tr><th>Назва предмету</th><th>Дата іспиту</th><th>Аудиторія</th><th>Статус</th></tr>";
    
    exams.forEach(function(exam) {
        html = displayExamInfo(html, exam);
    });
    
    html += "</table>";
    document.getElementById('examResult').innerHTML = html;
}
