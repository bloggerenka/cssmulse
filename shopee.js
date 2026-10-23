
function LoadAd() {
  var links = [
    "https://s.shopee.co.id/2LZIXQnVVG",
    "https://s.shopee.co.id/2VsijjmsAJ",
    "https://s.shopee.co.id/1BNl8wOEq",
    "https://s.shopee.co.id/BUnxRvktt",
    "https://s.shopee.co.id/LoE9kv7Yw",
    "https://s.shopee.co.id/W7eM3uUDz",
    "https://s.shopee.co.id/gR4YMtqt2",
    "https://s.shopee.co.id/qkUkftDY5",
    "https://s.shopee.co.id/113uwysaD8",
    "https://s.shopee.co.id/1BNL9HrwsB",
    "https://s.shopee.co.id/40hWWUhA7k",
    "https://s.shopee.co.id/4B0wingWmn",
    "https://s.shopee.co.id/4LKMv6ftRq",
    "https://s.shopee.co.id/4Vdn7PfG6t",
    "https://s.shopee.co.id/4fxDJieclw",
    "https://s.shopee.co.id/4qGdW1dzQz",
    "https://s.shopee.co.id/50a3iKdM62",
    "https://s.shopee.co.id/5AtTudcil5",
    "https://s.shopee.co.id/4B0wipxJpL",
    "https://s.shopee.co.id/50a3iMu98W",
    "https://s.shopee.co.id/5AtTuftVnZ",
    "https://s.shopee.co.id/4fxDJkvPoU",
    "https://s.shopee.co.id/4qGdW3umTX",
    "https://s.shopee.co.id/30ozKh1lCC",
    "https://s.shopee.co.id/3B8PX017rF",
    "https://s.shopee.co.id/2gC8w531sA",
    "https://s.shopee.co.id/2qVZ8O2OXD",
    "https://s.shopee.co.id/3g4g7uzDqO",
    "https://s.shopee.co.id/3qO6KDyaVR",
    "https://s.shopee.co.id/3LRpjJ0UWM",
    "https://s.shopee.co.id/3VlFvbzrBP",
    "https://s.shopee.co.id/70L862mX56",
    "https://s.shopee.co.id/7AeYILltk9",
    "https://s.shopee.co.id/6fiHhQnnl4",
    "https://s.shopee.co.id/6q1htjnAQ7",
    "https://s.shopee.co.id/7faotGjzjI",
    "https://s.shopee.co.id/7puF5ZjMOL"
  ];

  var randomIndex = Math.floor(Math.random() * links.length);

  parent.location.href = links[randomIndex];
}

LoadAd();
