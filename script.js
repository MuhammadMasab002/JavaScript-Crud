
let products = [
    { url: 'images/f1.jpg', title: 'Printed Yellow Cotton Men Half T Shirt', price: '29' },
    { url: 'images/f2.jpg', title: 'Printed Green Cotton Men Half T Shirt', price: '22' },
    { url: 'images/f3.jpg', title: 'Printed Red Cotton Men Half T Shirt', price: '16' },
    { url: 'images/f4.jpg', title: 'Printed White Cotton Men Half T Shirt', price: '34' },
    { url: 'images/f5.jpg', title: 'Printed Blue Cotton Men Half T Shirt', price: '25' },
    { url: 'images/f6.jpg', title: 'Printed Orange Cotton Women Full T Shirt', price: '38' },
    { url: 'images/f7.jpg', title: 'Printed Burlywood Cotton Men Full T Shirt', price: '44' },
    { url: 'images/f8.jpg', title: 'Darkmagenta Cotton Women Half T Shirt', price: '30' }
];

let productRow = document.querySelector('.products');
let productTable = document.querySelector('#productTable');
let tableBody = document.querySelector('#tableBody');

let titleInput = document.querySelector('#inputTitle');
let priceInput = document.querySelector('#inputPrice');
let inputFile = document.querySelector('#inputFile');

let mainBtn = document.querySelector('#mainBtn');
let submitBtn = document.querySelector('#submitBtn');


// let newArray = products.map(prod => {
//     prod.totalPrice = prod.price -prod.discount;
//     return prod;
// })







// let srNo = 1;

let path;
inputFile.addEventListener('change', function () {
    path = URL.createObjectURL(inputFile.files[0]);
})

function addItems() {

    for (let key in products) {
        console.log(products);
        tableBody.innerHTML += `
                    <tr id="tableRow" style="vertical-align: middle;">
                        <td>${products[key]}</td>
                        <td>${products[key].title}</td>
                        <td>$${products[key].price}</td>
                        <td>
                            <img style="width:100px;" class="img-fluid" title="${products[key].title}" src="${products[key].url}" alt="${products[key].title}">
                        </td>
                        <td>
                            <button type="button" class="btn bg-danger" id="delBtn">Delete</button>
                            <button type="button" class="btn bg-success" id="editBtn">Edit</button>
                        </td>
                    </tr>
        `;
        // srNo++;
    }
    console.log(products);
    mainFunction(products);

    let tableRow = document.querySelectorAll('#tableRow');
    let editBtn = document.querySelectorAll('#editBtn');
    let delBtn = document.querySelectorAll('#delBtn');

    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click', function () {
            tableRow[i].remove();
        })
    }



    for (const key in products) {

        let updateBtn = document.createElement('button');
        editBtn[key].addEventListener('click', function () {

            titleInput.value = products[key].title;
            priceInput.value = products[key].price;

            let update = mainBtn.appendChild(updateBtn);
            updateBtn.classList = ('btn bg-success w-100')
            updateBtn.id = 'updateBtn';
            updateBtn.innerText = 'Update';
            mainBtn.replaceWith(update);

        })

        updateBtn.addEventListener('click', function () {
            mainBtn.replaceWith(submitBtn);

            console.log(titleInput.value + " " + priceInput.value);
            // mainFunction(products);

        })
    }

}

submitBtn.addEventListener('click', function () {

    let newProduct = { url: path, title: titleInput.value, price: priceInput.value }
    products.push(newProduct);
    tableBody.innerHTML += `
                 <tbody style="border-style: none; background-color: transparent;">
                    <tr id="tableRow" style="vertical-align: middle;">
                        <td>${newProduct[key]}</td>
                        <td>${newProduct.title}</td>
                        <td>$${newProduct.price}</td>
                        <td>
                            <img style="width:100px;" class="img-fluid" title="${newProduct.title}" src="${newProduct.url}" alt="${newProduct.title}">
                        </td>
                        <td>
                            <button type="button" class="btn bg-danger" id="delBtn">Delete</button>
                            <button type="button" class="btn bg-success" id="editBtn">Edit</button>
                        </td>
                    </tr>
                 </tbody>
        `;

console.log(products);
    // addItems();
})

function mainFunction(item) {
    let html = ``;

    for (const key in item) {

        html += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-12">
                <div class="card main-card">
                    <div class="card-header px-md-4 px-5 py-3">
                        <img class="img-fluid image card-img-top" title="${item[key].title}" src="${item[key].url}" alt="${item[key].title}">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">${item[key].title}</h5>
                        <p class="card-text">$${item[key].price}</p>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="addCart btn">ADD TO CART</button>
                    </div>
                </div>
            </div>
        `;
    }

    productRow.innerHTML = html;
}








// titleInput.value = '';
// priceInput.value = '';
// inputFile.value = '';


// let delBtn = document.querySelector('#delBtn');
// let tableRow = document.querySelector('#tableRow');

// delBtn.addEventListener('click', function () {
//     products.pop();
//     tableRow.remove();
//     console.log(products);
//     mainFunction();

// })