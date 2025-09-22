# React Frontend Boilerplate

A production-ready React frontend boilerplate with pre-configured Google OAuth, routing, state management, and modern tooling. Skip the setup and start building your next project immediately.

## 🚀 Features

### ⚡ Core Technologies
- **React 19** - Latest React with modern features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework with latest version
- **React Router DOM 7** - Client-side routing with latest features

### 🔐 Authentication & Security
- **Google OAuth Integration** - Ready-to-use Google authentication with `@react-oauth/google`
- **Protected Routes** - Route protection with customizable authentication checks
- **Context-based Auth Management** - Centralized authentication state
- **Security Features** - Right-click and shortcut key protection (Ctrl+U, Ctrl+S)

### 🛠 Development Tools
- **ESLint** - Code linting with React-specific rules
- **Hot Module Replacement** - Instant updates during development
- **Environment Management** - Centralized configuration with error handling
- **TypeScript Support** - Ready for TypeScript integration

### 🎨 UI/UX Components
- **Loading Screens** - Beautiful animated loading components
- **Toast Notifications** - React Hot Toast integration
- **404 Error Page** - Styled not found page with navigation
- **Responsive Design** - Mobile-first responsive layouts

### 🔧 Custom Hooks & Utilities
- **useGoogleAuth** - Google OAuth integration hook
- **useLocalStorage** - Persistent state management with cross-tab synchronization
- **useNavigation** - Section-based navigation utilities
- **useLoading** - Global loading state management
- **Axios Instance** - Pre-configured HTTP client with interceptors
- **Scroll Management** - Automatic scroll-to-top on route changes

### 📱 Performance Optimizations
- **Lazy Loading** - Code splitting for optimal performance
- **Suspense Boundaries** - Proper loading states for lazy components
- **Centralized State** - Context-based state management
- **Optimized Builds** - Vite's optimized production builds

## 📁 Project Structure

```
frontend-boilerplate/
├── public/                     # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── LoadingBar.jsx    # Animated loading spinner
│   │   └── LoadingScreen.jsx # Full-screen loading overlay
│   ├── context/              # React Context providers
│   │   ├── AuthContext.jsx   # Authentication state management
│   │   └── LoadingContext.jsx # Loading state management
│   ├── hooks/                # Custom React hooks
│   │   ├── useGoogleOAuth.js # Google authentication hook
│   │   ├── useLoading.js     # Loading state hook
│   │   ├── useLocalStorage.js # Persistent state hook
│   │   └── useNavigation.js  # Navigation utilities hook
│   ├── pages/                # Route components
│   │   ├── Home.jsx         # Home page component
│   │   └── NotFound.jsx     # 404 error page
│   ├── utilis/              # Utility functions and configurations
│   │   ├── AxiosInstance.jsx # Pre-configured Axios client
│   │   ├── config.js        # Environment variables management
│   │   ├── RenderProtectedRoute.jsx # Route protection component
│   │   └── ScrollToTop.jsx  # Auto-scroll utility
│   ├── App.jsx              # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles (Tailwind imports)
├── .env.sample             # Environment variables template
├── eslint.config.js        # ESLint configuration
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## 🛠 Quick Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Google Cloud Console project (for OAuth)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd frontend-boilerplate
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
cp .env.sample .env
```

4. **Configure environment variables**
Open `.env` and fill in your values:
```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id-here
VITE_BACKEND_URL=your-backend-url-here
VITE_AUTH_URL=your-auth-service-url-here
```

5. **Start development server**
```bash
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🔐 Google OAuth Setup

### 1. Google Cloud Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized JavaScript origins (e.g., `http://localhost:5173`)
6. Add authorized redirect URIs

### 2. Environment Configuration
```env
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id
```

### 3. Usage Example
```jsx
import { useGoogleAuth } from './hooks/useGoogleOAuth';

const LoginButton = () => {
  const { handleGoogleLogin } = useGoogleAuth();
  
  return (
    <button onClick={handleGoogleLogin}>
      Sign in with Google
    </button>
  );
};
```

## 🛡️ Protected Routes

Use the `RenderProtectedRoute` component to protect routes:

```jsx
import RenderProtectedRoute from './utilis/RenderProtectedRoute';

const ProtectedPage = () => (
  <RenderProtectedRoute
    condition={isAuthenticated}
    renderPage={<YourProtectedComponent />}
    fallback="/login"
    errorMessage="Please login to access this page"
    devMode={false} // Set to true to bypass protection in development
  />
);
```

## 🎨 Styling

### Tailwind CSS Integration
- Latest Tailwind CSS 4.x with Vite plugin
- Custom animations and components
- Responsive design utilities
- Dark mode support ready

### Custom Styling
Global styles are imported in `src/index.css`:
```css
@import "tailwindcss";
```

## 🔄 State Management

### Context Providers
The app uses React Context for state management:
- **AuthContext** - Authentication state
- **LoadingContext** - Global loading states

### Local Storage Hook
```jsx
import { useLocalStorageState } from './hooks/useLocalStorage';

const [userData, setUserData] = useLocalStorageState('user', null);
```

## 📡 HTTP Client

Pre-configured Axios instance with:
- Base URL from environment
- Credentials included
- JSON content type headers

```jsx
import axiosInstance from './utilis/AxiosInstance';

const fetchData = async () => {
  const response = await axiosInstance.get('/api/data');
  return response.data;
};
```

## 🎯 Custom Hooks

### useGoogleAuth
Handles Google OAuth flow with error handling and navigation.

### useLocalStorage
Persistent state with cross-tab synchronization and error handling.

### useNavigation
Section-based navigation with smooth scrolling.

### useLoading
Global loading state management.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables for Production
Ensure all required environment variables are set:
- `VITE_GOOGLE_CLIENT_ID`
- `VITE_BACKEND_URL`
- `VITE_AUTH_URL`

## 📝 Customization Guide

### Adding New Pages
1. Create component in `src/pages/`
2. Add lazy import in `App.jsx`
3. Add route in the Routes component

### Adding New Hooks
1. Create hook file in `src/hooks/`
2. Follow the existing naming convention
3. Include error handling and TypeScript support

### Modifying Authentication
- Update `AuthContext.jsx` for additional auth states
- Modify `useGoogleOAuth.js` for custom OAuth flows
- Adjust `RenderProtectedRoute.jsx` for custom protection logic

## 🐛 Common Issues

### Environment Variables Not Loading
- Ensure variables start with `VITE_`
- Restart development server after changes
- Check `.env` file is in root directory

### Google OAuth Issues
- Verify client ID is correct
- Check authorized domains in Google Console
- Ensure backend URL is accessible

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Vite Team** - For the amazing build tool
- **React Team** - For the fantastic framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Google OAuth** - For seamless authentication integration

---

**Happy Coding! 🚀**

*This boilerplate is designed to save you hours of initial setup and let you focus on building amazing features.*
