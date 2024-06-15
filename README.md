# Digital-Clock
# Digital Clock

This project is a simple digital clock that displays the current time in a 12-hour format with an AM/PM indicator. The clock updates every second and is styled to be visually appealing with a background image and blurred backdrop effect.

## Features
- Displays current time in HH:MM:SS AM/PM format
- Automatically updates every second
- 12-hour time format
- Responsive and visually appealing design
- Background image with fixed position and blur effect on the clock display

## Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/digital-clock.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd digital-clock
   ```

3. **Open `index.html` in your browser:**
   ```bash
   open index.html
   ```

## File Structure

- `index.html`: The main HTML file that contains the structure of the clock.
- `index.js`: The JavaScript file that updates the clock every second.
- `style.css`: The CSS file that styles the clock and the background.
- `BG.jpg`: The background image used in the clock display.

## Code Explanation

### JavaScript (index.js)

The `Updateclock` function gets the current time, formats it into a 12-hour format with AM/PM, and updates the clock display every second.

```javascript
function Updateclock() {
    const now = new Date();

    let hour = now.getHours().toString().padStart(2, '0');
    hour = hour >= 12 ? hour - 12 : hour;
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    const am_pm = now.getHours() >= 12 ? 'PM' : 'AM';
    const timestring = `${hour}:${minute}:${second} ${am_pm}`;
    
    document.getElementById('clock').textContent = timestring;
}

// Initial call to display the clock immediately
Updateclock();

// Update the clock every second
setInterval(Updateclock, 1000);
```

### HTML (index.html)

The HTML file includes a container for the clock display and links to the CSS and JavaScript files.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="clock-container">
        <div id="clock">00:00:00</div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

### CSS (style.css)

The CSS file styles the clock and background image.

```css
body {
    background-image: url(BG.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    margin: 0;
}

.clock-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

#clock {
    font-family: monospace;
    font-size: 6rem;
    color: white;
    text-align: center;
    backdrop-filter: blur(5px);
    background-color: hsla(0, 0%, 100%, 0.1);
    width: 100%;
}
```

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.

## Author

- Your Name
- [Your GitHub Profile](https://github.com/yourusername)

Feel free to customize this project and improve it further!
