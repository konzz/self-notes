# Self Notes

A real-time collaborative notes application with room-based communication.

## Features

- Real-time updates using Socket.IO
- Room-based communication
- Dark theme UI
- Code-friendly text areas
- Retro-styled interface

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open http://localhost:3000 in your browser

## Deployment to Render.com

1. Create a new Web Service on Render.com
2. Connect your GitHub repository
3. Use the following settings:
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment Variable: `PORT=3000`

The application will be automatically deployed and available at your Render.com URL.
