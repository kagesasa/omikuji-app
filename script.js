const fortunes = [
    { title: "大吉", message: "最高の一日になりそう！\n新しいことに挑戦してみて✨" },
    { title: "中吉", message: "いいことあるかも！\n笑顔で過ごすと吉😊" },
    { title: "小吉", message: "ささやかな幸せが訪れる予感。\nお気に入りのカフェに行こう☕️" },
    { title: "吉", message: "普通が一番！\nのんびり過ごしてリフレッシュ🌿" },
    { title: "末吉", message: "焦らずマイペースに。\n深呼吸してリラックスしてね☁️" },
    { title: "凶", message: "今日は無理せずゆっくり休もう。\n明日はきっといい日になるよ🌙" }
];

const drawBtn = document.getElementById('draw-btn');
const omikujiBox = document.getElementById('omikuji-box');
const resultDiv = document.getElementById('result');
const fortuneTitle = document.getElementById('fortune-title');
const fortuneMessage = document.getElementById('fortune-message');

drawBtn.addEventListener('click', () => {
    // Reset state
    resultDiv.classList.add('hidden');
    drawBtn.disabled = true;
    
    // Play animation
    omikujiBox.classList.add('shake');
    
    setTimeout(() => {
        // Stop animation
        omikujiBox.classList.remove('shake');
        
        // Select random fortune
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const fortune = fortunes[randomIndex];
        
        // Display result
        fortuneTitle.textContent = fortune.title;
        fortuneMessage.innerText = fortune.message; // innerText handles newlines
        resultDiv.classList.remove('hidden');
        
        // Re-enable button
        drawBtn.disabled = false;
    }, 1000); // 1 second delay
});
