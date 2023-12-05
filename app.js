// Определим функцию для изменения содержимого SPA
// function changeContent(content) {
//     document.getElementById('app').innerHTML = content;
// }

// // Начальная страница
// const homePage = `
//     <h2>Welcome to My First App</h2>
//     <p>This is a simple Single Page Application created with JavaScript.</p>
//     <p>Click on the buttons below to navigate.</p>
//     <button onclick="loadPage('home')">Home</button>
//     <button onclick="loadPage('about')">About</button>
//     <button onclick="loadPage('contact')">Contact</button>
// `;

// // Страница "About"
// const aboutPage = `
//     <h2>About Us</h2>
//     <p>This is the about page of My First App.</p>
//     <button onclick="loadPage('home')">Home</button>
//     <button onclick="loadPage('about')">About</button>
//     <button onclick="loadPage('contact')">Contact</button>
// `;

// // Страница "Contact"
// const contactPage = `
//     <h2>Contact Us</h2>
//     <p>You can reach us at contact@example.com</p>
//     <button onclick="loadPage('home')">Home</button>
//     <button onclick="loadPage('about')">About</button>
//     <button onclick="loadPage('contact')">Contact</button>
// `;

// // Функция для загрузки страницы
// function loadPage(page) {
//     switch (page) {
//         case 'home':
//             changeContent(homePage);
//             break;
//         case 'about':
//             changeContent(aboutPage);
//             break;
//         case 'contact':
//             changeContent(contactPage);
//             break;
//         default:
//             changeContent(homePage);
//     }
// }

// // Загрузка начальной страницы при открытии приложения
// loadPage('home');


const button = document.querySelector('button');
button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const randomColor1 = getRandomColor();
    button.style.backgroundColor = randomColor1;

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
