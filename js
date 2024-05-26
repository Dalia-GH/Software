let cakes = [
    { id: 1, name: 'Chocolate Cake', price: 20, description: 'Rich and creamy chocolate cake' },
    { id: 2, name: 'Vanilla Cake', price: 15, description: 'Classic vanilla cake with buttercream frosting' },
];

function displayCakes() {
    const cakeList = document.getElementById('cake-list');
    cakeList.innerHTML = '';
    cakes.forEach(cake => {
        const cakeDiv = document.createElement('div');
        cakeDiv.classList.add('cake');
        cakeDiv.innerHTML = `
            <h3>${cake.name}</h3>
            <p>Price: $${cake.price}</p>
            <p>${cake.description}</p>
            <button onclick="viewCake(${cake.id})">View Details</button>
        `;
        cakeList.appendChild(cakeDiv);
    });
}

function showAddCakeForm() {
    document.getElementById('add-cake-form').style.display = 'block';
}

function hideAddCakeForm() {
    document.getElementById('add-cake-form').style.display = 'none';
}

function addCake() {
    const name = document.getElementById('cake-name').value;
    const price = document.getElementById('cake-price').value;
    const description = document.getElementById('cake-description').value;
    const newCake = {
        id: cakes.length + 1,
        name: name,
        price: parseFloat(price),
        description: description
    };
    cakes.push(newCake);
    displayCakes();
    hideAddCakeForm();
}

function viewCake(cakeId) {
    const cake = cakes.find(cake => cake.id === cakeId);
    if (cake) {
        alert(`Name: ${cake.name}\nPrice: $${cake.price}\nDescription: ${cake.description}`);
    } else {
        alert('Cake not found');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayCakes();
});
