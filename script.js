function countFlavors() {
    const inputElement = document.getElementById('flavorInput');
    const table = document.getElementById('flavorTable');
    table.innerHTML = ''; // Clear previous results

    const input = inputElement.value;
    const flavors = input.split(',').map(flavor => flavor.trim());

    const flavorCount = {};
    flavors.forEach(flavor => {
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    });

    for (const flavor in flavorCount) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = flavor;
        cell2.textContent = flavorCount[flavor];
    }
}
