// ニュース更新
const news = [
  "来月の天体観測会の日程が決定しました！",
  "新入部員歓迎会を開催します。",
  "宇宙飛行士OBによる特別講演会のお知らせ"
];
const newsList = document.getElementById('news-list');
news.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  newsList.appendChild(li);
});

// イベントカレンダー
const events = [
  { date: '2024-08-20', title: '天体観測会' },
  { date: '2024-08-27', title: '宇宙科学セミナー' },
  { date: '2024-09-03', title: 'プラネタリウム見学' }
];
const eventsList = document.getElementById('events-list');
events.forEach(event => {
  const li = document.createElement('li');
  li.textContent = `${event.date}: ${event.title}`;
  eventsList.appendChild(li);
});

// フォームのバリデーション
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('お問い合わせありがとうございます。送信されました。');
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});