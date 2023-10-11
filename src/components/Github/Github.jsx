import { useLoaderData } from "react-router-dom";
function Github() {
  const info = useLoaderData();
  return (
    <div className="text-3xl p-4 text-gray-700 text-center">
      Github Followers: {info?.followers}
      <div className="flex justify-center align-center rounded-full">
        <img
          loading="lazy"
          src={info?.avatar_url}
          alt="user image"
          width="300"
        />
      </div>
    </div>
  );
}

export default Github;
