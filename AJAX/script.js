document.getElementById('veriAl').addEventListener('click', function() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            let user = data.results[0];
            document.getElementById('sonuc').innerHTML = `
                <p>İsim: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Ülke: ${user.location.country}</p>
            `;
        })
        .catch(error => console.error('Hata:', error));
});
