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

