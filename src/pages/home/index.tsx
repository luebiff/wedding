import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative isolate bg-gray-400 h-[calc(100vh-64px)]">
        Home
      </div>

      <div className="h-screen bg-gray-600">Content</div>
    </>
  );
};

export default Home;
