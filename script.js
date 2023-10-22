document.addEventListener('DOMContentLoaded', function () {
    const loopNumberInput = document.getElementById('loop-number');
    const bishNumberInput = document.getElementById('bish-number');
    const boshNumberInput = document.getElementById('bosh-number');
    const startButton = document.getElementById('start-button');
    const outputContainer = document.getElementById('bish-bosh-list');

    startButton.addEventListener('click', function () {
        const loopNumber = parseInt(loopNumberInput.value);
        const bishNumber = parseInt(bishNumberInput.value);
        const boshNumber = parseInt(boshNumberInput.value);

        if (isNaN(loopNumber) || isNaN(bishNumber) || isNaN(boshNumber) || loopNumber < 1 || bishNumber < 1 || boshNumber < 1) {
            alert('Please enter valid positive numbers.');
            return;
        }

        outputContainer.innerHTML = '';
        for (let i = 1; i <= loopNumber; i++) {
            if (i % bishNumber === 0 && i % boshNumber === 0) {
                outputContainer.innerHTML += 'Bish-Bosh, ';
            } else if (i % bishNumber === 0) {
                outputContainer.innerHTML += 'Bish, ';
            } else if (i % boshNumber === 0) {
                outputContainer.innerHTML += 'Bosh, ';
            } else {
                outputContainer.innerHTML += i + ', ';
            }
        }
    });
});
