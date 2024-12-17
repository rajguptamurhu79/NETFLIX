# Netflix Landing Page Clone

This project is a responsive clone of the Netflix landing page, created using HTML, CSS, and JavaScript. It mimics the design and basic functionality of the Netflix homepage, providing a similar user experience.

## Features

- Responsive design that works on desktop and mobile devices
- Netflix-style hero section with background image and overlay
- Email signup form with validation
- Language switching between English and Hindi
- Interactive buttons with hover states and loading animations
- Simulated signup process

## Installation

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/netflix-landing-clone.git
   ```

2. Navigate to the project directory:
   ```
   cd netflix-landing-clone
   ```

3. Open the `index.html` file in your web browser to view the project.

## Usage

The landing page is static and can be served using any basic HTTP server. For development purposes, you can use Python's built-in HTTP server:

```
python -m http.server 8000
```

Then open your web browser and navigate to `http://localhost:8000`.

## Customization

To customize this project for your needs:

1. Replace the logo:
   - Update the `src` attribute of the `<img>` tag in the navbar in `index.html`.

2. Change the background image:
   - Modify the `background` property in the `.hero` class in `styles.css`.

3. Update content:
   - Edit the text in the `<h1>`, `<h2>`, and `<p>` tags within the hero section in `index.html`.

4. Modify colors:
   - Adjust the color variables in the `:root` selector in `styles.css`.

5. Add or modify languages:
   - Update the `translations` object in `script.js` to add or change language options.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This project is for educational purposes only. It is not affiliated with, authorized, maintained, sponsored or endorsed by Netflix Inc. or any of its affiliates or subsidiaries.
