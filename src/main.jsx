import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const route=createBrowserRouter([
  {
    path: '/',
    element:<App />
  },
  {
    path:"/instagram",
    element:<div>
      <div>
      <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@tech_tonic_tribe/video/7449068539387874565" data-video-id="7449068539387874565" style={{ maxWidth: '605px', minWidth: '325px' }}>
        <section>
          <a target="_blank" title="@tech_tonic_tribe" href="https://www.tiktok.com/@tech_tonic_tribe?refer=embed">@tech_tonic_tribe</a>
          In our latest session, we were honored to have Hilemeskel Getanh as our guest lecturer! 🌟 A 2nd-year Software Engineering student and talented Full Stack Developer 💻✨
          <a title="tech_tonic_tribe" target="_blank" href="https://www.tiktok.com/tag/tech_tonic_tribe?refer=embed">#tech_tonic_tribe</a>
          <a title="club" target="_blank" href="https://www.tiktok.com/tag/club?refer=embed">#club</a>
          <a title="python" target="_blank" href="https://www.tiktok.com/tag/python?refer=embed">#python</a>
          <a title="debrebrhan_university" target="_blank" href="https://www.tiktok.com/tag/debrebrhan_university?refer=embed">#debrebrhan_university</a>
          <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
          <a title="techcommunity" target="_blank" href="https://www.tiktok.com/tag/techcommunity?refer=embed">#techcommunity</a>
          <a target="_blank" title="♬ Aesthetic - Tollan Kim" href="https://www.tiktok.com/music/Aesthetic-7072513628145977346?refer=embed">♬ Aesthetic - Tollan Kim</a>
        </section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
    </div>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
