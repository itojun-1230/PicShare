//ライブラリ
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//コンポーネント
import { BrowsePage } from './pages/Browse';
import { UploadPage } from './pages/Upload';

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/browse" element={<BrowsePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
