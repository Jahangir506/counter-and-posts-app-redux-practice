const Home = () => {
  return (
    <>
      <nav className="bg-blue-700 text-white py-4">
        <div className="flex justify-between items-center px-28">
          <div>
            <h1 className="text-4xl font-bold">JK</h1>
          </div>
          <div>
            <ul className="flex gap-3">
              <li className="hover:text-red-500 hover:bg-gray-50 px-5 ">
                Home
              </li>
              <li className="hover:text-red-500 hover:bg-gray-50 px-5">Blog</li>
              <li className="hover:text-red-500 hover:bg-gray-50 px-5">
                Login
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Home;
