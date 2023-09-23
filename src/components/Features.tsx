import { FaUserFriends, FaFileAlt, FaPuzzlePiece, FaBook, FaCalendarAlt } from 'react-icons/fa';
import { IoLockClosed } from 'react-icons/io5';

const Features = () => {
  return (
    <div className="py-10 px-5 md:px-20 md:py-20">
      <h1 className="text-4xl text-center mb-20 tracking-wide">Unlock <span className="text-highlight">Success</span> with Our Feature-Packed Platform!</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-morphism-effect flex space-x-4 px-4 py-6 rounded-lg shadow-md hover:opacity-80 cursor-pointer transition-opacity">
          <FaUserFriends size={60} color="#db2777" />
          <div>
            <h3 className="font-bold tracking-wider text-xl mb-2">Realistic Mock Interviews</h3>
            <p className="text-slate-200 text-lg">Experience lifelike interview scenarios with AI-driven interviewers that mimic real-world situations.</p>
          </div>
        </div>
        <div className="glass-morphism-effect flex space-x-4 px-4 py-6 rounded-lg shadow-md hover:opacity-80 cursor-pointer transition-opacity">
          <FaFileAlt size={60} color="#db2777" />
          <div>
            <h3 className="font-bold tracking-wider text-xl mb-2">Personalized Feedback</h3>
            <p className="text-slate-200 text-lg">Receive detailed feedback and performance insights to help you improve your interview skills.</p>
          </div>
        </div>
        <div className="glass-morphism-effect flex space-x-4 px-4 py-6 rounded-lg shadow-md hover:opacity-80 cursor-pointer transition-opacity">
          <FaPuzzlePiece size={65} color="#db2777" />
          <div>
            <h3 className="font-bold tracking-wider text-xl mb-2">Customizable Practice</h3>
            <p className="text-slate-200 text-lg">Tailor your practice sessions to specific industries or job roles, ensuring relevant preparation.</p>
          </div>
        </div>
        <div className="glass-morphism-effect flex space-x-4 px-4 py-6 rounded-lg shadow-md hover:opacity-80 cursor-pointer transition-opacity">
          <FaCalendarAlt size={60} color="#db2777" />
          <div>
            <h3 className="font-bold tracking-wider text-xl mb-2">Scheduling and Reminders</h3>
            <p className="text-slate-200 text-lg">Conveniently schedule interviews and receive reminders to help you stay organized.</p>
          </div>
        </div>
        <div className="glass-morphism-effect flex space-x-4 px-4 py-6 rounded-lg shadow-md hover:opacity-80 cursor-pointer transition-opacity">
          <FaBook size={60} color="#db2777" />
          <div>
            <h3 className="font-bold tracking-wider text-xl mb-2">Interview Library</h3>
            <p className="text-slate-200 text-lg">Access a vast library of interview questions from various domains to enhance your knowledge.</p>
          </div>
        </div>
        <div className="glass-morphism-effect flex space-x-4 p-4 rounded-lg shadow-md hover:opacity-80 cursor-pointer transition-opacity">
          <IoLockClosed size={65} color="#db2777" />
          <div>
            <h3 className="font-bold tracking-wider text-xl mb-2">Secure and Private</h3>
            <p className="text-slate-200 text-lg">Your data and practice sessions are kept secure and private, so you can prepare with confidence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

