import React from 'react';
import Tabs from '../../components/Tabs';
import { useAuthContext } from '../../hooks/useAuthContext';


export default function Home() {
  const { user } = useAuthContext();
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      {!user && <header className="flex justify-center items-center h-[60vh] bg-blue-500 text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Welcome to Swin Study!
          </h1>
          <p className="text-xl mb-8">Connect, Collaborate, and Conquer Your Studies</p>
        </div>
      </header>}
      {user && <header className="flex justify-center items-center mt-10 h-[30vh] bg-gradient-to-r from-gray-700 to-gray-500 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Discover Your Next Step
          </h1>
        </div>
      </header>}

      {user && <Tabs />}


      {/* GitHub Contribution Section */}
      {  <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl text-center font-semibold mb-8">Contribute to the Project</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg mb-6">We are always open to contributions! If you'd like to contribute to this project, feel free to visit our GitHub repository:</p>
          <a
            href="https://github.com/sarthakp107/Blog" // Replace with your actual GitHub repo link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600"
          >
            Visit GitHub Repository
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Fork the repo, submit issues, or send pull requests. We'd love to have you involved!
          </p>
        </div>
      </section>}
    </div>
  );
}
