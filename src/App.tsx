import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { ArchiveShelfSection } from './components/ArchiveShelfSection';
import { EducationAchievementsSection } from './components/EducationAchievementsSection';
import { ToolkitSection } from './components/ToolkitSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProfileSection />
        <ArchiveShelfSection />
        <EducationAchievementsSection />
        <ToolkitSection />
        <ContactFooterSection />
      </main>
    </div>
  );
}
