import ContactUs from '@/pages/contactUs';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ProtectedRoute from './protectedRoute';

// Lazy loading components
const HomePage = lazy(() => import('../pages/home'));
const GetInvolved = lazy(() => import('../pages/getInvolved'));
const Donate = lazy(() => import('../pages/donate'));
const ImpactAreas = lazy(() => import('../pages/impactAreas'));
const SuccessStories = lazy(() => import('../pages/successStories'));
const News = lazy(() => import('../pages/news'));
// const ProductDetails = lazy(
//   () => import('../pages/ProductDetails/ProductDetails'),
// );
// const TrackOrderPage = lazy(() => import('../pages/TrackOrder/TrackOrderPage'));
// const Compare = lazy(() => import('../pages/Compare/Compare'));
// const Wishlist = lazy(() => import('../pages/Wishlist/Wishlist'));
// const SignIn = lazy(() => import('../pages/Auth/signin'));
// const SignUp = lazy(() => import('../pages/Auth/signup'));
// const AdminDashboard = lazy(() => import('../pages/Admin/Dashboard'));
// const ErrorPage = lazy(() => import('../pages/Error/error-page'));

const routes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/get_involved" element={<GetInvolved />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/impact-areas" element={<ImpactAreas />} />
    <Route path="/success-stories" element={<SuccessStories />} />
    <Route path="/news" element={<News />} />
    <Route path="/contact" element={<ContactUs />} />

    {/* <Route path="/shop" element={<ShopPage />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/track-order" element={<TrackOrderPage />} />
    <Route path="/compare" element={<Compare />} />
    <Route path="/wishlist" element={<Wishlist />} />

    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />
     */}
  </Routes>
);

export default routes;
