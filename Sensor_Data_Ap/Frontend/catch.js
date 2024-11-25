fetch("http://127.0.0.1:5000/data")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("jsonData").textContent = JSON.stringify(data, null, 2);
        // Parsing data JSON dan menampilkannya di UI
        let parsedData = document.getElementById("parsedData");
        parsedData.innerHTML = '';
        
        parsedData.innerHTML += `<li class="list-group-item">Suhu Max: ${data.suhumax}</li>`;
        parsedData.innerHTML += `<li class="list-group-item">Suhu Min: ${data.suhumin}</li>`;
        parsedData.innerHTML += `<li class="list-group-item">Suhu Rata-Rata: ${data.suhurata}</li>`;

        data.nilai_suhu_max_humid_max.forEach(item => {
            parsedData.innerHTML += `
                <li class="list-group-item">
                    <strong>ID:</strong> ${item.idx} |
                    <strong>Suhu:</strong> ${item.suhu} |
                    <strong>Humid:</strong> ${item.humid} |
                    <strong>Kecerahan:</strong> ${item.kecerahan} |
                    <strong>Timestamp:</strong> ${item.timestamp}
                </li>`;
        });

        data.month_year_max.forEach(item => {
            parsedData.innerHTML += `
                <li class="list-group-item">
                    <strong>Bulan-Tahun Max:</strong> ${item.month_year}
                </li>`;
        });
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to load data from the backend");
    });
