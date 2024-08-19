let productRow = document.querySelector('#productRow');
let productTable = document.querySelector('#productTable');

let titleInput = document.querySelector('#inputTitle');
let priceInput = document.querySelector('#inputPrice');
let inputFile = document.querySelector('#inputFile');

let submitBtn = document.querySelector('#submitBtn');

let products = [];
let id = '';
let path;
inputFile.addEventListener('change', function () {
    path = URL.createObjectURL(inputFile.files[0]);
})

submitBtn.addEventListener('click', function () {
    let newProduct = {
        title: titleInput.value,
        price: priceInput.value,
        url: path
    };
    if (id != '') {
        products[id] = newProduct;
        submitBtn.innerText = 'Submit';
        submitBtn.classList.remove('green');
        id = '';
    }else {
        products.push(newProduct);
    }

    addTableData();
    addCard();
    clearForm();
})

function addTableData() {
    let output = '';
    let count = 1;
    for (const key in products) {
        output += `
            <tr class="text-center" style="vertical-align: middle;">
                <td>${count}</td>
                <td>${products[key].title}</td>
                <td>$${products[key].price}</td>
                <td>
                    <img style="width:100px;" class="img-fluid" title="${products[key].title}" src="${products[key].url}" alt="${products[key].title}">
                </td>
                <td>
                    <button type="button" class="btn bg-danger" id="delBtn" onclick="deleteData(${key})">Delete</button>
                    <button type="button" class="btn bg-success" id="editBtn" onclick="editData(${key})">Edit</button>
                </td>
            </tr>
        `;
        count++;
    }
    tableBody.innerHTML = output;
}

function deleteData(i) {
    console.log(i);
    
    products.splice(i, 1);
    addTableData();
    addCard();
}

function editData(i) {
    id = i;
    titleInput.value = products[i].title;
    priceInput.value = products[i].price;
    submitBtn.innerText = 'Update';
    submitBtn.classList.add('green');
}
function clearForm() {
    titleInput.value = '';
    priceInput.value = '';
    inputFile.value = '';
}


function addCard() {
    let html = ``;

    for (const key in products) {
        html += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-12 productCard">
                <div class="card main-card">
                    <div class="card-header px-md-4 px-5 py-3">
                        <img class="img-fluid image card-img-top" title="${products[key].title}" src="${products[key].url}" alt="${products[key].title}">
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">${products[key].title}</h5>
                        <p class="card-text">$${products[key].price}</p>
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
