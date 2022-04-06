const searchPhone = () => {
    const inputField = document.getElementById('search-input');
    const inputText = inputField.value;
    inputField.value = '';
    if(inputText == ''){
        const inputError = document.getElementById('input-error');
        inputError.style.display = 'block';
        const keywordError = document.getElementById('keyword-error');
        keywordError.style.display = 'none';
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayPhone(data.data))
    }
}

const displayPhone = phones => {
    const displaContainar = document.getElementById('displa-containar');
    displaContainar.textContent = '';
    if (phones.length == 0) {
        const keywordError = document.getElementById('keyword-error');
        keywordError.style.display = 'block';
        const inputError = document.getElementById('input-error');
        inputError.style.display = 'none';
    }
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card p-4 rounded-3">
            <img src="${phone.image}" class="card-img-top h-50" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
            </div>
            <button onclick="loadDetails('${phone.slug}')" class="mx-auto w-50 rounded-3">Details</button>
        </div>
        `;
        displaContainar.appendChild(div);
    })
}


const loadDetails = phoneslug => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneslug}`;
    fetch(url)
    .then(res => res.json())
        .then(data => displayDetails(data.data))
}

const displayDetails = phone => {
    console.log(phone)
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name: ${phone.name}</h5>
            <p class="card-text">Release Date: ${phone.releaseDate ? (phone.releaseDate) : ('No release Date Found.')}</p>
            <p class="card-text">Chip Set: ${phone.mainFeatures?.chipSet}</p>
            <p class="card-text">Display Size: ${phone.mainFeatures?.displaySize}</p>
            <p class="card-text">Memory: ${phone.mainFeatures?.memory}</p>
            <p class="card-text">Storage: ${phone.mainFeatures?.storage}</p>
            <p class="card-text">Sensors: ${phone.mainFeatures?.sensors}</p>
            <p class="card-text">Bluetooth: ${phone.mainFeatures?.others?.Bluetooth}</p>

        </div>
    </div>
    `;
    phoneDetails.appendChild(div);
}

/*             
            <p class="card-text">GPS: ${phone.mainFeatures.others.GPS}</p>
            <p class="card-text">NFC: ${phone.mainFeatures.others.NFC}</p>
            <p class="card-text">Radio: ${phone.mainFeatures.others.Radio}</p>
            <p class="card-text">USB: ${phone.mainFeatures.others.USB}</p>
            <p class="card-text">WLAN: ${phone.mainFeatures.others.WLAN}</p> 

*/