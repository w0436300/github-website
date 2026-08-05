import { Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import HomeExperience from './HomeExperience.jsx';
import { ResumePage, NotFound } from './pages/index.jsx';
import BlogPage from './pages/BlogPage.jsx';
import AiTutorPage from './pages/AiTutorPage.jsx';
import DesignStandardPage from './pages/DesignStandardPage.jsx';
import BankDocumentPage from './pages/BankDocumentPage.jsx';
import AiKnowledgeBasePage from './pages/AiKnowledgeBasePage.jsx';
import ProjectRequestPage from './pages/ProjectRequestPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ErrorBoundary><Layout /></ErrorBoundary>}>
        <Route index element={<HomeExperience />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="project/cognitive-adaptive-ai-tutor" element={<AiTutorPage />} />
        <Route path="project/design-standard-wcag" element={<DesignStandardPage />} />
        <Route path="project/bank-document-system" element={<BankDocumentPage />} />
        <Route path="project/ai-knowledge-base-engineering" element={<AiKnowledgeBasePage />} />
        <Route path="project/project-request-collaboration" element={<ProjectRequestPage />} />
        <Route path="project/:projectId" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
