# TheBlog

A modern, full-featured blog application built with React, featuring user authentication, rich text editing, and a beautiful responsive design.

![Blog Preview](https://img.shields.io/badge/Status-In_Development-yellow)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.2.0-green)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-blue)

## ✨ Features

- 🔐 **User Authentication** - Secure login/signup with Appwrite
- ✍️ **Rich Text Editor** - TinyMCE integration for creating beautiful blog posts
- 📱 **Responsive Design** - Mobile-first design with TailwindCSS
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 🔍 **Search Functionality** - Search through blog posts
- 📄 **Post Management** - Create, edit, and delete blog posts
- 🏃‍♂️ **Reading Progress** - Track reading progress on posts
- ⬆️ **Back to Top** - Smooth scroll back to top functionality
- 🎨 **Smooth Animations** - Framer Motion for page transitions
- 📊 **State Management** - Redux Toolkit for efficient state handling

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animations and page transitions
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **React Hook Form** - Form handling

### Backend & Services
- **Appwrite** - Backend-as-a-Service for authentication and database
- **TinyMCE** - Rich text editor

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── container/      # Layout components
│   ├── Header/         # Navigation components
│   ├── post-form/      # Post creation/editing
│   └── ...
├── pages/              # Page components
├── appwrite/           # Appwrite configuration
├── context/            # React contexts
├── store/              # Redux store configuration
├── conf/               # Environment configuration
└── assets/             # Static assets
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Appwrite account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sourya001/TheBlog-main.git
   cd TheBlog-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `src/conf/conf.js` file with your Appwrite configuration:
   ```javascript
   const conf = {
       appwriteUrl: "YOUR_APPWRITE_ENDPOINT",
       appwriteProjectId: "YOUR_PROJECT_ID",
       appwriteDatabaseId: "YOUR_DATABASE_ID",
       appwriteCollectionId: "YOUR_COLLECTION_ID",
       appwriteBucketId: "YOUR_BUCKET_ID",
   }
   
   export default conf
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Appwrite Setup
1. Create an Appwrite project
2. Set up authentication (Email/Password)
3. Create a database with a posts collection
4. Set up storage bucket for images
5. Configure appropriate permissions

### TinyMCE
The project uses TinyMCE for rich text editing. Make sure to configure it according to your needs in the RTE component.

## 🎨 Customization

### Theming
The project supports dark/light mode theming. Customize themes in:
- `src/context/ThemeContext.jsx`
- TailwindCSS configuration in `tailwind.config.js`

### Styling
- Primary styling with TailwindCSS
- Custom components in `src/components/`
- Global styles in `src/index.css`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel** - `vercel --prod`
- **Netlify** - Drag and drop `dist` folder
- **GitHub Pages** - Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


## 👨‍💻 Author

**Sourya** - [GitHub Profile](https://github.com/sourya001)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Appwrite](https://appwrite.io/) - Backend services
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

Built with ❤️ by Sourya
